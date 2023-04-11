import ClientPusher from 'pusher-js'

export const clientPusher = new ClientPusher("405a15fbfa721ce7be5d", {
    cluster: 'eu',
  });