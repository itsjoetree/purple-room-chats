import { Handlers, PageProps } from "$fresh/server.ts";
import { IUser } from "../interfaces.d.ts";
import Post from "../islands/Post.tsx";

export const handler: Handlers<IUser> = {
    async GET(_req, ctx) {
        const BASE_URI = `https://data.mongodb-api.com/app/${Deno.env.get("APP_ID")}/endpoint/data/v1/action`;
        const DATA_SOURCE = "PurpleRoom";
        const DATABASE = "PurpleRoom";
        const COLLECTION = "users";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": Deno.env.get("DATA_API_KEY") ?? ""
            },
            body: ""
        }

        const query = {
            collection: COLLECTION,
            database: DATABASE,
            dataSource: DATA_SOURCE,
        }

        options.body = JSON.stringify(query);

        const result = await fetch(BASE_URI + "/findOne", options);
        console.log(await result.json());

        return ctx.render({} as IUser);
    },
};

const Profile = ({params, data} : PageProps)  => {
  return (<>
        <div style={{paddingTop: "4em", gap: "1em", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", gap: 5, flexDirection: "column", width: 500, marginRight: 10, marginLeft: 10, borderRadius: 10, border: "1px solid white", padding: 10}}>
                <div style={{border: "2px solid white", borderRadius: "50%", width: 75, height: 75}} />
                
                <div>
                    <h3 style={{margin: 0}}>{params?.username}</h3>
                    <span>
                        {data?.bio}
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
