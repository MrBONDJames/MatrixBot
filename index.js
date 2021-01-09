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
const axios = require('axios');
const Gamedig = require('gamedig');

// SMALL CONFIG FOR 1 SERVER
var discord_bot_token = "";

var FiveM_Server = [{
	'ip': '161.97.79.53',
	'port': '32120',
	'rcon': null,
	'channel_id': '797434737861853194',
	'name': 'Sandbox',
	'game': 'fivem',
	"slots_max": "128"
}]

var channel_id = 0; // Right-Click with dev mod on channel to get Identifier
var maintenance_msg = "MAINTENANT EN COURS"; // The Maintenance message 

var servers_intervals = [];

async function setServers(){

}

client.on('ready', async () => {
	console.log('Bot listening on discord')

		
	FiveM_Server.forEach(async (server) => {

		if (server.game == "fivem") {
			console.log(server)
			axios.get('http://' + server.ip + ':' + server.port + '/players.json').then(informations =>{
				var information_data = informations.data;
				var players = (Object.keys(information_data).length)
	
				setInterval(() => {
					server_channel = client.channels.cache.get(server.channel_id);
					server_channel.setName('[' + server.name + '] ' + players + "/" + server.slots_max)
					console.log('changed name')
				}, 60000 * 5)
			}).catch((err)=>{
				console.log(err)
				staff_logs = client.channels.cache.get('794682317418921994');
				staff_logs.send('Current ' + server.game + ' ' +  server.name + ' is offline')
			})
			
		}


	});



	



});

client.login(discord_bot_token);