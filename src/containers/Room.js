import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";

// import HuddleClient, { emitter } from "huddle01-client";

import HuddleClient, { emitter } from "../lib/huddle-client";

// [.] remove producers/consumers
// [.] start/stop screenshare
// [.] auth
// [] recordings
// [] change mic, webcam during the call

import { getTrack } from "../lib/utils/helpers";
import { PeerVideo, PeerAudio, PeerScreen } from "../components/PeerViewport";

const config = {
  apiKey: "hcDbdLhQvi86kwx3tu8IVav2MjREzCnEsw4K6Vt9",
  roomId: "dev",
  peerId: "peer" + Math.floor(Math.random() * 4000),
  displayName: "s3",
  window,
};

function Room() {
  const history = useHistory();
  const isBot = localStorage.getItem("bot_password") === "huddle01";

  const [huddle, setHuddle] = useState(null);
  const [roomState, setRoomState] = useState(false);
  const [micState, setMicState] = useState(false);
  const [webcamState, setWebcamState] = useState(false);
  const [screenshareState, setScreenshareState] = useState(false);

  const [peers, setPeers] = useState([]);
  const [consumerStreams, setConsumerStreams] = useState({
    video: [],
    audio: [],
    screen: [],
  });

  const meVideoElem = useRef(null);
  const meScreenElem = useRef(null);

  //initialize the app
  useEffect(() => {
    history.push(`?roomId=${config.roomId}`);

    if (isBot) {
      document.getElementById("join-btn").click();
    }

    const myHuddleClient = new HuddleClient(config);

    setHuddle(myHuddleClient);
  }, []);

  useEffect(() => {
    console.log(consumerStreams);
  }, [consumerStreams]);

  const setupEventListeners = async () => {
    emitter.on("roomState", (state) => {
      if (state === "connected") {
        setRoomState("connected");
      }
    });

    emitter.on("error", (error) => {
      alert(error);
    });

    emitter.on("addPeer", (peer) => {
      console.log("new peer =>", peer);
      setPeers((_peers) => [..._peers, peer]);
      console.log("setPeers", peers);
    });

    emitter.on("addProducer", (producer) => {
      console.log(producer);
      if (producer.type === "webcam") {
        const videoStream = producer.track;
        if (typeof videoStream == "object") {
          try {
            meVideoElem.current.srcObject = getTrack(videoStream);
          } catch (error) {
            console.error(error);
          }
        }
      } else if (producer.type === "mic") {
        //TODO: handle my audio producer
      } else if (producer.type === "screen") {
        const videoStream = producer.track;
        if (typeof videoStream == "object") {
          try {
            meScreenElem.current.srcObject = getTrack(videoStream);
          } catch (error) {
            console.error(error);
          }
        }
      }
    });

    emitter.on("removeProducer", (producer) => {
      console.log("remove ", producer);
      if (producer.type === "screen") {
        try {
          meScreenElem.current.srcObject = null;
        } catch (error) {
          console.error(error);
        }
      } else if (producer.type === "webcam") {
        try {
          meVideoElem.current.srcObject = null;
        } catch (error) {
          console.error(error);
        }
      } else if (producer.type === "mic") {
        //TODO
      }
    });

    emitter.on("addConsumer", (consumer) => {
      switch (consumer.type) {
        case "webcam": {
          const videoStream = consumer.track;
          setConsumerStreams((prevState) => ({
            ...prevState,
            video: [...prevState.video, videoStream],
          }));

          break;
        }

        case "screen": {
          const screenStream = consumer.track;
          setConsumerStreams((prevState) => ({
            ...prevState,
            screen: [...prevState.screen, screenStream],
          }));
          break;
        }

        case "mic": {
          const audioStream = consumer.track;
          setConsumerStreams((prevState) => ({
            ...prevState,
            audio: [...prevState.audio, audioStream],
          }));

          break;
        }

        default:
          break;
      }
    });

    emitter.on("removeConsumer", (consumer) => {
      switch (consumer.type) {
        case "screen":
          setConsumerStreams((prevState) => {
            return {
              ...prevState,
              screen: prevState.screen.filter(
                (_consumer) => _consumer.id !== consumer._id
              ),
            };
          });
          break;
        case "webcam":
          setConsumerStreams((prevState) => {
            return {
              ...prevState,
              video: prevState.video.filter(
                (_consumer) => _consumer.id !== consumer._id
              ),
            };
          });
          break;
        case "mic":
          setConsumerStreams((prevState) => {
            return {
              ...prevState,
              audio: prevState.audio.filter(
                (_consumer) => _consumer.id !== consumer._id
              ),
            };
          });
          break;

        default:
          break;
      }
    });
  };

  const joinRoom = async () => {
    if (!huddle) return;

    try {
      setupEventListeners();
      await huddle.join();
      console.log("success");
    } catch (error) {
      // setRoomState(false);
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
      setWebcamState(false);
    } catch (error) {
      alert(error);
      // setWebcamState(false);
    }
  };

  const startScreenshare = async () => {
    if (!huddle) return;
    try {
      await huddle.enableShare();
      setScreenshareState(true);
    } catch (error) {
      alert(error);
      setScreenshareState(false);
    }
  };

  const stopScreenshare = async () => {
    if (!huddle) return;
    try {
      await huddle.disableShare();
      setScreenshareState(false);
    } catch (error) {
      alert(error);
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

  const startRecording = async () => {
    try {
      const status = await huddle.startRecording();
      if (status !== true)
        console.error("an error occurred while initiating recording");
      console.log("recording initiated");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="me-ports">
        <video height="400px" width="400px" autoPlay ref={meVideoElem} />
        <video height="400px" width="400px" autoPlay ref={meScreenElem} />
      </div>
      <div className="btn-grp">
        <button
          id="join-btn"
          onClick={roomState === "connected" ? leaveRoom : joinRoom}
        >
          {roomState === "connected" ? "Leave Room" : "Join Room"}
        </button>
        <button onClick={webcamState ? disableWebcam : enableWebcam}>
          {webcamState ? "Disable Webcam" : "Enable Webcam"}
        </button>
        <button onClick={micState ? disableMic : enableMic}>
          {micState ? "Disable Mic" : "Enable Mic"}
        </button>
        <button onClick={screenshareState ? stopScreenshare : startScreenshare}>
          {screenshareState ? "Disable Screenshare" : "Enable Screenshare"}
        </button>
      </div>

      <div className="peer-ports">
        {consumerStreams.video.map((stream, idx) => {
          return <PeerVideo key={idx} videoTrack={getTrack(stream)} />;
        })}
        {consumerStreams.screen.map((stream, idx) => {
          return <PeerScreen key={idx} screenTrack={getTrack(stream)} />;
        })}
        {consumerStreams.audio.map((stream, idx) => {
          return <PeerAudio key={idx} audioTrack={getTrack(stream)} />;
        })}
      </div>
    </div>
  );
}

export default Room;
