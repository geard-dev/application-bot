const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');
      client.user.setActivity('for applications | *apply', { type: 'WATCHING' })
      .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
      .catch(console.error);
  }
}