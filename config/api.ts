export const PROD_API_URL = "https://abhilashpurohit.com/api";
export const DEV_API_URL = "http://192.168.1.101:3000/api";

export const API_URL = process.env.NODE_ENV === "development" ? DEV_API_URL : PROD_API_URL;