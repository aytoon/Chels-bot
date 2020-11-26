const discord = require('discord.js');

module.exports = {
  name: "vote",
  description: "Vote command",
  
  async run(client, message, args){
    
    const embed = new discord.MessageEmbed()
    .setColor("#EDC201")
    .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    .setTitle("Vote for Chels-bot")
    .setDescription("You can vote every 12 hours in 1 bot list!")
    .addField("Vote Sections", "- [discord-botlist.eu](https://www.discord-botlist.eu/bots/730123292173664316/vote)\n- [bots.discordlabs.org](https://bots.discordlabs.org/bot/730123292173664316/vote)\n- [keksstudios.tk](https://keksstudios.tk/discordrobots/bot/result/?bot=730123292173664316&type=vote)")
    .setFooter("Chels-bot")
    .setTimestamp()
    
    message.channel.send(embed)
  }
}