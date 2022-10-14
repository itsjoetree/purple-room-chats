import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import SiteBar from "../islands/SiteBar.tsx";

export default function App(props: AppProps) {
  return (<html>
    <Head>
      <title>purple room chats</title>
      <link href="/styles.css" rel="stylesheet" />
      <link href="/stylesheets/Input.css" rel="stylesheet" />
      <link href="/stylesheets/SiteBar.css" rel="stylesheet" />
      <meta charSet="UTF-8" />
      <meta name="description" content="Purple room chats" />
      <meta name="keywords" content="Podcast, Chats" />
      <meta name="author" content="Joe Salinas" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    
    <body className="app__body bodyClass">
        <SiteBar />
        <props.Component />
    </body>
  </html>);
}