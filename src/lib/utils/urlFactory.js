let protooPort = 3443;

const hostnames = ["staging.huddle01.com"]; //hostnames with port 4443

if (hostnames.includes(window.location.hostname)) protooPort = 4443;

export function getProtooUrl({ roomId, peerId, userToken }) {
  const apiKey = process.env.REACT_APP_CLIENT_HUDDLE_API_KEY;
  const hostname = window.location.hostname;
  if (window.location.hostname === "localhost")
    return `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}&apiKey=${apiKey}&userToken=${userToken}`;
  else
    return `wss://huddle01.com:${protooPort}/?roomId=${roomId}&peerId=${peerId}&apiKey=${apiKey}&userToken=${userToken}`;
}
