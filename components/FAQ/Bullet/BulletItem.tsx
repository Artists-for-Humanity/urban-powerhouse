import React from "react"
import { useState } from "react"

export interface BulletItem {
    title: string;
    body: string;
    iconSrc?: string;   // make optional if you sometimes omit it
}

const BulletItems: React.FC<BulletItem> = ({title, body, iconSrc}) => {

    const [show, setShow] = useState(false)


    const dropDownStyle = {
        display: show ? "block" : "none"
    }

    const handleClick = () => {
        setShow(!show)
    }

    return (<>
        <div className="flex justify-between items-center p-4 col-span-12 w-full max-w-[1200px] max-h-[200px] overflow-hidden scale-[calc(1)] flex-col">
            <div className="flex justify-between w-full">
                <h3>{title}</h3>
                <img src={undefined} alt="" style={{width:"32px", height:"32px", background:"white"}} onClick={handleClick}/>
            </div>
            <div style={dropDownStyle}>
                <p>{body}</p>
            </div>
        </div>
    </>)
}

export default BulletItems