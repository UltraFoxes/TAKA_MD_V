//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "diorrebero84@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/TAKA_MD_V";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "https://wa.me/2347078415830 , https://wa.me/237690768603";
global.sudo = process.env.SUDO || "2347078415830";
global.owner = process.env.OWNER_NUMBER || "447425617563,2347078415830";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/vci8Frt.jpeg,https://i.imgur.com/oG6RiCF.jpeg,https://i.imgur.com/uZLV84s.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kata-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0NvZURoMTRkMklrTU15cXdZMFdDejZmNWI5eTJzL1kzcU1LbnNROURVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlR6Y3BUNFluLzVkS1hkU0J5b1ozMmlBNHVSNTlEOHl3djBhbTlMQkFSaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQTF4bHNPM0JUVEtSSjhBUGpUL0laVzZkY0NZWWZmR2FCYWZkVlh5ODE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxWERJMCt3c2lVaTg1ZWZZOEl6Sm55THM2aERtZE1KZXF6Mjd0cEpPdEZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhGY0prUXZ5bUxFckNxbG5TTnZBSTZ5ZU9JeXBTQ3Y5MGpYeXlQTWFSVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxzYXc2VFoxVDNQREJqOSsrWVJsRmtSdGM2Ti9DWDlWSUxjeGlWM0x2UUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tnWEtoNXIyWFhlc29LZUd6VDN1T1BlSkZUc3RFdW0rYU96cHlaQVVIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDVHajU5MEFmQVVLcTB4M3QxaXN4YmdXOU5hZ3V2R0pRZ0ROeCtiSjRrbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMRVN1ODVjZUNQZ0RkbTEvYWREWkhRMU9tZXJpYnc3ZS9ZVTB6cnhpbzZHbFZMSU40NnpFdUhVREJ0YzZBMmlseENxMmFVUlRsTmgvNTdZNkMrZGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6IjA0dmRZUjREcEVtNklaNExRNEl1aHkvMkF6Z2gza3NpRWdRcFUrWWp0N2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDQ3NDI1NjE3NTYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjEzMTk5OUJCNTRGMThBMTIyOTBDOENCQjBFRkE1OTNDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA3MDc5MTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQ0NzQyNTYxNzU2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1M0YzRjQ4ODBDNjg1NEVBNjM2NEMzMUY2QUY2QTBBNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNzA3OTE3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaT2Z3MThFeFRzT18wNC1MWUpWSnlRIiwicGhvbmVJZCI6Ijc1Mzk0YjI5LTdiMzAtNDM3MC1iMjVmLTMwZTllZjFhYjA5MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXWGZ0bitxM1RNTFRaL0ErVlgyOU83eWxSeGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkFnMkR4b09VZHlnekZOa2FNc1AzSnZFRDVnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlYyOU5RVDFRIiwibWUiOnsiaWQiOiI0NDc0MjU2MTc1NjM6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLaW5ndnliZXoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0svaDFZQUhFTDJEb3JrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktpdElDQ28vN3h0TVFXZVUzanBqNFI2TTRmWnhjMkFJcDFxOTJDaEhlWEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhBK2RpZGZITEpKMGl3WTRhTTlWdEN5WTlabE9OUDV5ZUFQckxhbGhjV2wrOGl2VWVNYng2cUdKTTRUaGdIVDVTT1ZJemUwMUd0akx1VWZ3TmJ0ekNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwWldjNWp4WGs2T0dSKzZWcUZ4a2lKcFZZYWRTckxJZGlGekZzbVk5c0JjTWR2Zk1wOExFR09pV21oQW1ONmNUUTlFVFhhL1FVOUh5ZkVQa0N2eWVqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ0NzQyNTYxNzU2Mzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNvclNBZ3FQKzhiVEVGbmxONDZZK0Vlak9IMmNYTmdDS2RhdmRnb1IzbHcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA3MDc5MTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT0xlIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜TAKA_TECH⌝☜`",
  author: process.env.PACK_AUTHER || "꧁•༆$ℭ𝔥𝔯𝔦𝔰_𝔇𝔦𝔬𝔯🚹࿇꧂",
  packname: process.env.PACK_NAME || "TAKA MD",
  botname: process.env.BOT_NAME || "ᵏᵍ┘TAKA_𝙼𝙳_𝚅𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜TAKA_TECH☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TAKA").toUpperCase(),
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
