# application bot
 This bot can be used for discord staff applications, or really, any type of application, all without leaving Discord!

## Setup

This is a single server bot, which means you can only use it on 1 server (per token). To set up, first go to the .env file and replace [YOUR BOT TOKEN] with your bot token. Next, go to /src/events/message/directMessage.js and replace YOUR_APPLICATION_RECIEVE_CHANNEL_ID with the channel ID of the channel you want the applications to go to. Finally, to edit your questions, go to /src/commands/ApplyCommand.js and replace QUESTION1 with your first question, QUESTION2 with your second question, etc. You obviously need Node.js to run this.

## Run

Go to / and in Terminal/Powershell run ` npm run dev ` when you're testing it (while developing), that makes it so when any changes are detected, it automatically restarts it. When you deploy it, use ` npm run start `

## Credits

[Slappey](https://github.com/ansonfoong/slappey) - The initial workspace was generated by Slappey