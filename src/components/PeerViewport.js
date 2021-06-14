import { useEffect, useRef } from "react";

const PeerViewport = ({ peerId, videoTrack }) => {
  const peerVideoTrack = useRef(null);
  useEffect(() => {
    peerVideoTrack.current.srcObject = videoTrack;
  }, []);
  return (
    <div>
      <video ref={peerVideoTrack} height="400px" width="400px" controls />
    </div>
  );
};

export default PeerViewport;
