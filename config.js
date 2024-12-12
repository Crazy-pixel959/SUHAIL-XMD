const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://bravinevernight:Shinrakusakabe@bravin.tskg9.mongodb.net/?retryWrites=true&w=majority&appName=Bravin"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://bravinevernight:Shinrakusakabe@bravin.tskg9.mongodb.net/?retryWrites=true&w=majority&appName=Bravin"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_23_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM3LFxuICAgICAgICA4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExLFxuICAgICAgICA2LFxuICAgICAgICA4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI2LFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAzLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrTmFtSUlwL1JwZHRPUXJOVEZvVXozektRdmYzRS9PZzFOTUdudnlUNmRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc4NTg5OTg3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUQxM0IxRjE3NjFDMUYxNUI4NDE5MDBEQkNBRkQ5NDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzOTA1MzgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZjZFFjZVhBUjJxQ0F4c3c1VEx0WXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWU2MTM0NjAtYmIyNS00MjRhLTkyOTAtNDU5MzhlZTNhZWFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAxMjMsXG4gICAgICA5NCxcbiAgICAgIDE2MSxcbiAgICAgIDQyLFxuICAgICAgMTAyLFxuICAgICAgMTQwLFxuICAgICAgMjQ5LFxuICAgICAgMTg4LFxuICAgICAgMjYsXG4gICAgICAxNzIsXG4gICAgICA5NyxcbiAgICAgIDcsXG4gICAgICAxMzQsXG4gICAgICAzNCxcbiAgICAgIDc2LFxuICAgICAgMTY5LFxuICAgICAgMjIyLFxuICAgICAgODMsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDMxLFxuICAgICAgNjIsXG4gICAgICA4MyxcbiAgICAgIDY5LFxuICAgICAgNTAsXG4gICAgICAxODYsXG4gICAgICAwLFxuICAgICAgMTg0LFxuICAgICAgNjYsXG4gICAgICAxODcsXG4gICAgICAxODQsXG4gICAgICAyMDQsXG4gICAgICAyMjUsXG4gICAgICA0MSxcbiAgICAgIDI0MCxcbiAgICAgIDEwMyxcbiAgICAgIDI0OCxcbiAgICAgIDE1NyxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyTEc1TkxYU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzg1ODk5ODc1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NjgzNzE3NTA3NDk0ODozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ovdHR1c0hFTmlYNWJvR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM1NlMDNocmF0OHIvTzQ4Y21oanY0aFVpSzRxMzlRWTRoc2dtUS9NSFBXRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZVXRvTVdWelJiOEUzZElIVS9sd3BWb1VlQVBXdFBRSjlLeUsvY0JqMC9WVHJTcmdHRDY2ZEx2ZUwydmwvMmxndys0Y2cvc0w5eGJTcjFSVFZySzRBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhTXRkV3RCMVdKZGFCaVlpUHlNR1BxbXNVVEoyY0ZMK0VIUWdtTHVCbU9ZajNnOEQ5RTZKRDZVVlM4emlVci9pRHBBbG1va0w5UHhzd05aOHN3RGhqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3ODU4OTk4NzU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM5MDUzNzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFENldcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ2Vy5qc29uIjogIntcImtleURhdGFcIjpcImNNZU0zRlZnZkx3eVpreGhZU3FmQkkwVVp1Q2ljRlMrRStTc0g5TmRwMWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEwNDM0MjE3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNzM1ODk4MTk0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
