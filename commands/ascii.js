const discord = require('discord.js');
const figlet = require('figlet');

module.exports = {
  name: "ascii",
  description: "Ascii command",
  
  async run(client, message, args, prefixes){
    
    const error1 = new discord.MessageEmbed()
    error1.setColor("#ff5e5e")
    error1.setTitle("<:cancel:717095505930223667> Please provide a text!")
    error1.addField("Wrong Usage", "- "+ prefixes[message.guild.id].prefixes +"ascii <text>\ne.g: "+ prefixes[message.guild.id].prefixes +"ascii Hi I'm Chels-bot!")
    
    const error2 = new discord.MessageEmbed()
    error2.setColor("#ff5e5e")
    error2.setTitle("<:cancel:717095505930223667> Please make shure, you have provide a text smaller than 2000 characters!")
    error2.addField("Wrong Usage", "- "+ prefixes[message.guild.id].prefixes +"ascii <text>\ne.g: "+ prefixes[message.guild.id].prefixes +"ascii Hi I'am Chels-bot!")
    
    if(!args[0]) return message.channel.send(error1);

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
    if(data.length > 2000) return message.channel.send(error2)

    message.channel.send('```' + data + '```')
    })
  }
}