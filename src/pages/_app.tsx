import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/500.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Toaster} from "sonner"
import { Fragment } from "react";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
       <Toaster />
       <Component {...pageProps} />;
    </Fragment>
  )
}
