const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}



// Change following defaultConfig if you are deploying DANUWA-MD on github actions/github codespaces or replit...Railway users don't need to edit this



const defaultConfig = {
  SESSION_ID: "7Mgj3Cra#aU0O0fDeTwoPJzzn17hhUFuwJlv_RY9b4AEEf0MpHWc", // Put your session id here
  ALIVE_IMG: "https://github.com/DarkChenu/Dark-Chenu/blob/49687b66f4881ba6f18c1aa0631d13c3ebe42675/5faa8a2e-62c8-49bc-bf78-adaff8cc2c2d.png?raw=true",
  ALIVE_MSG: "*Hello👋 Darkz-MD Is Alive Now😍*", // Change alive msg from here
  OPENAI_API_KEY: "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",// Add OPENAI API key here
  GEMINI_API_KEY: "AIzaSyD1PCftbQD2O1_Kk22sXAcDUi1mVFeSxFo", // Add Gemini API key here
  REMOVE_BG_API_KEY:"qTmLg3cCfvfY8gvy7EZrrzJM", // Add removebg API key here
  WEATHER_API_KEY: "c8e70b25be9c468881d91203250806", // Add your weather API key here
  BOT_OWNER: "94762877975", // Replace your bot owner number here with 94(country code)
  ownerNumber: ["94762877975"], // Replace your bot owner number here (same as bot owner number)
  AUTO_READ_STATUS: "true", // Turn on or off auto read status from here
  MODE: "public", // 'private', 'public'
};

//*******************************************************************************************************************************************************

module.exports = {
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY, 
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || defaultConfig.WEATHER_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.OWNER_NUMBER
    ? process.env.OWNER_NUMBER.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
  MODE: process.env.MODE || defaultConfig.MODE,

};
