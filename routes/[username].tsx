import { Handlers, PageProps } from "$fresh/server.ts";
import Post from "../islands/Post.tsx";

export const handler: Handlers = {
    GET(_req, ctx) {
        const isAuth = false;

        if (!isAuth) return ctx.renderNotFound();
        return ctx.render();
    }
};

const Profile = ()  => {
  return (<>
        <div style={{paddingTop: "4em", gap: "1em", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", gap: 5, flexDirection: "column", width: 500, marginRight: 10, marginLeft: 10, borderRadius: 10, border: "1px solid white", padding: 10}}>
                <div style={{display: "flex", justifyContent: "space-between", maxHeight: 90, gap: 2}}>                 
                    <div style={{border: "2px solid white", borderRadius: "50%", width: 75, height: 75}}>
                        <img style={{borderRadius: "50%", width: 75, height: 75}} src="/images/baddie.webp" />
                    </div>

                    <img alt="settings" src="/images/settings.png" style={{width: 20, height: 20}} />
                </div>

                <div>
                    <div style={{display: "flex", fontSize: "1.5em"}}>
                        <span>baddiefromtheblock</span>
                        <img className="yin" style={{marginLeft: 5, alignSelf: "center", cursor: "pointer", height: 20, width: 20}} src="/images/yin.png" />
                    </div>

                    <span>
                        yooo what's good?
                    </span>
                </div>
            </div>
        </div>

        <div className="flex-center" style={{ marginTop: ".5em"}}>
            <div style={{width: 500, borderRadius: 10, border: "1px solid white", padding: 10, height: 110, marginRight: 10, marginLeft: 10}}>
                <span>Vibing out to</span>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5yeuXkukVGuix3vmLu2BPJ?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" loading="lazy"></iframe>
            </div>
        </div>

        {
            [
                {author: "itsjoetree", content: "wowww hey so yeah we did that mhm"},
                {author: "itsjoetree", content: "wowww hey so yeah we did that mhm"},
                {author: "itsjoetree", content: "wowww hey so yeah we did that mhm"},
                {author: "itsjoetree", content: "wowww hey so yeah we did that mhmmmmmmmmmmmmmmmmmmmmmmmmmmmm"},
            ].map(p => <Post author={p.author} content={p.content} isPhotoPost={false}  />)
        }
    </>
  )
}

export default Profile;
