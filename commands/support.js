const discord = require('discord.js');

module.exports = {
  name: "support",
  description: "Support Command",
  
  async run(client, message, args){
    
    message.channel.send("You need more help? Join our Support server:\nhttps://discord.gg/DR22mhF");
  }
}