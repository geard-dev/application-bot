const BaseEvent = require('../../utils/structures/BaseEvent');
const { MessageEmbed } = require('discord.js');
const DESTINATION = 'YOUR_APPLICATION_RECIEVE_CHANNEL_ID';

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('directMessage');
  }
  
  async run(client, message) {
        const channel = client.channels.cache.get(DESTINATION);
        if (channel) {
            const embed = new MessageEmbed()
            .setTitle('New Application')
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(message.content)
            .setFooter('Application Bot by @thetrainguy#1819');
            const msg = await channel.send(embed);
            msg
        } else {
            message.channel.send('Something went wrong; please reach out to a staff member');
        }
    }
}