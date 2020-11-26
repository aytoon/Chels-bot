const discord = require('discord.js');

  module.exports = {
    name: "help",
    description: "Help command",
    
    async run(client, message, args, prefixes){
      
      const page1 = new discord.MessageEmbed()
      page1.setColor("#EDC201")
      page1.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
      page1.setTitle("Help List v3.5.2")
      page1.setDescription("React with the emoji's, under this help page for shows the list of commands!\nMy prefix in this server is: `"+ prefixes[message.guild.id].prefixes +"`!")
      page1.addField("Moderation Commands", ""+ prefixes[message.guild.id].prefixes +"ban : `Ban a User out this guild!`\n"+ prefixes[message.guild.id].prefixes +"kick : `Kick a User out this guild!`\n"+ prefixes[message.guild.id].prefixes +"mute : `Mute an User on this guild!`\n"+ prefixes[message.guild.id].prefixes +"unmute : `Unmute an User on this guild!`\n"+ prefixes[message.guild.id].prefixes +"giveaway : `Start an giveaway on this guild!`\n"+ prefixes[message.guild.id].prefixes +"reroll : `Reroll your giveaway for a another winner!`\n"+ prefixes[message.guild.id].prefixes +"setprefix : `Change the prefix on this guild!`\n"+ prefixes[message.guild.id].prefixes +"purge : `Clear messages in this guild!`\n"+ prefixes[message.guild.id].prefixes +"warn : `Warn an User on this guild with a reason!`")
      page1.addField("Other Links", "- [Support Server](https://discord.gg/DR22mhF)\n- [Invite Chels-bot to your guild](https://discord.com/api/oauth2/authorize?client_id=730123292173664316&permissions=8&scope=bot)")
      page1.setFooter("Chels-bot")
      page1.setTimestamp()
      
      const page2 = new discord.MessageEmbed()
      page2.setColor("#EDC201")
      page2.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
      page2.setTitle("Help List v3.5.2")
      page2.setDescription("React with the emoji's, under this help page for shows the list of commands!\nMy prefix in this server is: `"+ prefixes[message.guild.id].prefixes +"`!")
      page2.addField("Information Commands", ""+ prefixes[message.guild.id].prefixes +"aboutme : `Shows all my Informations!`\n"+ prefixes[message.guild.id].prefixes +"help : `Shows the main Panel of the commands list!`\n"+ prefixes[message.guild.id].prefixes +"invite : `Invite me to your guild!`\n"+ prefixes[message.guild.id].prefixes +"support : `Join my Support server and get more help about me!`\n"+ prefixes[message.guild.id].prefixes +"version : `Shows my version!`\n"+ prefixes[message.guild.id].prefixes +"uptime : `Shows my uptime!`\n"+ prefixes[message.guild.id].prefixes +"ping : `Shows my ping Latenzy!`\n"+ prefixes[message.guild.id].prefixes +"userinfo : `Show your and a mentioned User stats!`")
      page2.setFooter("Chels-bot")
      page2.addField("Other Links", "- [Support Server](https://discord.gg/DR22mhF)\n- [Invite Chels-bot to your guild](https://discord.com/api/oauth2/authorize?client_id=730123292173664316&permissions=8&scope=bot)")
      page2.setTimestamp()
      
    const page3 = new discord.MessageEmbed()
      page3.setColor("#EDC201")
      page3.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
      page3.setTitle("Help List v3.5.2")
      page3.setDescription("React with the emoji's, under this help page for shows the list of commands!\nMy prefix in this server is: `"+ prefixes[message.guild.id].prefixes +"`!")
      page3.addField("Fun Commands", ""+ prefixes[message.guild.id].prefixes +"ascii : `Type an text, and get a cool ascii text!`\n"+ prefixes[message.guild.id].prefixes +"covid : `Get information about an country of COVID-19!`\n"+ prefixes[message.guild.id].prefixes +"meme : `Find a reddit meme, and smile!`\n"+ prefixes[message.guild.id].prefixes +"bubblewrap : `Play a bubblewrap Game!`\n"+ prefixes[message.guild.id].prefixes +"coinflip : `Play a Coinflip Game!`\n"+ prefixes[message.guild.id].prefixes +"truthordare : `Truth or Dare? what you choice?`\n"+ prefixes[message.guild.id].prefixes +"pokedex : `Get information about a pokemon!`")
      page3.setFooter("Chels-bot")
      page3.addField("Other Links", "- [Support Server](https://discord.gg/DR22mhF)\n- [Invite Chels-bot to your guild](https://discord.com/api/oauth2/authorize?client_id=730123292173664316&permissions=8&scope=bot)")
      page3.setTimestamp()
      
    const page4 = new discord.MessageEmbed()
      page4.setColor("#EDC201")
      page4.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
      page4.setTitle("Help List v3.5.2")
      page4.setDescription("React with the emoji's, under this help page for shows the list of commands!\nMy prefix in this server is: `"+ prefixes[message.guild.id].prefixes +"`!")
      page4.addField("Economy Commands", ""+ prefixes[message.guild.id].prefixes +"balance : `Shows your money balance!`")
      page4.setFooter("Chels-bot")
      page4.addField("Other Links", "- [Support Server](https://discord.gg/DR22mhF)\n- [Invite Chels-bot to your guild](https://discord.com/api/oauth2/authorize?client_id=730123292173664316&permissions=8&scope=bot)")
      page4.setTimestamp()

     try {
  const help = new discord.MessageEmbed()
    help.setColor("#EDC201")
    help.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    help.setTitle("Help List v3.5.2")
    help.setDescription("React with the emoji's, under this help page for shows the list of commands!\nMy prefix in this server is: `"+ prefixes[message.guild.id].prefixes +"`!")
    help.addField("Categories", "Moderation(🔨)\nInformation(📋)\nFun(🏓)\nEconomy(💰)")
    help.addField("Other Links", "- [Support Server](https://discord.gg/DR22mhF)\n- [Invite Chels-bot to your guild](https://discord.com/api/oauth2/authorize?client_id=730123292173664316&permissions=8&scope=bot)")
    help.setFooter("Chels-bot")
    help.setTimestamp()
    
var helpMessage = await message.channel.send(help)
     helpMessage.react("🔨");
     helpMessage.react("📋");
     helpMessage.react("🏓");
     helpMessage.react("💰");
     setTimeout(() => {
       helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
     }, 150000);

    } catch (error) {
        console.error(error);
      }
      
  const filter = (reaction, user) => user.id !== message.client.user.id;
  const collector = helpMessage.createReactionCollector(filter, { time: 150000 });

collector.on('collect', (reaction, reactionCollector) => {

      switch (reaction.emoji.name) {
        case "🔨":
          helpMessage.edit(page1)
          helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
          helpMessage.react("🔙")
          helpMessage.react("⛔")
          setTimeout(() => {
       helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
     }, 150000);
          break;
          
        case "📋":
          helpMessage.edit(page2)
          helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
          helpMessage.react("🔙")
          helpMessage.react("⛔")
          setTimeout(() => {
       helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
     }, 150000);
          break;

        case "🏓":
          helpMessage.edit(page3)
          helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
          helpMessage.react("🔙")
          helpMessage.react("⛔")
          setTimeout(() => {
       helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
     }, 150000);
          break;
          
    case "💰":
      helpMessage.edit(page4)
      helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
      helpMessage.react("🔙")
      helpMessage.react("⛔")
      setTimeout(() => {
       helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
     }, 150000);
      break;
          
    case "🔙":
      const backhelp = new discord.MessageEmbed()
      backhelp.setColor("#EDC201")
      backhelp.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
      backhelp.setTitle("Help List v3.5.2")
      backhelp.setDescription("React with the emoji's, under this help page for shows the list of commands!\nMy prefix in this server is: `"+ prefixes[message.guild.id].prefixes +"`!")
      backhelp.addField("Categories", "Moderation(🔨)\nInformation(📋)\nFun(🏓)\nEconomy(💰)")
      backhelp.addField("Other Links", "- [Support Server](https://discord.gg/DR22mhF)\n- [Invite Chels-bot to your guild](https://discord.com/api/oauth2/authorize?client_id=730123292173664316&permissions=8&scope=bot)")
      backhelp.setFooter("Chels-bot")
      backhelp.setTimestamp()
      helpMessage.edit(backhelp)
      helpMessage.reactions.removeAll().catch(error => console.log('Failed to clear reactions:', error))
          .then(() => {
     helpMessage.react("🔨");
     helpMessage.react("📋");
     helpMessage.react("🏓");
     helpMessage.react("💰");
     setTimeout(() => {
       helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
     }, 150000);
   })
     break;
     
    case "⛔":
      helpMessage.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
      break;
          
        default:
          break;
      }
    });
  }
}