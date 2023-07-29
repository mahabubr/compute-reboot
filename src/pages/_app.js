import Navbar from "@/components/Shared/Navbar";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </>
  );
}
