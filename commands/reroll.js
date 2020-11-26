
const ms = require('ms');

module.exports = {
    name: "reroll",
    description: "ReRoll command",

    async run(client, message, args){

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<:error:730878049347698698> You need `ADMINISTRATOR`, for use this command!');

        if(!args[0]) return message.channel.send('<:error:730878049347698698> No giveaway ID provided');

        let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway) return message.channel.send('<:error:730878049347698698> Couldn\'t find a giveaway with that ID/name');

        client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('<:success:730878072458444922> Giveaway rerolled')
        })
        .catch((e) => {
            if(e.startsWith(`<:error:730878049347698698> Giveaway with ID ${giveaway.messageID} is not ended`)){
                message.channel.send('<:error:730878049347698698> This giveaway hasn\'t ended yet')
            } else {
                console.error(e);
                message.channel.send('<:error:730878049347698698> An error occured')
            }
        })
    }
}