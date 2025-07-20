import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from "@/pages/components/layout/AppShell";
import Cursor from "@/utils/Cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Cursor />
      <Component {...pageProps} />
    </AppShell>
  );
}
