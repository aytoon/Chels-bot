const discord = require('discord.js');

module.exports = {
  name: "invite",
  description: "Invite Command",
  
  async run(client, message, args){
    
    message.channel.send("Invite **Chels-bot** to your guild with this link:\nhttps://discord.com/api/oauth2/authorize?client_id=730123292173664316&permissions=8&scope=bot");
  }
}