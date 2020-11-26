const discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
  name: "meme",
  description: "Meme command",
  
  async run(client, message, args){
    
    const subReddits = ['meme', 'me_irl', 'dankmeme', 'memeEconomy']
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);
    
    const embed = new discord.MessageEmbed()
    .setColor("#EDC201")
    .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    .setURL(`https://reddit.com/r/${random}`)
    .setTitle(`Search: reddit/r/${random}`)
    .setImage(img)
    .setFooter("Chels-bot")
    .setTimestamp()
    
    message.channel.send(embed);
  }
}