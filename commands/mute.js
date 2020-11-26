const discord = require('discord.js');


module.exports = {
  name: "mute",
  description: "Mute Command",
  
  async run(client, message, args){
    
    
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("<:error:730878049347698698> You need `MANAGE_ROLES`, for use this command!");
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("<:error:730878049347698698> I do not have permission to manage roles.");
    }
    
    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("<:error:730878049347698698> Please mention the member to who you want to mute");
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("<:error:730878049347698698> I won't mute you -_-");
    }
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("<:error:730878049347698698> Please Give the reason to mute the member")
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("<:error:730878049347698698> This server do not have role with name `Muted`")
    }
    
    if(user.roles.cache.has(muterole)) {
      return message.channel.send("<:error:730878049347698698> Given User is already muted")
    }
    
    user.roles.add(muterole)
    
    const mute = new discord.MessageEmbed()
    .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
        .setColor("#EDC201")
        .setTitle('Member Muted')
        .setDescription(`I have muted ${message.mentions.users.first().username}#${message.author.discriminator}, for the reason: **${reason}**.\n**Moderator:** ${message.author}.`)
        .setFooter("Chels-bot")
        .setTimestamp()
        
        message.channel.send(mute)
    
    user.send(`<:success:730878072458444922> You are muted in **${message.guild.name}**, for the reason: \`${reason}\``)
  }
}