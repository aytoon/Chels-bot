const discord = require('discord.js');
let coins = require('../balance.json');
let pizza = require('../pizza.json');

module.exports = {
  name: "balance",
  description: "Balance command",
  
  async run(client, message, args){
    
    
    if(!coins[message.author.id]){
      coins[message.author.id] = {
        coins: 0
      };
    }
    
    if(!pizza[message.author.id]){
      pizza[message.author.id] = {
        pizza: 0
      };
    }
    
    let uCoins = coins[message.author.id].coins;
    let uPizza = pizza[message.author.id].pizza;
    
    
    const coinsEmbed = new discord.MessageEmbed()
    .setColor("#EDC201")
    .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    .setThumbnail(message.author.avatarURL())
    .setTitle(`${message.author.tag}'s Balance:`)
    .addField("Coins", `<:coins:734023242125148160> ${uCoins} coins`)
    .addField("Pizza", `<:pizza:733761683612500018> ${uPizza} pizza`)
    .setFooter("Chels-bot")
    .setTimestamp()
    
    message.channel.send(coinsEmbed);
  }
}