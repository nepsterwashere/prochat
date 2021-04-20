import React, { useEffect, useRef, useState } from 'react'
import videojs from 'video.js';

export default function usePlayer({ src, controls, autoplay }) {
    const [player, setPlayer] = useState(null);
    const videoRef = useRef(null);
    const options = {
        fill: true,
        fluid: true,
        preload: 'auto',
        html5: {
            hls: {
                enableLowInitialPlaylist: true,
                smoothQualityChange: true,
                overrideNative: true,
            },
        },
    };

    useEffect(() => {
        const vjsPlayer = videojs(
            videoRef.current, {
            ...options,
            controls,
            autoplay,
            sources: [src],
        });
        setPlayer(vjsPlayer);

        return function cleanup() {
            if (player !== null) {
                player.dispose();
            }
        };
    }, []);

    useEffect(() => {
        if (player !== null) {
            player.src({ src });
        }
    }, [src]);

    return videoRef;
};