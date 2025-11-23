export interface Channel {
  id: string;
  name: string;
  displayName: string;
  streamUrl: string;
  description: string;
  icon?: string;
}

// Streaming URLs - Replace with actual sabaTV streaming URLs in production
// sabaTV 1 - Real streaming URL
const SABATV1_STREAM = "http://mbc1.vip/live/1155/1155/711.ts";
// sabaTV 2 - Test streaming URL (replace with real URL when available)
const SABATV2_STREAM = "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f1155f6efa.m3u8";

export const CHANNELS: Channel[] = [
  {
    id: "sabatv1",
    name: "sabaTV 1",
    displayName: "sabaTV 1",
    streamUrl: SABATV1_STREAM,
    description: "القناة الأولى من sabaTV - بث مباشر",
  },
  {
    id: "sabatv2",
    name: "sabaTV 2",
    displayName: "sabaTV 2",
    streamUrl: SABATV2_STREAM,
    description: "القناة الثانية من sabaTV - بث تجريبي",
  },
];

export const getChannelById = (id: string): Channel | undefined => {
  return CHANNELS.find((channel) => channel.id === id);
};
