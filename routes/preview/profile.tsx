import { Handlers, PageProps } from "$fresh/server.ts";
import BodyBlock from "../../islands/BodyBlock.tsx";
import Post from "../../islands/Post.tsx";
import SiteBar from "../../islands/SiteBar.tsx";

export const handler: Handlers<boolean> = {
    GET(req, ctx) {
        const url = new URL(req.url);
        const result = url.searchParams.get("mode");
  
        return ctx.render(result != null);
    }
};
  
const Profile = ({ data } : PageProps)  => {
  return (<>
        <SiteBar isPwa={data} />

        <div style={{paddingTop: `${!data ? "3em" : ''}`, gap: "1em", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", gap: 5, flexDirection: "column", width: 500, marginRight: 10, marginLeft: 10, borderRadius: 10, border: "1px solid white", padding: 10}}>
                <div style={{display: "flex", justifyContent: "space-between", maxHeight: 90, gap: 2}}>                 
                    <div style={{border: "2px solid white", borderRadius: "50%", width: 75, height: 75}}>
                        <img style={{borderRadius: "50%", width: 75, height: 75}} src="/images/baddie.png" />
                    </div>

                    <div>
                        <div style={{border: "1px solid white", borderRadius: 12, padding: "3px 5px 3px 5px"}}>Edit Profile</div>
                    </div>
                </div>

                <div>
                    <div style={{display: "flex", fontSize: "1.5em"}}>
                        <span>baddiefromtheblock</span>
                        <img className="yin" style={{marginLeft: 5, alignSelf: "center", cursor: "pointer", height: 20, width: 20}} src="/images/yin.png" />
                    </div>

                    <span>
                        local baddie 💋
                    </span>
                </div>
            </div>
        </div>

        <div className="flex-center" style={{ marginTop: ".5em"}}>
            <div style={{width: 500, borderRadius: 10, border: "1px solid white", padding: 10, height: 110, marginRight: 10, marginLeft: 10}}>
                <span>Vibing out to</span>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0mnoeoS9UklYuKVbkwCkAX?si=a7ac535e4d5a463a?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" loading="lazy"></iframe>
            </div>
        </div>

        {
            [
                {author: "baddiefromtheblock", content: "midnights goes hard"},
                {author: "baddiefromtheblock", content: "so i got the trees, who down?"},
                {author: "baddiefromtheblock", content: "scaries was extra tonight"},
                {author: "baddiefromtheblock", content: "period"},
                {author: "baddiefromtheblock", content: "what's the moves?"},
                {author: "baddiefromtheblock", content: "lit candle, in bed, that's the vibe for the night"},
            ].map((p, i) => <Post author={p.author} content={p.content} isPhotoPost={false} isLiked={i % 2 === 0}  />)
        }

        <BodyBlock />

    </>
  )
}

export default Profile;
