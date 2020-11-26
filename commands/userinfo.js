const discord = require("discord.js");

module.exports = {
  name: "userinfo",
  description: "Userinfo command",
  
  async run(client, message, args){
    
    let userinfo = message.mentions.members.first();
    
    if (!userinfo) {
    const embed1 = new discord.MessageEmbed()
    .setColor("#EDC201")
    .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    .setThumbnail(message.author.avatarURL())
    .setTitle("UserInfo")
    .addField('Username', `${message.author.username}#${message.author.discriminator}`)
    .addField('ID', `${message.id}`)
    .addField('Status', `${message.author.presence.status}`)
    .addField('Created Account At', `${message.author.createdAt}`)
    .setFooter("Chels-bot")
    .setTimestamp()
    
    message.channel.send(embed1);
    } else {
      const embed2 = new discord.MessageEmbed()
    .setColor("#EDC201")
    .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    .setThumbnail(userinfo.user.avatarURL())
    .setTitle("UserInfo")
    .addField('Username', `${userinfo.user.username}#${userinfo.user.discriminator}`)
    .addField('ID', `${userinfo.id}`)
    .addField('Status', `${userinfo.user.presence.status}`)
    .addField('Created Account At', `${userinfo.user.createdAt}`)
    .setFooter("Chels-bot")
    .setTimestamp()
    
    message.channel.send(embed2);
    };
  }
}
