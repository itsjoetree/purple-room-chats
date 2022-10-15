//import Input from "../components/Input.tsx";

export default function Home() {
  return (
    <>
      <div className={`${window?.matchMedia ? (window?.matchMedia('(display-mode: standalone)').matches ? "index__pwa" : "index") : ''}`} style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <div style={{display: "flex", gap: "1em"}}>
          <h1 className="index__heading" style={{fontSize: "3rem", fontFamily: "headingFont"}}>
            purple room chats
          </h1>

          <img className="index__bubble" style={{alignSelf: "center", width: 40, height: 40}} src="/images/bubbles-v2.png" />
        </div>

        <div style={{display: "flex", gap: "1em", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <img className="index__sun" src="/images/the-sun.webp" style={{borderRadius: "50%", width: 300, height: 300}} />
        </div>

        <h2 style={{margin: 0, fontFamily: "headingFont", fontSize: "2em"}}>in development 👨🏻‍💻</h2>
        <p style={{textAlign: "center", maxWidth: 300}}>
          A low key media site for the hotties, developed by <a style="color: white;" href="https://joesalinas.dev">Joe Tree</a>
        </p>

        <h3 style={{fontFamily: "headingFont", fontSize: "1.5em", margin: 0}}>upcoming features</h3>

        <ul>
          <li>User profiles, where we can have our own content/posts, profile photo, bio.</li>
          <li>Interface to create, edit and delete posts with images/links.</li>
        </ul>
      </div>
    </>
  );
}

/*
      <div style={{display: "flex", gap: "1em", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <img src="/images/the-sun.webp" style={{borderRadius: "50%", width: 300, height: 300}} />

        <h2 style={{fontFamily: "headingFont", margin: 0}}>Register</h2>

        <Input label="username" />
        <Input type="password" label="password" />
        <Input type="password" label="confirm password" />
        <Input label="what's the code?" />

        <button style={{cursor: "poiner", minWidth: "12em", padding: 15, color: "white", background: "#7F00FF", border: "2px solid white", borderRadius: 12}}>
          Submit
        </button>
      </div>
*/