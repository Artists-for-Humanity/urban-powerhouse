import React from "react"
import BulletList from "./BulletList"

const FAQ: React.FC = () => {

    const dummyText = [
        {
          "title": "Membership Options",
          "body": "Choose from monthly, annual, or pay‑as‑you‑go plans—each includes unlimited group classes and 24/7 access.",
          "iconSrc": "/icons/membership.svg"
        },
        {
          "title": "Class Schedule",
          "body": "HIIT, yoga, spin, and strength training sessions run every hour on the hour from 5 am to 10 pm.",
          "iconSrc": "/icons/calendar.svg"
        },
        {
          "title": "Personal Training",
          "body": "Certified trainers create customized programs, track your progress, and keep you motivated.",
          "iconSrc": "/icons/trainer.svg"
        },
        {
          "title": "Facility Amenities",
          "body": "Enjoy a sauna, smoothie bar, towel service, and free Wi‑Fi in our lounge area.",
          "iconSrc": "/icons/amenities.svg"
        },
        {
          "title": "Health & Safety",
          "body": "We sanitize equipment hourly and offer contactless check‑in to ensure a safe workout environment.",
          "iconSrc": "/icons/health.svg"
        }
      ]
      

    return (
        <>
            <BulletList items={dummyText}/>
        </>
    )
} 

export default FAQ
