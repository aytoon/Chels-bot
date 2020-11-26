const fetch = require('node-fetch');
const discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Covid command",

    async run (client, message, args){
      
      // Error Messages
      
    const error1 = new discord.MessageEmbed()
    error1.setColor("#e03442")
    error1.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error1.setTitle("<:error:730878049347698698> Error Code: 10")
    error1.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error1.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"covid`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `Please specify an country for search!`")
    error1.setFooter('Chels-bot')
    error1.setTimestamp()
    
    const error2 = new discord.MessageEmbed()
    error2.setColor("#e03442")
    error2.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error2.setTitle("<:error:730878049347698698> Error Code: 11")
    error2.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error2.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"covid`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `Can't find the specific country!`")
    error2.setFooter('Chels-bot')
    error2.setTimestamp()
      
      // Error Messages End

      let countries = args.join(" ");

      if(!args[0]) return message.channel.send(error1);

      if(args[0] === "all"){
        fetch(`https://covid19.mathdro.id/api`)
        .then(response => response.json())
        .then(data => {
        let confirmed = data.confirmed.value.toLocaleString()
        let recovered = data.recovered.value.toLocaleString()
        let deaths = data.deaths.value.toLocaleString()

        const embed = new discord.MessageEmbed()
        .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
        .setColor("#EDC201")
        .setTitle(`Worldwide COVID-19 Stats 🌎`)
        .addField('Confirmed Cases', confirmed)
        .addField('Recovered', recovered)
        .addField('Deaths', deaths)

        message.channel.send(embed)
    })
  } else {
    fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
    .then(response => response.json())
    .then(data => {
      let confirmed = data.confirmed.value.toLocaleString()
      let recovered = data.recovered.value.toLocaleString()
      let deaths = data.deaths.value.toLocaleString()

      const embed = new discord.MessageEmbed()
      .setColor("#EDC201")
      .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
      .setTitle(`COVID-19 Stats for **${countries}**`)
      .addField('Confirmed Cases', confirmed)
      .addField('Recovered', recovered)
      .addField('Deaths', deaths)

      message.channel.send(embed)
  }).catch(e => {
      return message.channel.send(error)
   })
  }
 }
}