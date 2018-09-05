var Discord = require ('discord.io');
var logger= require('winston');
var auth = require('./auth.json');

var fs = require('fs');

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
	colorize: true
});

logger.level = 'debug';

var bot = new Discord.Client({
	token: auth.token,
	autorun: true
});

bot.on('ready', function (event) {
	logger.info('Connected');
	logger.info('Logged in as: ');
	logger.info(bot.username + ' - (' + bot.id + ')');
});
 
bot.on('message', function(user, userId, channelId, message, event) {

	var serverId = bot.channels[channelId].guild_id;

	if(message.substring(0,1) == '!') {
		var args = message.substring(1).split(' ');
		var cmd = args[0];

		args = args.splice(1);

		var voiceChannelId = bot.servers[serverId].members[userId].voice_channel_id;

		if(userId == '202744505114296331') {
			bot.sendMessage({
				to: channelId,
				message: 'Sorry ' + user + ', I won\'t serve you!'
			});
		} else {

			switch(cmd) {
				case 'ping':
					bot.sendMessage({
						to: channelId,
						message: 'Pong!'
					});
					break;
				case 'hi':
					bot.sendMessage({
						to: channelId,
						message: 'Konichiwa ' + user + '! Uwu~~~'
					});
					break;
				case 'meepo':

					if(!voiceChannelId)
						bot.sendMessage({
							to: channelId,
							message: user + ' behenchod pehle voice channel join kar!'
						});
					else {
						bot.joinVoiceChannel(voiceChannelId, function(error, event) {
							if(error)
								console.log(error);
							else {
								bot.getAudioContext(voiceChannelId, function(error, stream) {
									if(error)
										console.log(error);
									else {
										fs.createReadStream('meepo_laugh.mp3').pipe(stream, {end: false});

										stream.on('done', function() {
											bot.leaveVoiceChannel(voiceChannelId, function(){
												console.log('Done!');
											});
										})
									}
								});
							}
						});
					}
					break;
				case 'jhola':
					if(!voiceChannelId)
						bot.sendMessage({
							to: channelId,
							message: user + ' behenchod pehle voice channel join kar!'
						});
					else {
						bot.joinVoiceChannel(voiceChannelId, function(error, event) {
							if(error)
								console.log(error);
							else {
								bot.getAudioContext(voiceChannelId, function(error, stream) {
									if(error)
										console.log(error);
									else {
										fs.createReadStream('jhola.wma').pipe(stream, {end: false});

										stream.on('done', function() {
											bot.leaveVoiceChannel(voiceChannelId, function(){
												console.log('Done!');
											});
										})
									}
								});
							}
						});
					}
					break;
				case 'pmgm':
					if(!voiceChannelId)
						bot.sendMessage({
							to: channelId,
							message: user + ' behenchod pehle voice channel join kar!'
						});
					else {
						bot.joinVoiceChannel(voiceChannelId, function(error, event) {
							if(error)
								console.log(error);
							else {
								bot.getAudioContext(voiceChannelId, function(error, stream) {
									if(error)
										console.log(error);
									else {
										fs.createReadStream('Modi_GM.mp3').pipe(stream, {end: false});

										stream.on('done', function() {
											bot.leaveVoiceChannel(voiceChannelId, function(){
												console.log('Done!');
											});
										})
									}
								});
							}
						});
					}
					break;
				case 'achha':
					if(!voiceChannelId)
						bot.sendMessage({
							to: channelId,
							message: user + ' behenchod pehle voice channel join kar!'
						});
					else {
						bot.joinVoiceChannel(voiceChannelId, function(error, event) {
							if(error)
								console.log(error);
							else {
								bot.getAudioContext(voiceChannelId, function(error, stream) {
									if(error)
										console.log(error);
									else {
										fs.createReadStream('achha_kiya.wma').pipe(stream, {end: false});

										stream.on('done', function() {
											bot.leaveVoiceChannel(voiceChannelId, function(){
												console.log('Done!');
											});
										})
									}
								});
							}
						});
					}
					break;
				case 'waah':
					if(!voiceChannelId)
						bot.sendMessage({
							to: channelId,
							message: user + ' behenchod pehle voice channel join kar!'
						});
					else {
						bot.joinVoiceChannel(voiceChannelId, function(error, event) {
							if(error)
								console.log(error);
							else {
								bot.getAudioContext(voiceChannelId, function(error, stream) {
									if(error)
										console.log(error);
									else {
										fs.createReadStream('waah_modi.wma').pipe(stream, {end: false});

										stream.on('done', function() {
											bot.leaveVoiceChannel(voiceChannelId, function(){
												console.log('Done!');
											});
										})
									}
								});
							}
						});
					}
					break;
				case 'aslimeme':
					if(!voiceChannelId)
						bot.sendMessage({
							to: channelId,
							message: user + ' behenchod pehle voice channel join kar!'
						});
					else {
						bot.joinVoiceChannel(voiceChannelId, function(error, event) {
							if(error)
								console.log(error);
							else {
								bot.getAudioContext(voiceChannelId, function(error, stream) {
									if(error)
										console.log(error);
									else {
										fs.createReadStream('lul_audio.mp3').pipe(stream, {end: false});

										stream.on('done', function() {
											bot.leaveVoiceChannel(voiceChannelId, function(){
												console.log('Done!');
											});
										})
									}
								});
							}
						});
					}
					break;
				case 'hypocrisy':
					if(!voiceChannelId)
						bot.sendMessage({
							to: channelId,
							message: user + ' behenchod pehle voice channel join kar!'
						});
					else {
						bot.joinVoiceChannel(voiceChannelId, function(error, event) {
							if(error)
								console.log(error);
							else {
								bot.getAudioContext(voiceChannelId, function(error, stream) {
									if(error)
										console.log(error);
									else {
										fs.createReadStream('hipocrisy.wma').pipe(stream, {end: false});

										stream.on('done', function() {
											bot.leaveVoiceChannel(voiceChannelId, function(){
												console.log('Done!');
											});
										})
									}
								});
							}
						});
					}
					break;
				case 'gunehgaar':
					if(!voiceChannelId)
						bot.sendMessage({
							to: channelId,
							message: user + ' behenchod pehle voice channel join kar!'
						});
					else {
						bot.joinVoiceChannel(voiceChannelId, function(error, event) {
							if(error)
								console.log(error);
							else {
								bot.getAudioContext(voiceChannelId, function(error, stream) {
									if(error)
										console.log(error);
									else {
										fs.createReadStream('gunehgaar.wma').pipe(stream, {end: false});

										stream.on('done', function() {
											bot.leaveVoiceChannel(voiceChannelId, function(){
												console.log('Done!');
											});
										})
									}
								});
							}
						});
					}
					break;
				case 'thankyou':
					if(!voiceChannelId)
						bot.sendMessage({
							to: channelId,
							message: user + ' behenchod pehle voice channel join kar!'
						});
					else {
						bot.joinVoiceChannel(voiceChannelId, function(error, event) {
							if(error)
								console.log(error);
							else {
								bot.getAudioContext(voiceChannelId, function(error, stream) {
									if(error)
										console.log(error);
									else {
										fs.createReadStream('big_thank.wma').pipe(stream, {end: false});

										stream.on('done', function() {
											bot.leaveVoiceChannel(voiceChannelId, function(){
												console.log('Done!');
											});
										})
									}
								});
							}
						});
					}
					break;
				case 'help':
					bot.sendMessage({
						to: channelId,
						message: 'pehle aadhar link karo fir use karo !hi !jhola !pmgm !achha !waah !aslimeme !hypocrisy !gunehgaar !thankyou'
					});
					break;
				default:
					bot.sendMessage({
						to: channelId,
						message: 'nai, pehle aadhar link karo'
					});
					break;
			}
		}
	}
});