import React from "react";

interface VideoProps {
    src: string; 
    autoPlay?: boolean; 
    muted?: boolean; 
    loop?: boolean;
    isBackground?: boolean; 
    className?: string; 
}
const Video: React.FC<VideoProps> = ({
    src,
    autoPlay = true,
    muted = true,
    loop = true,
    isBackground = false,
    className = "",
}) => {
    return (
        <div
            className={`${
                isBackground
                    ? "absolute inset-0 z-[0] w-full h-3/4 overflow-hidden"
                    : "relative w-full h-auto"
            } ${className}`}
        >
            <video
                src={src}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                className={`w-full h-full object-cover object-center ${
                    isBackground ? "brightness-35" : ""
                }`}
            />
        </div>
    );
};


export default Video;