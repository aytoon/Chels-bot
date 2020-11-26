const discord = require('discord.js');

module.exports = {
  name: "warn",
  description: "Warn command",
  
  async run(client, message, args){

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('<:error:730878049347698698> You need `MANAGE_MESSAGES`, for use this command!');

    const user = message.mentions.users.first();
    if(!user) return message.channel.send('<:error:730878049347698698> You didn\'t mention anyone!');

    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return message.channel.send('<:error:730878049347698698> They aren\'t in the server!');

    const reason = args.splice(1).join(' ');
    if(!reason) return message.channel.send('<:error:730878049347698698> You need to give a reason!');

    const channel = message.guild.channels.cache.find(c => c.name === 'potato');
    
    try {
        user.send(`<:success:730878072458444922> You are warned on **${message.guild.name}**, for the reason: **${reason}**!`);
    } catch(err) {
        console.warn(err);
    }

    const embed = new discord.MessageEmbed()
    .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    .setColor("#EDC201")
    .setTitle('Member Warned')
    .setDescription(`I have warned ${member}#${message.author.discriminator}, for the reason: **${reason}**.\n**Moderator:** ${message.author}.`)
    .setFooter("Chels-bot")
    .setTimestamp()
    
    message.channel.send(embed);
  }
}