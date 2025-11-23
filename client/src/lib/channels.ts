export interface Channel {
  id: string;
  name: string;
  displayName: string;
  streamUrl: string;
  description: string;
  icon?: string;
}

// Streaming URLs - Replace with actual sabaTV streaming URLs in production
// Current URLs are test streams for demonstration
const SABATV1_STREAM = "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f1155f6efa.m3u8";
const SABATV2_STREAM = "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f1155f6efa.m3u8";

export const CHANNELS: Channel[] = [
  {
    id: "sabatv1",
    name: "sabaTV 1",
    displayName: "sabaTV 1",
    streamUrl: SABATV1_STREAM,
    description: "القناة الأولى من sabaTV",
  },
  {
    id: "sabatv2",
    name: "sabaTV 2",
    displayName: "sabaTV 2",
    streamUrl: SABATV2_STREAM,
    description: "القناة الثانية من sabaTV",
  },
];

export const getChannelById = (id: string): Channel | undefined => {
  return CHANNELS.find((channel) => channel.id === id);
};
