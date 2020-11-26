const discord = require('discord.js');

module.exports = {
    name: "coinflip",
    description: "Coinflip command",
    
    async run(client, message, args){
      
      
      let number = Math.floor(Math.random() * 2);
      if (number == 1) {
         message.channel.send('<:success:730878072458444922> I choice: **Heads**!')
        }
      if (number == 0) {
         message.channel.send('<:success:730878072458444922> I choice: **Tails**!')
        }
    }
};