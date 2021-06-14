import { useEffect, useRef } from "react";

const PeerViewport = (videoTrack) => {
  const peerVideoTrack = useRef(null);
  useEffect(() => {
    peerVideoTrack.current.srcObject = videoTrack.videoTrack;
  }, []);
  return (
    <div>
      <video ref={peerVideoTrack} height="400px" width="400px" autoPlay />
    </div>
  );
};

export default PeerViewport;
