import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import initShield3PrivyConfig from '@0xshield3/privy';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const privyProviderConfig: PrivyClientConfig = {
    embeddedWallets: {
      createOnLogin: "users-without-wallets",
      noPromptOnSignature: false,
    },
    loginMethods: ["email" , "google" , "twitter" , "discord" , "apple"],
  };
  const shield3PrivyConfig = initShield3PrivyConfig(process.env.NEXT_PUBLIC_SHIELD3_API_KEY || '', privyProviderConfig);
  
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/AdelleSans-Regular.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/AdelleSans-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/AdelleSans-Semibold.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/AdelleSans-Semibold.woff2"
          as="font"
          crossOrigin=""
        />

        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/manifest.json" />

        <title>Privy x Shield3</title>
        <meta name="description" content="Privy x Shield3" />
      </Head>
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
        onSuccess={() => router.push("/dashboard")}
        config={shield3PrivyConfig}
      >
          <ToastContainer position="top-right" />
          <Component {...pageProps} />
      </PrivyProvider>
    </>
  );
}

export default MyApp;