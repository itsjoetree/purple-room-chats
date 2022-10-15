import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import SiteBar from "../islands/SiteBar.tsx";

export default function App(props: AppProps) {
  return (<html>
    <Head>
      <title>purple room chats</title>
      <link href="/styles.css" rel="stylesheet" />
      <link href="/stylesheets/pages/post.css" rel="stylesheet" />
      <link href="/stylesheets/NewPost.css" rel="stylesheet" />
      <link href="/stylesheets/Input.css" rel="stylesheet" />
      <link href="/stylesheets/SiteBar.css" rel="stylesheet" />
      <meta charSet="UTF-8" />
      <meta name="description" content="Purple room chats" />
      <meta name="keywords" content="Podcast, Chats" />
      <meta name="author" content="Joe Salinas" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <meta name="theme-color" content="#7F00FF" />
      <meta name="msapplication-TileColor" content="#7F00FF" />
      <meta name="msapplication-TileImage" content="./mstile-150x150.png" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="purple room chats" />
      <meta name="application-name" content="purple room chats" />
      <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="./favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="./favicon-16x16.png" sizes="16x16" />
      <link
        crossOrigin="use-credentials"
        rel="manifest"
        href="/manifest.json"
      />

      <script type="module">
        import "https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate/dist/pwa-update.js";
        const el = document.createElement("pwa-update");
        document.body.appendChild(el);
      </script>
    </Head>
    
    <body id="main" style={{marginTop: "4em"}} className="app__body bodyClass">
        <SiteBar />
        <props.Component />
    </body>

    <script type="text/javascript" src="./pwa-sw.js" />
    <script type="text/javascript" src="./pwa-sw-register.js" />
  </html>);
}