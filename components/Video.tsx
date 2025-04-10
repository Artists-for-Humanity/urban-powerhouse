import React from "react";

const Video : React.FC = (mesh = false) => {
    return(
        <div className="bg-(--urban-black) col-span-12 w-full min-h-screen absolute z-[-2]">
            <video src="file.mp4" loop autoPlay muted/>
        </div>
    )
}

export default Video