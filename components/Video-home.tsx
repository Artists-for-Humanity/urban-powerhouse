"use client";
import React, { useState } from "react";
import { useRef } from "react";
import Video from "./Video/Video";

function IntroduceVideo() {
    // const PlayButton = document.getElementsByClassName("Play_button");
    // PlayButton.addEventListener("click", () => {
    //     console.log("The button is active");
    //     }
    // )
    // };
    // return() =>{

    // }

    const videoRef = useRef(null)
    const [playing, setIsPlaying] = useState(false)

    const togglePlay = () => {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
    }

    return (
        <>
            <div id="grandparent" className="px-2 w-full h-auto col-start-1 col-span-6 sm:col-span-8 lg:col-span-12">
                <div id="parent" className="w-full grid cols-">
                    <div id="children" className="w-full h-full flex justify-center items-center">
                        <button onClick={togglePlay} 
                        className= {`Play_button absolute z-20 w-[100px] h-[100px] flex items-center text-shadow-button justify-center rounded-full text-white text-4xl cursor-pointer ${
                            playing ? 'opacity-0':'bg-black/40'}`}>
                            {playing ? "" : "▶"}
                        </button>
                        {/* <video onPlay={handleVideoPlay} width="700px" height="700px" controls autoPlay className=" flex flex-rows w-[100vw[]] items-center justify-center">
                        <source src="/file.mp4"/> Your browser does not support this video
                    </video> */}
                        <Video
                            autoPlay={false}
                            muted={true}
                            loop={true}
                            isBackground={false}
                            className=""
                            controls={true}
                            ref={videoRef}
                            src={"/file.mp4"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default IntroduceVideo; 