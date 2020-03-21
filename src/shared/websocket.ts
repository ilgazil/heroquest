import { Hero } from "@/types";

export const websocket = {
  status: "open",

  hasConnection(role: Hero): boolean {
    return role === "wizard";
  }
};
