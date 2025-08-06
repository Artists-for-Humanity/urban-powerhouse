import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface VideoProps {
    src: string; 
    autoPlay?: boolean; 
    muted?: boolean; 
    loop?: boolean;
    isBackground?: boolean; 
    className?: string; 
    playsInline?: boolean;
    preload?: 'auto' | 'metadata' | 'none';
    poster?: string; 
}
const Video: React.FC<VideoProps> = ({
    src,
    autoPlay = true,
    muted = true,
    loop = true,
    isBackground = false,
    className = "",
    playsInline = true,
    preload = "metadata",
    poster,
}) => {
    const [hasError, setHasError] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleCanPlay = () => {
            // Force play on mobile devices
            if (autoPlay && muted) {
                video.play().catch(() => {
                    // Autoplay failed, but that's okay for background videos
                    console.log('Autoplay prevented by browser');
                });
            }
        };

        const handleError = () => {
            setHasError(true);
        };

        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('error', handleError);

        return () => {
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('error', handleError);
        };
    }, [autoPlay, muted]);

    if (hasError && poster) {
        return (
            <div
                className={`${
                    isBackground
                        ? "absolute inset-0 z-[0] w-full h-3/4 overflow-hidden"
                        : "relative w-full h-auto"
                } ${className}`}
            >
                <Image
                    src={poster}
                    alt="Video fallback"
                    fill
                    className={`object-cover object-center ${
                        isBackground ? "brightness-35" : ""
                    }`}
                />
            </div>
        );
    }

    return (
        <div
            className={`${
                isBackground
                    ? "absolute inset-0 z-[0] w-full h-3/4 overflow-hidden"
                    : "relative w-full h-auto"
            } ${className}`}
        >
            <video
                ref={videoRef}
                src={src}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                playsInline={playsInline}
                preload={preload}
                controls={false}
                disablePictureInPicture={true}
                poster={poster}
                className={`w-full h-full object-cover object-center ${
                    isBackground ? "brightness-35" : ""
                }`}
                style={{
                    // additional mobile-specific styles
                    WebkitTransform: 'translateZ(0)', // force hardware acceleration
                }}
            />
        </div>
    );
};


export default Video;