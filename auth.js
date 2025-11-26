import express from "express";
import querystring from "querystring";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get("/login", (req, res) => {
  const params = querystring.stringify({
    client_id: process.env.DISCORD_CLIENT_ID,
    redirect_uri: process.env.DISCORD_REDIRECT_URI,
    response_type: "code",
    scope: ["identify", "email", "guilds"].join(" ")
  });

  res.redirect("https://discord.com/oauth2/authorize?" + params);
});

export default router;
