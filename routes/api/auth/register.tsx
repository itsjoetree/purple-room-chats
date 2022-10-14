import { HandlerContext } from "$fresh/server.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { Sha1 } from "https://deno.land/std@0.159.0/hash/sha1.ts"
import { IAuthorization, IUser } from "../../../interfaces.d.ts";
import { getAuthorization } from "../helpers.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {
    const client = new MongoClient();

    const connectionString: string | undefined = Deno.env.get("MONGODB_URI");
    if (!connectionString) throw new Error("Unable to connect to DB");
    await client.connect(connectionString);

    const db = client.database("purple");
    const users = db.collection<IUser>("users");
    
    const url = new URL(req.url);
    const username = url.searchParams.get("username");
    const password = url.searchParams.get("password");
    const secretCode = url.searchParams.get("code");

    if (secretCode == null) throw new Error("Secret code is required");
    if (username == null) throw new Error("Username can't be null");
    if (password == null) throw new Error("Password can't be null");
    if (decodeURI(secretCode) !== Deno.env.get("SECRET_CODE")) throw new Error("Invalid secret code");

    const cleanUsername = decodeURI(username).replace(" ", '').toLowerCase();

    const user: IUser | undefined = await users.findOne({username: cleanUsername});
    if (user != null) throw new Error("Username is already taken");

    const encryptedPswd = new Sha1().update(decodeURI(password)).toString();

    await users.insertOne({
        username: cleanUsername,
        password: encryptedPswd,
        isVerified: false
    });

    const authorization: IAuthorization = await getAuthorization(username);

    return new Response(JSON.stringify(authorization), {
        status: 200,
        headers: {
            "content-type": "application/json; charset=utf-8",
        }
    });
};