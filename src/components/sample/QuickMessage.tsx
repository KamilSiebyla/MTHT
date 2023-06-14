import "./QuickMessage.css";

export function QuickMessage(props: { docsUrl?: string }) {
  const { docsUrl } = {
    docsUrl: "https://aka.ms/teamsfx-docs",
    ...props,
  };
  return (
    <div className="quick-message page">
      Here will be users search!
    </div>
  );
}
