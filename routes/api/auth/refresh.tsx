import { HandlerContext } from "$fresh/server.ts";
import { verify, decode } from "https://deno.land/x/djwt@v2.7/mod.ts";
import { IAuthorization, IPayload } from "../../../interfaces.d.ts";
import { getAuthorization } from "../helpers.ts";

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {
    if (!req.headers.has("Authorization")) throw new Error("Unauthorized");

    const jwt = req.headers.get("Authorization")?.split(' ')[1];
    if (jwt == null) throw new Error("Unauthorized");

    const key = await crypto.subtle.generateKey(
        { name: "HMAC", hash: "SHA-512" },
        true,
        ["sign", "verify"],
    );

    try
    {
        await verify(jwt, key);
    }
    catch
    {
        throw new Error("Invalid token");
    }

    const [_header, pay, _signature] = decode(jwt);

    const body: IPayload = pay as IPayload; 

    const authorization: IAuthorization = await getAuthorization(body.username);

    return new Response(JSON.stringify(authorization), {
        status: 200,
        headers: {
            "content-type": "application/json; charset=utf-8",
        }
    });
}