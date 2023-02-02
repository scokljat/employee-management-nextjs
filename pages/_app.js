import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "../redux/store";
import "@/styles/globals.css";

//create a client

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
