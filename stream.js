const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`SIMO- Script By : HemaCraft`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : HemaCraft ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`MONSTIS FACEBOOK | فى دراسة`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});
client.login(process.env.BOT_TOKEN);
