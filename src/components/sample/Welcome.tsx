import { useContext, useState } from "react";
import {
  Image,
  TabList,
  Tab,
  SelectTabEvent,
  SelectTabData,
  TabValue,
} from "@fluentui/react-components";
import "./Welcome.css";
import { app } from "@microsoft/teams-js";
import { Graph } from "./Graph";
import { useData } from "@microsoft/teamsfx-react";
import { QuickMessage } from "./QuickMessage";
import { TeamsFxContext } from "../Context";

export function Welcome(props: { showFunction?: boolean; environment?: string }) {
  const { showFunction, environment } = {
    showFunction: true,
    environment: window.location.hostname === "localhost" ? "local" : "azure",
    ...props,
  };
  const friendlyEnvironmentName =
    {
      local: "local environment",
      azure: "Azure environment",
    }[environment] || "local environment";

  const [selectedValue, setSelectedValue] = useState<TabValue>("local");

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };
  const { teamsUserCredential } = useContext(TeamsFxContext);
  const { loading, data, error } = useData(async () => {
    if (teamsUserCredential) {
      const userInfo = await teamsUserCredential.getUserInfo();
      return userInfo;
    }
  });
  const userName = loading || error ? "" : data!.displayName;
  const hubName = useData(async () => {
    await app.initialize();
    const context = await app.getContext();
    return context.app.host.name;
  })?.data;
  return (
    <div className="welcome page">
      <div className="narrow page-padding">
        <Image src="hello.png" />
        <h1 className="center">Hello {userName ? ", " + userName : ""}!</h1>

        <div className="tabList">
          <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
            <Tab id="Local" value="landing">
              Personal information's
            </Tab>
          </TabList>
          <div>
            {selectedValue === "landing" && (
              <div>
                <Graph />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
