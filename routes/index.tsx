import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import SiteBar from "../islands/SiteBar.tsx";

export const handler: Handlers<boolean> = {
  GET(req, ctx) {
      const url = new URL(req.url);
      const result = url.searchParams.get("mode");

      return ctx.render(result != null);
  }
};

export default function Home({ data } : PageProps) {

  return (
      <>
        <Head>
          <link href="/stylesheets/pages/index.css" rel="stylesheet" />
          <link href="/stylesheets/IndexBlock.css" rel="stylesheet" />

        </Head>

        <SiteBar isPwa={data} />

        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <div>
            <div style={{marginTop: `${!data ? "1.5em" : 0}`}} className="IndexBlock__heading-container">
              <h1 style={{marginTop: `${data ? 0 : ''}`}}  className="index__heading">
                purple room chats <img style={{alignSelf: "center"}} className="index__bubble" src="/images/bubbles-v2.png" />
              </h1>
            </div>
          </div>

          <img className="index__sun" src="/images/the-sun.png" style={{}} />
        
          <h2 className="IndexBlock__development">in development 👨🏻‍💻</h2>
          <p style={{textAlign: "center", maxWidth: 300}}>
            A low key media site for the hotties, developed by <a style="color: white;" href="https://joesalinas.dev">Joe Tree</a>
          </p>

          <h2 className="IndexBlock__development">Progress Notes 🧙🏼‍♂️</h2>

          <ul>
            <li>Progress on <a href={`/preview/profile${data ? "?mode=standalone" : ''}`} style={{color: "white"}}>profile</a>, feed and post interfaces.</li>
            <li>Made <a style={{color: "white"}} href={`/docs${data ? "?mode=standalone" : ''}`}>docs</a> page for posting on the site.</li>
            <li>Started building user authentication system.</li>
          </ul>

          <h3 style={{margin: 0}}>upcoming features</h3>

          <ul>
            <li>User profiles, where we can have our own content/posts, profile photo, bio.</li>
            <li>Interface to create, edit and delete posts with images/links.</li>
          </ul>
        </div>
      </>
  );
}