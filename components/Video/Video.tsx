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
                    : "relative w-full h-auto]"
            } ${className}`}
        >
            <video
                src={src}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                className={`${
                    isBackground
                        ? "w-full h-full object-cover brightness-35"
                        : "w-full h-auto "
                }`}
            />
        </div>
    );
};

export default Video;