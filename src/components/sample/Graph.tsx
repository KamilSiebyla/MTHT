import "./Graph.css";
import { useGraphWithCredential } from "@microsoft/teamsfx-react";
import { Providers, ProviderState } from "@microsoft/mgt-element";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";
import { PersonCardGraphToolkit } from "./PersonCardGraphToolkit";
import { useContext } from "react";
import { TeamsFxContext } from "../Context";
import { Agenda } from "@microsoft/mgt-react";

export function Graph() {
  const { teamsUserCredential } = useContext(TeamsFxContext);
  const { loading, error, data, reload } = useGraphWithCredential(
    async (graph, teamsUserCredential, scope) => {

      const profile = await graph.api("/me").get();
      
      const provider = new TeamsFxProvider(teamsUserCredential, scope);
      Providers.globalProvider = provider;
      Providers.globalProvider.setState(ProviderState.SignedIn);

      let photoUrl = "";
      try {
        const photo = await graph.api("/me/photo/$value").get();
        photoUrl = URL.createObjectURL(photo);
      } catch {
        // Could not fetch photo from user's profile, return empty string as placeholder.
      }
      return { profile, photoUrl };
    },
    { scope: ["User.ReadWrite.All"], credential: teamsUserCredential }
  );

  return (
    <div>
      <PersonCardGraphToolkit loading={loading} data={data} error={error} />
    </div>
  );
}
