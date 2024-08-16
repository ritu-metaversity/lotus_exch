import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";

const baseURL = import.meta.env.PROD ? window.location.origin : import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

let userData: ant = {};

try {
  const user = localStorage.getItem("loginData");
  if (user) {
    userData = JSON.parse(user);
  }
} catch (error) {
  console.error("Failed to parse user data from localStorage:", error);
}


const URL: string = baseURL;

export const socket: Socket = io(URL, {
  path: "/api/socket.io",
  autoConnect: false,
  transports: ["websocket"],
  auth: {
    token: token || "",
    xId: userData?.loginData?.user?.mstrid,
    xType: userData?.loginData?.user?.usetype,
  },
});
