const discord = require('discord.js');

module.exports = {
  name: "ping",
  description: "Ping Command",
  
  async run(client, message, args){

  let miniMSG = await message.channel.send("Loading Latenzy...")
    
    miniMSG.delete()
    message.channel.send(`🏓 Pong! **API:** \`${Math.round(client.ws.ping)}\`ms, **Server:** \`${(miniMSG.createdAt - message.createdAt)}\`ms!`);
  }
}