import { create, getNumericDate } from "https://deno.land/x/djwt@v2.7/mod.ts";
import { IAuthorization } from "../../interfaces.d.ts";

export const getAuthorization = async (username: string) : Promise<IAuthorization> => {
    const key = await crypto.subtle.generateKey(
        { name: "HMAC", hash: "SHA-512" },
        true,
        ["sign", "verify"],
    );

    const atExpiryDate = new Date();
    atExpiryDate.setMinutes(atExpiryDate.getMinutes() + 5);
    const accessToken = await create({ alg: "HS512", typ: "JWT" }, { exp: getNumericDate(atExpiryDate), username: username }, key);

    const rtExpiryDate = new Date();
    rtExpiryDate.setFullYear(rtExpiryDate.getFullYear() + 1);
    const refreshToken = await create({ alg: "HS512", typ: "JWT" }, { exp: getNumericDate(rtExpiryDate), username: username }, key);

    const authorization: IAuthorization = {
        accessToken: {
            value: accessToken,
            exp: getNumericDate(atExpiryDate)
        },
        refreshToken: {
            value: refreshToken,
            exp: getNumericDate(rtExpiryDate)
        }
    }

    return authorization;
}