import { ObjectId } from "https://deno.land/x/web_bson@v0.2.5/mod.ts";

export interface IAuthToken {
    value: string;
    exp: number;
}

export interface IAuthorization {
    accessToken: IAuthToken;
    refreshToken: IAuthToken;
}

export interface IPayload {
    username: string;
    exp: number;
}

export interface IUser {
    _id?: ObjectId;
    username: string;
    password: string;
    imgUri?: string;
    bio?: string;
    isVerified: boolean;
}