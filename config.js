const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "18763351213";
global.sudo = process.env.SUDO || "1878981513";
global.owner = process.env.OWNER_NUMBER || "18768981513";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "18768981513";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dubDJQb045bUZQTTV2eUFqWVgzM3NsZkQ1U0VKTHIrYnZ3ckoyRWRVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic21CMHV2TUVxZDNSNFhsbzRBcGxwMlhlV05MMXFEMkFIRGg1ZDdsMTZVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQzdDWnVTMXo0TDY0R2dVRzFycGQ0dGxPRzVEakJDM1N3bnlzbmVwQ0YwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTUFrQ0lndmdGc05uemlLWGZsNzArQjFoTURoa2l3b3hIVXlXc0NuTldzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGM2ZvSnY4blhQZGFJa3FqeEUyeWw5ZE5PS1VzeUxhYjMyalhJbGZ0MVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdiU21ud01oVlRXREQ3eVFhaFRTNFpTQlJCUER4QVFpN1c5YXpWSjZ0VE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdWemNFRE1PZ3lOZHRZUkl4cWJ3RGk1YTlJaG1JQTYwVTRMSjRSS20xND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkxPcTRCOE1lSzFPQmJWQWh3Uy96TUp6SVVUeUQzdEU3K3ZacEtnZGVqMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZETDk5YThxV05aWmRDTStxaEowc1BmZTRSVUNlamk4SnZwR282Z2lkR3pzemZaUktNWTNJMFBrckFJTUtTRDZnK1dHS3BkNHNQd3dWK2d3SjZhTWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IjE0UTFxYTJsVGh1L2praWRKTGoweWM3Yk1jcjBiVUd5M0tYZWFKazh1ODQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJQWTQ5LW92U2dHTjZXYnVnMFRDbmciLCJwaG9uZUlkIjoiOTY0MDAzODQtOTAwNS00NGU3LTkzNzUtNTA4ZTQwYjgxOTRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRoeGhFQXdpcGp5QldqMHhuTzVFWHJtTkdhND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1eWl5QkpYY0dHR0lNaXdJbFM2MnUzMnF5U289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1gxUldWSEMiLCJtZSI6eyJpZCI6IjE4NzY4OTgxNTEzOjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BUSjRxc0hFTEhmODdJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikw0YmJQSTlwK2FsajBaSXZpdURmQnM4TUN5QXBKSUZyU0lENGNiU2xGbk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZ6ZDhER3ZvRkZPSFZtdm1IYU1IOXNMcE52ZkMwZm5SbEhoc1hnYXQ1STZiV2gwOWhqZ2wyTXcvZGJuUjY0UjdzSlF4VUhhZDJRUzNOdG1Ib0E4WkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYdlQ3QVJsQ0tuMERRYi96MDBXaVdySHhzcEUvOHlMOW9iK2NlQ3JxeGt4VjN2U09uWXdQSzVpS01xOFFMdGNKc3VKOERpVDhmOUUvWUZ4dlZYa01pdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4NzY4OTgxNTEzOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUytHMnp5UGFmbXBZOUdTTDRyZzN3YlBEQXNnS1NTQmEwaUErSEcwcFJaeiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzM2NjcxOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPY2IifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝑊𝛨𝛪𝛧𝐵𝛩𝑇-𝛭𝐷",
  author: process.env.PACK_AUTHER || "WHIZBOT-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "WHIZBOT-MD",
  ownername: process.env.OWNER_NAME || "SIAH6️⃣",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
