//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "akintanhaywire@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/TAKA_MD_V";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/BdYycYZb9WrIpc27L1QDgy";
global.website = process.env.GURL || "https://chat.whatsapp.com/BdYycYZb9WrIpc27L1QDgy";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "https://wa.me/447716625630 , https://wa.me/2348056003780";
global.sudo = process.env.SUDO || "2348056003780";
global.owner = process.env.OWNER_NUMBER || "447716625630";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU1IcnBScmg2amRYT2hZdmdwbXdzWTI3RzdWTUFGWlBId0twT2hSSGYwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0IzeGJuKytqbElJZVNYNFFjVU83SXVvaXdmb2xHejUxYXd5ek9Sd0drWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQzAzcW9ZWGlNS1haU21Ja0g1RWg2TUtYMVdVM2ZzTVNsdFR4NWh2V0ZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxWDJXd3hLZ1g5UTNHNGJKM1p4aHora3VFVExMYkFveDRkRDhIeGJJNlVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKSWs5OFR0QncvTHZURTB1VklhZ3JBZFhUQkZsMFY1Mks5ZGM2V1hlM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRDTHFocVFpYTF3VzltaEd6L2pTeGtlSHRDUVhhd0ZtSXlSbER0djRTVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tsVFZtcVdZWkFzRE8vV1hsb0FwSzcva2ljZEwza1MvT1o5WGllLzZVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczYvUDRQMGc0STZmeUVwRm9yQzIvUmJYR3JNeTdwbytqdElsaFpVNXpUcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhoTmpucmhGK0xSczEvVis2SmlsUnRZcmFRNGdvMXNFMUtxWnBHT3NxYy9USzgwNXgrSGZ0c1BoY0lrc2UrTTlKMEZoRFVTb3NucTlKYWkyTUUrcmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJSd2srcEc2Mmh0S3R1c0l1cXVhekdxcjlNajNXVlowTUx3cnlaNlIvbjJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0VGp1OXRJTVRGMklxOWVIOWZ2ME9RIiwicGhvbmVJZCI6IjBkNGY5N2ZkLTQzYjktNGZiOC1iNmZiLTQ2YTBkMDA1YTUwZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRVEs2WTJPVkVsYzZjMllEcTlTcUhiVWVZckE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVUzYVByNW9uRWhCKzNsNWZKMjE1NUhHa0dnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg2UlhFWTZUIiwibWUiOnsiaWQiOiIyMzc2OTA3Njg2MDM6NDhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qk/CdkIDwnZCK8J2QgF/wnZCM8J2QgyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGp2aElRQ0VPV0gvcmtHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib2ptYWxlR2RlODkySjNyRUVTYXUwTXl0NzYvV2pFSDJ0QkVKQ29nMHUyVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYXVLU1RTSjlIM3BPNzVlcGZhUkVxRmNnd1Fqb0dYTWx0NXpmSFRrUkZ6Q0NZNFFHZkhVOHVIRTNCNDRaRGl5TmdEZ24vbmlaM2NrcVJ2WFdhbVpuRFE9PSIsImRldmljZVNpZ25hdHVyZSI6InI2bmlmMFlRR2NPVTdublU4UW5DTk41U0UzV1Y1MmtjQ3g4aVh0TndNQkJodys3aCtpeHk4R1pNTWRDWDhlaktyZWdOMWNvSTVuU1hWUjF4b2FWR2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjkwNzY4NjAzOjQ4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFJNW1wWGhuWHZQZGlkNnhCRW1ydERNcmUrdjFveEI5clFSQ1FxSU5MdGwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIyMTU3OTV9 "
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
