/*
 *   Copyright (c) 2020 AmnesiaRP, 
 * 		Created by AzginFR/DoctorWhoFR  
 *	This is a program without any documentation or any information
 * Also there is no Managers or functions this is just full brutal program for displaying FiveM server count on discord channel.
 * I'm not going to provide any support, or maybe for people who find my herself my discord (and for french people).
 
 
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.

 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.

 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const Discord = require('discord.js');
const client = new Discord.Client();
const get = require('simple-get')
var figlet = require('figlet');
var fivem_offline = false

const Gamedig = require('gamedig');
var query = require('game-server-query');

// SMALL CONFIG FOR 1 SERVER
var discord_bot_token = "NzA5MTA2MTgxOTU1NjQ5NjI1.XtlKUg.ySodYb952Sk6vqYoqveF_kYxBXg";

var FiveM_ServerAdress = "88.99.190.90"; // your fivme server adress
var Port = "30120" 

var channel_id = 0; // Right-Click with dev mod on channel to get Identifier
var maintenance_msg = "MAINTENANT EN COURS"; // The Maintenance message 

client.on('ready', () => {
	setInterval(function() {
		
		// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
		// COPY THIS CODE FOR EVERY SERVER YOU HAVE
	
		get.concat('http://' + FiveM_ServerAdress + ':' + Port + '/players.json', function (err, res, data) {
		  if (err) {

				serverDowns();
		
		  } else {
					  var content = data.toString()
					  content = JSON.parse(content)
					  
					  if(content[0] != null){
						prodSetMembers(content.length)
					  } else {
						prodSetMembers(0)
					  }
		  }
		
		})
		
		// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
	})

	
});

client.login(discord_bot_token);

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// COPY THIS CODE FOR EVERY SERVER YOU HAVE
 
function serverDowns(){
	if(fivem_offline === false)
	{
		setOffline();
	}
}

function setOffline()
{
	channel = client.channels.get(channel_id); // channel id to display
    channel.setName('FIVEM #1 --- ' + maintenance_msg);

	console.log('\x1b[32m%s\x1b\x1b[31m%s\x1b[0m', 'Serveur FIVEM1:' , '[OFFLINE]');
}

function prodSetMembers(players)
{
    channel = client.channels.get(channel_id); // channel id to display
    channel.setName('FIVEM #1 ---' + players + "/32");
	console.log('\x1b[32m%s\x1b\x1b[31m%s\x1b[0m', 'Serveur FIVEM1:' , players+'/32');
}
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
