export interface Channel {
  id: string;
  name: string;
  displayName: string;
  streamUrl: string;
  description: string;
  icon?: string;
}

// Streaming URLs with CORS proxy
const ORIGINAL_STREAM = "http://mbc1.vip:8080/monw3at/index.m3u8?token=DcqoRY-Xpwp-U1";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const SABATV1_STREAM = CORS_PROXY + ORIGINAL_STREAM;
const SABATV2_STREAM = CORS_PROXY + ORIGINAL_STREAM;

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
