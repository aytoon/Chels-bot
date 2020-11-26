const discord = require('discord.js');
const client = new discord.Client();

const { token } = require('./config.json');

const fs = require('fs');
const prefixes = fs.readFileSync("./prefixes.json", "utf8");
const { readdirSync } = require('fs');
const { join } = require('path');
const config = require('./config.json');
client.config = config;
const coins = require('./balance.json');
const pizza = require('./pizza.json');

const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 10000,
  default: {
    botsCanWin: false,
    exemptPermissions: ["ADMINISTRATOR"],
    embedColor: "#EDC201",
    reaction: "🎁"
  }
});

client.commands = new discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("error", console.error);

client.on('ready', () => {
  console.log(`${client.user.username} is now Online!`);
          let statuses = [
        `@Chels-bot for Server Prefix`, 
        `@Chels-bot for Server Prefix`,
        `@Chels-bot for Server Prefix`
        ];

      setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status);
    }, 5000);
});

client.on('message', async message => {
  
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  
  //if(!coins[message.author.id]){
    //coins[message.author.id] = {
      //coins: 0
    //};
  //}
  
  //let coinAmt = Math.floor(Math.random() * 15) + 1;
  //let baseAmt = Math.floor(Math.random() * 15) + 1;
  //console.log(`${coinAmt} ; ${baseAmt}`);
  
  //if(coinAmt === baseAmt){
    //coins[message.author.id] = {
      //coins: coins[message.author.id].coins + coinAmt
    //};
  //fs.writeFile("./balance.json", JSON.stringify(coins), (err) => {
  //if (err) console.log(err)
    //});
  //}
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
  
  if(message.content.startsWith(`<@730123292173664316>`)) {
     message.channel.send("**My prefix in this guild is: `"+ prefixes[message.guild.id].prefixes +"`!**");
   }
  
  let prefix = prefixes[message.guild.id].prefixes;
  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) return;
    
    try {
      client.commands.get(command).run(client, message, args, prefixes);
      
    } catch (error){
      console.error(error);
    }
  }
});

client.login(config.token);