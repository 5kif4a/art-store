import { ArtworkProvider } from "./providers/ArtworkProvider/ArtworkProvider";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <ArtworkProvider>
      <Layout />
    </ArtworkProvider>
  );
}

export default App;
