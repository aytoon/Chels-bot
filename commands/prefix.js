const discord = require('discord.js');
const fs = require('fs');

module.exports = {
  name: "setprefix",
  description: "Setprefix command",
  
  async run(client, message, args){
    
    
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("<:error:730878049347698698> You need `MANAGE_GUILD`, for use this command!");
    if(!args[0]) return message.channel.send("<:error:730878049347698698> Please specify an symbole for your new prefix!");
    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    
    prefixes[message.guild.id] = {
      prefixes: args[0]
    }
    
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err);
    })
    
    message.channel.send(`<:success:730878072458444922> Prefix has been changed to: \`${args[0]}\``)
    
  }
}