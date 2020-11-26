const discord = require('discord.js');
const { getPokemon } = require('../utils/pokemon.js');
const fetch = require('node-fetch');

module.exports = {
  name: "pokedex",
  description: "Pokedex command",
  
  async run(client, message, args){
    
      if (!args[0]) return message.channel.send('<:error:730878049347698698> Please specify an pokemon name!');
    
        const pokemon = message.content.toLowerCase().split(" ")[1];
        try {
            const pokeData = await getPokemon(pokemon);
            const { 
                sprites, 
                stats, 
                weight, 
                name, 
                id, 
                base_experience,
                abilities,
                types
            } = pokeData;
            const embed = new discord.MessageEmbed();
            embed.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
            embed.setColor("#EDC201")
            embed.setTitle(`Pokemon: ${name} | #${id}`)
            embed.setThumbnail(`${sprites.front_default}`);
            stats.forEach(stat => embed.addField(stat.stat.name, stat.base_stat));
            types.forEach(type => embed.addField('Type', type.type.name));
            embed.addField('Weight', weight);
            embed.addField('Base Experience', base_experience)
            embed.setFooter("Chels-bot")
            embed.setTimestamp();
            message.channel.send(embed);
        }
        catch(err) {
            console.log(err);
            message.channel.send(`<:error:730878049347698698> Pokemon ${pokemon} does not exist!`);
        }
  }
}