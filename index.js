const Discord = require ('discord.js');
const client = new Discord.Client();
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
	else if(message.content === `${prefix}help`) {
		message.channel.send('**Commands:**\n```"!help"        Zeige alle Commands\n"!invite"      Lade andere User ein\n"!avatar"      Rufe dein Profilbild ab\n"!id"          Rufe deine Discord-ID ab```');
	}
	else if(message.content === `${prefix}avatar`) {
		message.channel.send(message.author.displayAvatarURL());
	}
	else if(message.content === `${prefix}id`) {
		message.channel.send(`Benutzername: ${message.author.username}`);
		message.channel.send(`Discord-ID: ${message.author.id}`);
	}
});
