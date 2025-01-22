import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";

export default function Home() {
  return (
    <div>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
