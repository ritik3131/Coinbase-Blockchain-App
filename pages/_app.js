import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "../components/LoadingSpinner.css";
const supportedChainIds = [5];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
