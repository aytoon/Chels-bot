const discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "Ban command",

    async run(client, message, args, prefixes){
      
      // Error Messages
      
    const error1 = new discord.MessageEmbed()
    error1.setColor("#")
    error1.setTitle("<:cancel:717095505930223667> ")
    error1.addField("Wrong Usage", "")
    
    // hier
    
    const error2 = new discord.MessageEmbed()
    error2.setColor("#e03442")
    error2.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error2.setTitle("<:error:730878049347698698> Error Code: 4")
    error2.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error2.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"ban`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `I need 'BAN_MEMBERS' permission, for ban members on this guild!`")
    error2.setFooter('Chels-bot')
    error2.setTimestamp()
    
    const error3 = new discord.MessageEmbed()
    error3.setColor("#e03442")
    error3.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error3.setTitle("<:error:730878049347698698> Error Code: 5")
    error3.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error3.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"ban`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `Please mention an user, for ban out of this guild!`")
    error3.setFooter('Chels-bot')
    error3.setTimestamp()
    
    const error4 = new discord.MessageEmbed()
    error4.setColor("#e03442")
    error4.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error4.setTitle("<:error:730878049347698698> Error Code: 6")
    error4.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error4.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"ban`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `I can't seen this mentioned user!`")
    error4.setFooter('Chels-bot')
    error4.setTimestamp()
    
    const error5 = new discord.MessageEmbed()
    error5.setColor("#e03442")
    error5.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error5.setTitle("<:error:730878049347698698> Error Code: 7")
    error5.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error5.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"ban`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `I can't ban this mentioned user, because that user's role is either then mine!`")
    error5.setFooter('Chels-bot')
    error5.setTimestamp()
    
    const error6 = new discord.MessageEmbed()
    error6.setColor("#e03442")
    error6.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error6.setTitle("<:error:730878049347698698> Error Code: 8")
    error6.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error6.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"ban`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `You can't ban your self!`")
    error6.setFooter('Chels-bot')
    error6.setTimestamp()
    
    const error7 = new discord.MessageEmbed()
    error7.setColor("#e03442")
    error7.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error7.setTitle("<:error:730878049347698698> Error Code: 9")
    error7.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error7.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"ban`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `I have seen an system error, please try that command again!`")
    error7.setFooter('Chels-bot')
    error7.setTimestamp()
      
      // Error Messages Ends

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(error1)
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(error2)

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send(error3);

        if(!member) return message.channel.send(error4);
        if(!member.bannable) return message.channel.send(error5);

        if(member.id === message.author.id) return message.channel.send(error6);

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.ban(`${reason}`)
        .catch(err => {
            if(err) return message.channel.send(error7)
        })

        const banembed = new discord.MessageEmbed()
        .setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
        .setColor("#EDC201")
        .setTitle('Member Banned')
        .setDescription(`I have banned ${member}#${message.author.discriminator}, for the reason: **${reason}**.\n**Moderator:** ${message.author}.`)
        .setFooter("Chels-bot")
        .setTimestamp()

        message.channel.send(banembed);


    }
}