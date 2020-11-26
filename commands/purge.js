const discord = require('discord.js');

module.exports = {
    name: "purge",
    description: "Purge command",

    async run(client, message, args){

        const amount = args.join(" ");
        
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<:error:730878049347698698> You need `MANAGE_MESSAGES`, for use this command!");

        if(!amount) return message.channel.send('<:error:730878049347698698> Please provide an amount of messages for me to delete!')

        if(amount > 100) return message.channel.send('<:error:730878049347698698> You cannot purge more than `100` messages at once!')

        if(amount < 2) return message.channel.send('<:error:730878049347698698> You need to delete at least `2` messages!')

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send(`<:success:730878072458444922> I have purge \`${amount}\` messages!`);

    }
}