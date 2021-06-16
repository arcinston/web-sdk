import HuddleClient, { emitter } from "huddle01-client";

// import HuddleClient, { emitter } from "./lib/huddle-client";

import { useEffect, useState, useRef } from "react";
import { PeerVideo, PeerAudio } from "./components/PeerViewport";
import { getTrack } from "./lib/utils/helpers";

const config = {
  roomId: "dev",
  peerId: "peer" + Math.floor(Math.random() * 4000),
  displayName: "s3",
  window,
};

function App() {
  const [huddle, setHuddle] = useState(null);
  const [roomState, setRoomState] = useState(false);
  const [micState, setMicState] = useState(false);
  const [webcamState, setWebcamState] = useState(false);

  const [peers, setPeers] = useState([]);
  const [consumerStreams, setConsumerStreams] = useState({
    video: [],
    audio: [],
  });
  const meVideoElem = useRef(null);

  //initialize the app
  useEffect(() => {
    const myHuddleClient = new HuddleClient(config);

    setHuddle(myHuddleClient);
  }, []);

  const setupEventListeners = async () => {
    emitter.on("addPeer", (peer) => {
      console.log("new peer =>", peer);
      setPeers((_peers) => [..._peers, peer]);
      console.log("setPeers", peers);
    });

    emitter.on("addProducer", (producer) => {
      console.log(producer);
      if (producer.track.kind === "video") {
        const videoStream = producer.track;
        if (typeof videoStream == "object") {
          try {
            meVideoElem.current.srcObject = getTrack(videoStream);
          } catch (error) {
            console.error(error);
          }
        }
      } else if (producer.kind === "audio") {
        //TODO: handle my audio producer
      }
    });

    emitter.on("addConsumer", (consumer) => {
      console.log("new consumer =>", consumer);
      if (consumer.track.kind === "video") {
        //TODO: handle consumer screenshares
        const videoStream = consumer.track;

        let _peers = peers;
        console.log({ _peers });
        for (const _peer of _peers) {
          if (_peer.id === consumer.peerId) {
            console.log("yezzir");
            _peer.consumers.push(videoStream);
          }
        }
        console.log({ _peers });
        setPeers(_peers);

        console.log(peers);

        setConsumerStreams((prevState) => ({
          ...prevState,
          video: [...prevState.video, videoStream],
        }));
      } else if (consumer.track.kind === "audio") {
        const audioStream = consumer.track;
        setConsumerStreams((prevState) => ({
          ...prevState,
          audio: [...prevState.audio, audioStream],
        }));
      }
    });
  };

  const joinRoom = async () => {
    if (!huddle) return;

    try {
      await huddle.join();
      console.log("success");
      setupEventListeners();
      setRoomState(true);
    } catch (error) {
      setRoomState(false);
      alert(error);
    }
  };

  const leaveRoom = async () => {
    if (!huddle) return;
    try {
      await huddle.close();
      setRoomState(false);
    } catch (error) {
      alert(error);
    }
  };

  //TODO: add pauseWebcam() and resumeWebcam()
  const enableWebcam = async () => {
    if (!huddle) return;
    try {
      await huddle.enableWebcam();
      setWebcamState(true);
    } catch (error) {
      setWebcamState(false);
      alert(error);
    }
  };

  const disableWebcam = async () => {
    if (!huddle) return;
    try {
      await huddle.disableWebcam();
      setWebcamState(true);
    } catch (error) {
      alert(error);
      setWebcamState(false);
    }
  };

  //TODO: add muteMic() and unmuteMic()
  const enableMic = async () => {
    if (!huddle) return;
    try {
      huddle.enableMic();
      setMicState(true);
    } catch (error) {
      setMicState(false);
      alert(error);
    }
  };

  const disableMic = async () => {
    if (!huddle) return;
    try {
      huddle.disableMic();
      setMicState(false);
    } catch (error) {
      alert(error);
      setMicState(true);
    }
  };

  return (
    <div className="App">
      <button onClick={roomState ? leaveRoom : joinRoom}>
        {roomState ? "Leave Room" : "Join Room"}
      </button>
      <button onClick={webcamState ? disableWebcam : enableWebcam}>
        {webcamState ? "Disable Webcam" : "Enable Webcam"}
      </button>
      <button onClick={micState ? disableMic : enableMic}>
        {micState ? "Disable Mic" : "Enable Mic"}
      </button>
      <video height="400px" width="400px" autoPlay ref={meVideoElem} />
      {consumerStreams.video.map((stream, idx) => {
        return <PeerVideo key={idx} videoTrack={getTrack(stream)} />;
      })}
      {consumerStreams.audio.map((stream, idx) => {
        return <PeerAudio key={idx} audioTrack={getTrack(stream)} />;
      })}
    </div>
  );
}

export default App;

//2 peers -> production & consumption of videos
// audio
// pause/resume/stop

//2+ peers
