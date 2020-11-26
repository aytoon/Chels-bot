const discord = require('discord.js');

module.exports = {
  name: "version",
  description: "Version Command",
  
  async run(client, message, args){
    
    message.channel.send("My currently version is: `v3.5.2`");
  }
}