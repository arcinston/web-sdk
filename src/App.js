import { useEffect, useState, useRef } from "react";
import HuddleClient from "./lib/huddle-client";
import emitter from "./lib/utils/EventEmitter";
import PeerViewport from "./components/PeerViewport";

function App() {
  const [huddle, setHuddle] = useState(null);
  const [peers, setPeers] = useState([]);
  const [videoConsumerTracks, setVideoConsumerTracks] = useState([]);
  const meVideoElem = useRef(null);

  //initialize the app
  useEffect(() => {
    const config = {
      roomId: "room",
      peerId: "peer" + Math.floor(Math.random() * 4000),
      displayName: "name",
    };

    const myHuddleClient = new HuddleClient(config);

    setHuddle(myHuddleClient);
  }, []);

  const getStream = (track) => {
    const stream = new MediaStream();
    stream.addTrack(track);
    return stream;
  };

  const init = async () => {
    if (!huddle) return;

    await huddle.join();

    emitter.on("addPeer", (peer) => {
      console.log("new peer =>", peer);
      setPeers([...peers, peer]);
    });

    emitter.on("addProducer", (producer) => {
      console.log(producer);
      if (producer.track.kind === "video") {
        const videoStream = producer.track;
        if (typeof videoStream == "object") {
          try {
            meVideoElem.current.srcObject = getStream(videoStream);
          } catch (error) {
            console.error(error);
          }
        }
      } else if (producer.kind === "audio") {
        //handle for audio producer
      }
    });

    emitter.on("addConsumer", (consumer) => {
      console.log("new consumer =>", consumer);
      const videoStream = consumer.track;
      if (videoStream.kind === "video") {
        const videoTrack = getStream(videoStream);
        setVideoConsumerTracks([...videoConsumerTracks, videoTrack]);
      } else {
        //handle for audio consumer
      }
    });
  };

  const _enableWebcam = async () => {
    if (!huddle) return;
    await huddle.enableWebcam();
  };

  return (
    <div className="App">
      <button onClick={init}> init </button>
      <button onClick={_enableWebcam}>Webcam</button>
      <button onClick={async () => await huddle.enableMic()}>Mic</button>
      <video height="400px" width="400px" autoPlay ref={meVideoElem} />
      {videoConsumerTracks.map((track, idx) => {
        return (
          <>
            <PeerViewport videoTrack={track} idx={idx} />;
          </>
        );
      })}
    </div>
  );
}

// join
// enableWebcam
// disableWebcam
// pauseVideo
// resumeVideo
// muteMic
// unmuteMic
// close

export default App;
