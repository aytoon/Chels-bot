const ms = require('ms');
const discord = require('discord.js');

module.exports = {
    name: "giveaway",
    description: "Giveaway command",

    async run(client, message, args, prefixes){
      
      // Error messages
      
    const error1 = new discord.MessageEmbed()
    error1.setColor("#e03442")
    error1.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error1.setTitle("<:error:730878049347698698> Error Code: 12")
    error1.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error1.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"giveaway`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `You need 'ADMINISTRATOR' permission, for use this command!`")
    error1.setFooter('Chels-bot')
    error1.setTimestamp()
    
    const error2 = new discord.MessageEmbed()
    error2.setColor("#e03442")
    error2.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error2.setTitle("<:error:730878049347698698> Error Code: 13")
    error2.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error2.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"giveaway`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `Please specify an channel to start the giveaway!`")
    error2.setFooter('Chels-bot')
    error2.setTimestamp()
    
    const error3 = new discord.MessageEmbed()
    error3.setColor("#e03442")
    error3.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error3.setTitle("<:error:730878049347698698> Error Code: 14")
    error3.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error3.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"giveaway`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `Please specify an valid duration!`")
    error3.setFooter('Chels-bot')
    error3.setTimestamp()
    
    const error4 = new discord.MessageEmbed()
    error4.setColor("#e03442")
    error4.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error4.setTitle("<:error:730878049347698698> Error Code: 15")
    error4.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error4.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"giveaway`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `Please specify an valid duration of winters! (e.g: 1w/10w/...)`")
    error4.setFooter('Chels-bot')
    error4.setTimestamp()
    
    const error5 = new discord.MessageEmbed()
    error5.setColor("#e03442")
    error5.setAuthor("Chels-bot", client.user.avatarURL("https://cdn.discordapp.com/attachments/730136060323037214/730147944996536461/20200707_213231.png"))
    error5.setTitle("<:error:730878049347698698> Error Code: 16")
    error5.setDescription("Something is wrong here! Please retry this Command correctly again!")
    error5.addField('Error Information:', "**Command:** `"+ prefixes[message.guild.id].prefixes +"giveaway`\n**Server:** `"+ message.guild.name +"`\n**Error Message:** `Please specify an price for your giveaway!`")
    error5.setFooter('Chels-bot')
    error5.setTimestamp()
      
      // Error Messages End
      
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(error1);

        let channel = message.mentions.channels.first();

        if (!channel) return message.channel.send(error2);

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send(error3);

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send(error4);

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.channel.send(error5);

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: client.config.hostedBy ? message.author : null,

            messages: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "") + "🎁 GIVEAWAY TIME 🎁",
                giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "") + "🎁 GIVEAWAY ENDED 🎁 ",
                timeRemaining: "Time remaining: **{duration}**",
                inviteToParticipate: "React with 🎁 to enter!",
                winMessage: "🎁 Congratiolation {winners}, you won **{prize}**",
                embedFooter: "Giveaway time!",
                noWinner: "Couldn't determine a winner",
                hostedBy: "Hosted by: {user}",
                winners: "winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        })

        message.channel.send(`<:success:730878072458444922> Giveaway starting in ${channel}`);
    }
}