const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
    
}

client.once('ready', () =>{
    console.log('Homie Has Entered The Party!');
    client.user.setActivity("Over SKittles Kingdom",{type: 'WATCHING'}).catch(console.error);
    client.user.setStatus('dnd');
})

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Prodigy');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('831999890976407652').send(`Hey <@${guildMember.user.id}>, welcome to skittle server!`)
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();

    console.log(command);

    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
    } else if (command == 'creator'){
        client.commands.get('creator').execute(message, args);
    } else if (command == 'insta'){
        client.commands.get('insta').execute(message, args);
    } else if (command == 'info'){
        client.commands.get('info').execute(message, args, Discord);
    } else if (command === 'purge'){
       client.commands.get('purge').execute(message, args);
    } else if (command === 'terry'){
        client.commands.get('terry').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'middleman'){
        client.commands.get('middleman').execute(message, args);
    } else if (command == 'scammer'){
        client.commands.get('scammer').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message,args);
    }
    });


client.login('ODMzMTMzMjUxNTk3NDM0ODgx.YHt5zg.dIm1mC1HI6vW16BHWnJ0z5UdcjE');
