export interface Channel {
  id: string;
  name: string;
  displayName: string;
  streamUrl: string;
  description: string;
  icon?: string;
}

export const CHANNELS: Channel[] = [
  {
    id: "sabatv1",
    name: "sabaTV 1",
    displayName: "sabaTV 1",
    streamUrl: "", // سيتم إضافة الرابط لاحقًا
    description: "القناة الأولى من sabaTV",
  },
  {
    id: "sabatv2",
    name: "sabaTV 2",
    displayName: "sabaTV 2",
    streamUrl: "http://mbc1.vip:8080/monw3at/index.m3u8?token=DcqoRY-Xpwp-U1",
    description: "القناة الثانية من sabaTV",
  },
];

export const getChannelById = (id: string): Channel | undefined => {
  return CHANNELS.find((channel) => channel.id === id);
};
