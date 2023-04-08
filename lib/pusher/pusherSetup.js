import Pusher from 'pusher';

export const serverPusher = new Pusher({
    appId: "1571131",
    key: "3675093b25354516b178",
    secret: process.env.PUSHER_SECRET,
    cluster: "eu",
    useTLS: true
  });