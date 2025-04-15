import { createClient } from "@retconned/kick-js";
import "dotenv/config";

const mainChannel = "trinsyca";

const client = createClient(mainChannel, { logger: true });

client.on("ready", () => {
  console.log(`Bot hazır ve ${client.user?.tag} olarak giriş yaptı!`);
});

client.login({
  type: "tokens",
  credentials: {
    bearerToken: process.env.BEARER_TOKEN,
    cookies: process.env.COOKIES,
  },
});

client.on("ChatMessage", async (message) => {
    console.log(`${message.sender.username}: ${message.content}`);
});
