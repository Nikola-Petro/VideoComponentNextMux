import React from 'react';
import MuxPlayer from '@mux/mux-player-react';

const MyComponent = () => {
    return (
        <MuxPlayer
            streamType="on-demand"
            playbackId="dAUfdFNXLLMrmKI21nCEjLliHEhjcPqm4ZaVyPKgCYo"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
        />
    );
};

export default MyComponent;
