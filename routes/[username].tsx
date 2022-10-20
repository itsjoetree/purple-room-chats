import { Handlers, PageProps } from "$fresh/server.ts";
import { authenticate } from "../authentication.ts";
import Post from "../islands/Post.tsx";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const isAuth = await authenticate();

        if (!isAuth) {
            return ctx.renderNotFound();
        }

        return ctx.render();
    }
};

const Profile = ({params, data} : PageProps)  => {
  return (<>
        <div style={{paddingTop: "4em", gap: "1em", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", gap: 5, flexDirection: "column", width: 500, marginRight: 10, marginLeft: 10, borderRadius: 10, border: "1px solid white", padding: 10}}>
                <div style={{border: "2px solid white", borderRadius: "50%", width: 75, height: 75}} />
                
                <div>
                    <h3 style={{margin: 0}}>{/*params?.username*/}</h3>
                    <span>
                        {/*params?.bio*/}
                    </span>
                </div>
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
