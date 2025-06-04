import React from "react";
import Image from "../node_modules/next/image";

interface ImageBlockProps{
    images: string[];
    className?: string; 
    header:string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({
    images,
    className='',
    header,
}) => {
    return(
            <div className="hidden lg:grid col-span-full grid-cols-subgrid lg:grid-cols-3 lg:gap-2 mb-[32px]" style={{gridAutoRows: '300px'}}>
                {images.map((src,index) =>(
                    <div
                    key={index}
                    className={
                        index===0
                        ?'col-span-2 row-span-2'
                        :'col-span-1 row-span-1'
                    }
                    >
                        <Image 
                        src={src}
                        alt={'Image ${index +1 }'}
                        width={1000}
                        height={1000}
                        className="w-full h-full pbject-cover"
                        />
                    </div>
                ))}
            </div>
    )
}

export default ImageBlock;
