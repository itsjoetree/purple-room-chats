import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Post from "../islands/Post.tsx";
import { authenticate } from "../authentication.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const isAuth = await authenticate();

        if (isAuth == null) {
            return ctx.renderNotFound();
        }

        return ctx.render();
    },
};

const Feed = () => {
    
    return (
        <div>
            <Head>
                <title>purple room chats - Feed</title>
                <link href="/stylesheets/pages/post.css" rel="stylesheet" />
            </Head>

            <div style={{textAlign: "center"}}>
                <h1 style={{marginBottom: 0}}>Feed</h1>
            </div>

            <div style={{marginTop: "1em", gap: "1em", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{width: 500, textAlign: "center", border: "1px solid white", borderRadius: 12, padding: 20, marginRight: 10, marginLeft: 10}}>
                    it's a ghost town in here, try to mingle a little bit!
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
        </div>
    );
}

export default Feed;