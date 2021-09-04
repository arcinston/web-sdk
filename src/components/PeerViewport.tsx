import { useEffect, useRef } from "react";

export const PeerVideo = ({
  videoTrack,
}: {
  videoTrack: MediaProvider | null;
}) => {
  const peerVideoTrack = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    peerVideoTrack.current.srcObject = videoTrack;
  }, []);
  return (
    <div>
      <video
        ref={peerVideoTrack}
        style={{ padding: "10px" }}
        height="400px"
        width="400px"
        autoPlay
      />
      <text></text>
    </div>
  );
};

export const PeerScreen = ({
  screenTrack,
}: {
  screenTrack: MediaProvider | null;
}) => {
  const peerScreenTrack = useRef<HTMLVideoElement>(null!);

  useEffect(() => {
    peerScreenTrack.current.srcObject = screenTrack;
  }, []);
  return (
    <div>
      <video
        ref={peerScreenTrack}
        style={{ padding: "10px" }}
        height="400px"
        width="400px"
        autoPlay
      />
    </div>
  );
};

export const PeerAudio = ({
  audioTrack,
}: {
  audioTrack: MediaProvider | null;
}) => {
  const peerAudioTrack = useRef<HTMLAudioElement>(null!);

  useEffect(() => {
    console.log(audioTrack);
    peerAudioTrack.current.srcObject = audioTrack;
  }, []);
  return <audio ref={peerAudioTrack} autoPlay playsInline controls={false} />;
};
