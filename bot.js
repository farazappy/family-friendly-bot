var Discord = require ('discord.io');
//var logger= require('winston');
var auth = require('./auth.json');
var googleTTS = require('google-tts-api');

var fs = require('fs');
var https = require('https');
var request = require('request');

var alreadyDone = false;
var alreadyDoneGagan = false;
var alreadyDoneRaj = false;

// logger.remove(logger.transports.Console);
// logger.add(new logger.transports.Console, {
// 	colorize: true
// });

// logger.level = 'debug';

var bot = new Discord.Client({
	token: auth.token,
	autorun: true
});

bot.on('ready', function (event) {
	console.log('Connected');
	console.log('Logged in as: ');
	console.log(bot.username + ' - (' + bot.id + ')');
});
 
bot.on('message', function(user, userId, channelId, message, event) {

	var serverId = bot.channels[channelId].guild_id;

	if(message.substring(0,1) == '!') {
		var args = message.substring(1).split(' ');
		var cmd = args[0];

		args = args.splice(1);

		var voiceChannelId = bot.servers[serverId].members[userId].voice_channel_id;

		if(userId == '283941878334750721') {
			bot.sendMessage({
				to: channelId,
				message: user + ' sorry I don\'t serve Christians'
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
										});
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
	} else if(message.substring(0,1) == '_') {

		var voiceChannelId = bot.servers[serverId].members[userId].voice_channel_id;

		if(!voiceChannelId)
			bot.sendMessage({
				to: channelId,
				message: user + ' behenchod pehle voice channel join kar!'
			});
		else {

			var args = message.substring(1).split(' ');
			var cmd = args[0];
			var tts = "";

			args.forEach(function(ele) {
				if(ele==cmd)
					return;
				tts += ele+' ';
			});

			googleTTS(tts, 'ja-JP', 1)   // speed normal = 1 (default), slow = 0.24
			.then(function (url) {
				bot.joinVoiceChannel(voiceChannelId, function(error, event) {
					if(error){
						console.log(error);
						bot.sendMessage({
							to: channelId,
							message: "Something went wrong!"
						});
					}
					else {
						bot.getAudioContext(voiceChannelId, function(error, stream) {
							if(error) {
								console.log(error);
								bot.sendMessage({
									to: channelId,
									message: "Something went wrong! | " + error
								});
							}
							else {
								console.log(url);
								//fs.createReadStream('big_thank.wma').pipe(stream, {end: false});
								request.get(""+url+"")
									.on('error', function(err) {
										console.log(err);
										bot.leaveVoiceChannel(voiceChannelId, function() {
											bot.sendMessage({
												to: channelId,
												message: "Something went wrong!"
											});
										});
									})
									.pipe(stream, {end: false});

								stream.on('done', function() {
									bot.leaveVoiceChannel(voiceChannelId, function(){
										console.log('Done!');
									});
								});
							}
						});
					}
				});
			})
			.catch(function (err) {
				console.log(err);
				bot.leaveVoiceChannel(voiceChannelId, function(){
					console.log('Done!');
					bot.sendMessage({
						to: channelId,
						message: "Something went wrong!"
					});
				});
				bot.sendMessage({
					to: channelId,
					message: "Something went wrong!"
				});
			});

		}
	}
});

bot.on('voiceStateUpdate', function() {
	console.log('voiceStateUpdated Bitch!!');

	var serverId = bot.channels['397071521857929216'].guild_id;
	var appyId = '240542597540610048';
	var appy = bot.servers[serverId].members[appyId];

	if(appy.voice_channel_id != null && alreadyDone != true) {
		var voiceChannelId = appy.voice_channel_id;
			googleTTS("appy aagaya bhosdiwalo, salaam karo", 'hi-IN', 1)   // speed normal = 1 (default), slow = 0.24
			.then(function (url) {
				bot.joinVoiceChannel(voiceChannelId, function(error, event) {
					if(error){
						console.log(error);
					}
					else {
						bot.getAudioContext(voiceChannelId, function(error, stream) {
							if(error) {
								console.log(error);
							}
							else {
								console.log(url);
								//fs.createReadStream('big_thank.wma').pipe(stream, {end: false});
								request.get(""+url+"")
									.on('error', function(err) {
										console.log(err);
										bot.leaveVoiceChannel(voiceChannelId, function() {
										});
									})
									.pipe(stream, {end: false});

								stream.on('done', function() {
									alreadyDone = true;
									bot.leaveVoiceChannel(voiceChannelId, function(){
										console.log('Done!');
									});
								});
							}
						});
					}
				});
			})
			.catch(function (err) {
				console.log(err);
				bot.leaveVoiceChannel(voiceChannelId, function(){
					console.log('Done!');
				});
			});
	} else if(appy.voice_channel_id == null) {
		alreadyDone = false;
	}
});

bot.on('voiceStateUpdate', function() {
	console.log('voiceStateUpdated Bitch!!');

	var serverId = bot.channels['397071521857929216'].guild_id;
	var appyId = '327365815785619457';
	var appy = bot.servers[serverId].members[appyId];

	if(appy.voice_channel_id != null && alreadyDoneGagan != true) {
		var voiceChannelId = appy.voice_channel_id;
			googleTTS("randi aagaya ab game throw hoga", 'hi-IN', 1)   // speed normal = 1 (default), slow = 0.24
			.then(function (url) {
				bot.joinVoiceChannel(voiceChannelId, function(error, event) {
					if(error){
						console.log(error);
					}
					else {
						bot.getAudioContext(voiceChannelId, function(error, stream) {
							if(error) {
								console.log(error);
							}
							else {
								console.log(url);
								//fs.createReadStream('big_thank.wma').pipe(stream, {end: false});
								request.get(""+url+"")
									.on('error', function(err) {
										console.log(err);
										bot.leaveVoiceChannel(voiceChannelId, function() {
										});
									})
									.pipe(stream, {end: false});

								stream.on('done', function() {
									alreadyDoneGagan = true;
									bot.leaveVoiceChannel(voiceChannelId, function(){
										console.log('Done!');
									});
								});
							}
						});
					}
				});
			})
			.catch(function (err) {
				console.log(err);
				bot.leaveVoiceChannel(voiceChannelId, function(){
					console.log('Done!');
				});
			});
	} else if(appy.voice_channel_id == null) {
		alreadyDoneGagan = false;
	}
});

// bot.on('voiceStateUpdate', function() {
// 	console.log('voiceStateUpdated Bitch!!');

// 	var serverId = bot.channels['397071521857929216'].guild_id;
// 	var appyId = '202035944260370441';
// 	var appy = bot.servers[serverId].members[appyId];

// 	if(appy.voice_channel_id != null && alreadyDoneRaj != true) {
// 		var voiceChannelId = appy.voice_channel_id;
// 			googleTTS("Hello guys, My name is Raj Roongta, me sabki gaand soongta", 'hi-IN', 1)   // speed normal = 1 (default), slow = 0.24
// 			.then(function (url) {
// 				bot.joinVoiceChannel(voiceChannelId, function(error, event) {
// 					if(error){
// 						console.log(error);
// 					}
// 					else {
// 						bot.getAudioContext(voiceChannelId, function(error, stream) {
// 							if(error) {
// 								console.log(error);
// 							}
// 							else {
// 								console.log(url);
// 								//fs.createReadStream('big_thank.wma').pipe(stream, {end: false});
// 								request.get(""+url+"")
// 									.on('error', function(err) {
// 										console.log(err);
// 										bot.leaveVoiceChannel(voiceChannelId, function() {
// 										});
// 									})
// 									.pipe(stream, {end: false});

// 								stream.on('done', function() {
// 									alreadyDoneRaj = true;
// 									bot.leaveVoiceChannel(voiceChannelId, function(){
// 										console.log('Done!');
// 									});
// 								});
// 							}
// 						});
// 					}
// 				});
// 			})
// 			.catch(function (err) {
// 				console.log(err);
// 				bot.leaveVoiceChannel(voiceChannelId, function(){
// 					console.log('Done!');
// 				});
// 			});
// 	} else if(appy.voice_channel_id == null) {
// 		alreadyDoneRaj = false;
// 	}
// });