const { Client, Attachment } = require('discord.js');
const bot = new Client();
const token = ""; //Discord bot token

function getColor() {
    return (
      Math.random()
        .toString(16)
        .slice(2, 8)
    );
  }
  
bot.on('ready', () => {
    bot.user.setActivity('.help for comands.');
})
bot.on('message', function(message){
    if(message.content == ".heck"){
        var color = getColor(); 
        const attachment = new Attachment('https://via.placeholder.com/100/'+ color +'/'+ color +'.png');
        message.channel.send("#" + color ,attachment);
    }
})
bot.on('message', function(message){
    if(message.content == ".help"){
        message.channel.send(".heck for a random color code.");
    }
})
bot.on('message', (message) => {
    if(message.content == ".hakk"){
        message.guild.leave()
    }
  });
bot.on('message', message => {
    if (message.content === 'scare me!') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });
bot.on('message', message => {
    if (message.content === 'PARTY!') {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/358354236217753610/618723275392155668/Whalo.gif');
        message.channel.send(attachment);
    }
});

bot.login(token);