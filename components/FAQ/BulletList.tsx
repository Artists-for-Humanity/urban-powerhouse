import React from "react"
import { useState } from "react"
import Bullet, { BulletItem } from "./Bullet/BulletItem"

interface BulletsProps {
    items: BulletItem[];                      // ← array of objects
  }

const BulletList: React.FC<BulletsProps> = ({ items }) => (

    <ul className="flex justify-between items-center p-4 col-span-12 w-full max-w-[1200px] max-h-[200px] overflow-hidden scale-[calc(1)] flex-col">
        {items.map((item, i) => (
            <li key={i} className="flex justify-between w-full">
                <Bullet {...item}/>
            </li>
        ))}
    </ul>

)

export default BulletList