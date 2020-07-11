const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const {
	prefix,
	bot_info,
} = require('./config.json');
client.once('ready', () => {

	console.log('Prefix:');
	console.log(prefix);
	console.log(bot_info);
	console.log('Online!');
	console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
	client.user.setActivity('!help !invite', {
		type: 'STREAMING',
		url: 'https://www.twitch.tv/trymacs',
	});
});
client.on('ready', () => {
	// eslint-disable-next-line quotes
	const channel = client.channels.cache.get("705484345040961618");
	if (!channel) return console.error('Could not establish voice connection');
	// eslint-disable-next-line no-unused-vars
	channel.join().then(connection => {
		console.log('Successfully connected to voice channel');
	}).catch(e => {

		console.error(e);
	});
});
client.login(process.env.TOKEN);

client.on('message', message => {
	if (message.content === `${prefix}invite`) {
		message.channel.send('https://discord.gg/EHTy2vc');
	}
	else if(message.content === 'Moin') {
		message.channel.send('Meister');
	}
	else if(message.content === 'moin') {
		message.channel.send('Meister');
	}
	else if(message.content === `${prefix}help`) {
		const helpmenu = new MessageEmbed()
			.setColor('#f36618')
			.setTitle('Lachsbot')
			.setURL('https://discord.gg/EHTy2vc')
			.setDescription('Hier eine Liste aller Commands:')
			.setThumbnail('https://i.imgur.com/iaIWEpJ.jpg')
			.addFields(
				{ name: '!help', value: 'Hilfemenü' },
				{ name: '!invite', value: 'Lade andere User ein' },
				{ name: '!avatar', value: 'Rufe dein PB ab' },
				{ name: '!me', value: 'Zeige dein Profil an' },
				{ name: '\u200b', value: '\u200b' },
			)
			.setTimestamp()
			.setFooter(`Lachsbot by Boschman21 | Ben \nAufgerufen von ${message.author.username} `);

		message.channel.send(helpmenu);
	}
	else if(message.content === `${prefix}avatar`) {
		const avatar = new MessageEmbed()
			.setTitle(`Profilbild von ${message.author.username}`)
			.setImage('https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.png ')
			.setTimestamp()
			.setFooter(`Aufgerufen von ${message.author.username}`);
		message.channel.send(avatar);
	}
	else if(message.content === `${prefix}me`) {
		const id = new MessageEmbed()
			.setTitle('Profil')
			.setThumbnail('https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.png ')
			.setColor('#f36618')
			.addField('\u200b', '\u200b')
			.setDescription(`Benutzername: **${message.author.username}**\nDiscord-ID: **${message.author.id}**\n\u200b\nMitglied seit ${message.member.joinedAt}`)
			.setTimestamp()
			.setFooter(`Aufgerufen von ${message.author.username}`);
		message.channel.send(id);
	}
});