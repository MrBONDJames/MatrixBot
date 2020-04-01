# MatrixBot

MatrixBot est un simple bot qui affiche le nombre de joueurs connectés sur un serveur FiveM.
(Upload pour augmenter mon dossier pour parcours^^)

---
## Requirements

For development, you will only need Node.js.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/DoctorWhoFR/MatrixBot
    $ cd MatrixBot
    $ npm install

## Configure app

Open `index.js` then edit it with your settings. You will need:

discord_bot_token = "YOUR DISCORD BOT TOKEN"; // Discord bot token

FiveM_ServerAdress = "88.99.190.90"; // your fivme server adress
Port = "30120" // fivem server port

channel_id = 0; // Right-Click with dev mod on channel to get Identifier
maintenance_msg = "MAINTENANT EN COURS"; // The Maintenance message 

## Running the project

    $ node index.js
    or
    $ Just launch Start.cmd programm
