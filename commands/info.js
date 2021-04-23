module.exports = {
    name: 'info',
    description: "Server Info!",
    execute(message, args, Discord){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('hood rats')
        .setURL('https://discord.gg/KZWrBj5dgM')
        .setAuthor('Batz', 'https://cdn.discordapp.com/attachments/750506334432133213/806227635494584361/BATZ_1_small.png', 'https://discord.gg/KZWrBj5dgM')
        .setDescription('Skittles Selling Server')
        .setThumbnail('https://cdn.discordapp.com/attachments/750506334432133213/806228314753597450/original_1.jpg')
        .addFields(
            { name: 'Information', value: 'Make sure to read rules to avoid ban!' },
        )
        .setImage('https://cdn.discordapp.com/attachments/750506334432133213/806228314753597450/original_1.jpg')
	.setTimestamp(2/2/2021)
	.setFooter('Made By Batz#5201', 'https://cdn.discordapp.com/attachments/750506334432133213/806228423927791636/PertinentPerfectGalapagosdove-max-1mb.gif');
   
    message.channel.send(exampleEmbed);

    }
}