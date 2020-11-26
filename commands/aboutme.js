const discord = require('discord.js');

module.exports = {
  name: "aboutme",
  description: "Botinfo Command",
  
  async run(client, message, args, prefixes){
    
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds`
    }

let miniMSG = await message.channel.send("Loading AboutMe...")
 
miniMSG.delete()
    
    
    const info = new discord.MessageEmbed()
    .setColor("#EDC201")
    .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    .setTitle("About Chels-bot")
    .setDescription("Here can you see all about **Chels-bot**. Show all the Command list type `"+ prefixes[message.guild.id].prefixes +"help`!")
    .addField("Developer(s)", "TheRealKai#8075(<:MainOwner:731602243903553718>), Emyata#1262(❤)")
    .addField("Helper(s)", "Ich Bin's Tim#5204")
    .addField("Version", "v3.5.2")
    .addField("Guild Info", `**Servers:** ${client.guilds.cache.size}\n**Users:** ${client.users.cache.size}\n**Channels:** ${client.channels.cache.size}`)
    .addField("Latenzy", `**API:** ${Math.round(client.ws.ping)}ms\n**Server:** ${(miniMSG.createdAt - message.createdAt)}ms`)
    .addField("Bot Uptime", `${duration(client.uptime)}`)
    .addField("Discord Version", "**DiscordJS:** v12.2.0\n**NodeJS:** v14.4.0")
    .addField("Social Media", "- [Support Server](https://discord.gg/DR22mhF)\n- [Invite Chels-bot to your guild](https://discord.com/api/oauth2/authorize?client_id=730123292173664316&permissions=8&scope=bot)")
    .setFooter("Chels-bot")
    .setTimestamp()
    
    message.channel.send(info);
  }
}