import { types as MediasoupTypes } from "mediasoup-client"

export interface IConsumerStreams {
    video: MediaStreamTrack[];
    audio: MediaStreamTrack[];
    screen: MediaStreamTrack[];
}

export interface IProducer extends MediasoupTypes.Producer {
    type?: string;
}

export interface IConsumer extends MediasoupTypes.Consumer {
    type?: string;
}

export interface IHuddleClientConfig {
    roomId: string;
    peerId: string;
    apiKey: string;
    displayName: string;
    handlerName?: string;
    useSimulcast?: boolean;
    useSharingSimulcast?: boolean;
    forceTcp?: boolean;
    produce?: boolean;
    consume?: boolean;
    forceH264?: boolean;
    forceVP9?: boolean;
    svc?: any;
    datachannel?: boolean;
    externalVideo?: any;
    isBot: boolean;
    userToken?: string;
    userPassword?: string;
    window: Window;
}