import { IAuthorization, IAuthToken } from "./interfaces.d.ts";

export const authenticate = async (accessToken?: IAuthToken) : Promise<string | null> => {
    const refreshToken = localStorage.getItem("refresh_token");

    const date = Date.now() / 1000;

    if (refreshToken == null || refreshToken === "undefined") return null;

    if (accessToken == null ||
        accessToken.exp > date ||
        accessToken.exp - date <= 300) {
           return await refreshCurrentToken(refreshToken ?? "");
    }

    return null;
}

export const refreshCurrentToken = async (refreshToken: string) : Promise<string | null> => {
    try
    {
        const response = await fetch("/api/auth/refresh", {
            method: "POST",
            headers: { "Authorization": "Bearer " + refreshToken }
        });

        const token: IAuthorization = await response.json();

        if (token.refreshToken != null) {
            localStorage.setItem("refreshToken", token.refreshToken.value);
        }

        if (token.accessToken != null) {
            return token.accessToken.value;
        }
        else {
            localStorage.removeItem("refreshToken");
            return null;
        }
    }
    catch
    {
        localStorage.removeItem("refreshToken");
        return null;
    }
}