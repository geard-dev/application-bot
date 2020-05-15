const BaseCommand = require('../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class ApplyCommand extends BaseCommand {
  constructor() {
    super('apply', 'application', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    .setTitle('Application Information')
    .setDescription("Here's how you apply:\n\nDM this bot this filled out application:\n1. QUESTION 1\n2. QUESTION2\n3. QUESTION3\n4. QUESTION4\n5. QUESTION5\n6. QUESTION6")
    .setFooter('Application Bot by @thetrainguy#1819');
    message.channel.send(embed)
  }
}