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
  return <video ref={peerVideoTrack} height="400px" width="400px" autoPlay />;
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
  return <video ref={peerScreenTrack} height="400px" width="400px" autoPlay />;
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
