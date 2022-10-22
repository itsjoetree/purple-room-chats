import { Head } from "$fresh/runtime.ts";

const IndexBlock = () => {
    return (<div className={`IndexBlock ${window?.matchMedia ? (window?.matchMedia('(display-mode: standalone)').matches ? "index__pwa" : "index") : ''}`}>
        <Head>
            <link href="/stylesheets/IndexBlock.css" rel="stylesheet" />
        </Head>
        
        <div className="IndexBlock__heading-container">
          <h1 className="index__heading">
            purple room chats
          </h1>

          <img className="index__bubble" src="/images/bubbles-v2.png" />
        </div>

        <img className="index__sun" src="/images/the-sun.webp" style={{}} />
      
        <h2 className="IndexBlock__development">in development 👨🏻‍💻</h2>
        <p style={{textAlign: "center", maxWidth: 300}}>
          A low key media site for the hotties, developed by <a style="color: white;" href="https://joesalinas.dev">Joe Tree</a>
        </p>

        <h2 className="IndexBlock__development">Progress Notes 🧙🏼‍♂️</h2>

        <ul>
          <li>Progress on <a href="/preview/profile" style={{color: "white"}}>profile</a>, feed and post interfaces.</li>
          <li>Made <a style={{color: "white"}} href="/docs">docs</a> page for posting on the site.</li>
          <li>Started building user authentication system.</li>
        </ul>

        <h3 style={{margin: 0}}>upcoming features</h3>

        <ul>
          <li>User profiles, where we can have our own content/posts, profile photo, bio.</li>
          <li>Interface to create, edit and delete posts with images/links.</li>
        </ul>
      </div>
    );
}

export default IndexBlock;