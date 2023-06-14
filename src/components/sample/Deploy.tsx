import "./Deploy.css";

export function Deploy(props: { docsUrl?: string }) {
  const { docsUrl } = {
    docsUrl: "https://aka.ms/teamsfx-docs",
    ...props,
  };
  return (
    <div className="deploy page">
      Here will be users search!
    </div>
  );
}
