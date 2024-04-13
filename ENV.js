import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI;
export const SECRET = process.env.SECRET;
export const Refresh_Token_EXPIRY = "1y";
export const Access_Token_EXPIRY = "7d";
export const Access_Token = process.env.ACCESS_TOKEN;
export const Refresh_Token = process.env.REFRESH_TOKEN;