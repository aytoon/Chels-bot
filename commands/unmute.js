const discord = require('discord.js');

module.exports = {
  name: "unmute",
  description: "Unmute command",
  
 async run(client, message, args){
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("<:error:730878049347698698> You need `MANAGE_ROLES`, for use this command!");
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("<:error:730878049347698698> I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("<:error:730878049347698698> Please mention the member to who you want to unmute");
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("<:error:730878049347698698> Given User do not have mute role so what i am suppose to take")
    }
    
    
    user.roles.remove(muterole)
    
    const unmute = new discord.MessageEmbed()
    .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
        .setColor("#EDC201")
        .setTitle('Member Unmuted')
        .setDescription(`I have unmuted ${message.mentions.users.first().username}#${message.author.discriminator}\n**Moderator:** ${message.author}.`)
        .setFooter("Chels-bot")
        .setTimestamp()
        
        message.channel.send(unmute)
    
    user.send(`<:success:730878072458444922> You are now unmuted from **${message.guild.name}**`)

  }
}