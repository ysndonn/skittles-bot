module.exports = {
    name: 'role',
    description: "Adds a Role To A Member!",
    async execute(message, args) {
        //!role @member @role
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission to use this comman.');
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I require \`MANAGE_ROLES\`permission to change users roles.`)')

        const mentionMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

        if (!args[0]) return message.channel.send('You must mention a member to give a role to aswell as the role to be given.')
        if (!mentionMember) return message.channel.send('The member you mentioned in not in this server');
        if (mentionMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('You cannot add roles to this user as their role is the same or higher then yours.')
        if (!args[1]) return message.channel.send('You must state a role to give the mentioned member');
        if (!role) return message.channel.send('The role stated does not exist');
        if (message.members.roles.highest.position <= role.position) return message.channel.send('You cannot give this role as it is the same or above the current highest role');

        await mentionMember.roles.add(role.id).catch(err => console.log(err));

    }
}