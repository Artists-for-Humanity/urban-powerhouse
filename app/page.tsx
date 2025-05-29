"use client";
import React, {useState, useEffect} from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import VideoBlock from "../components/Video/VideoBlock"
import Hero from "../components/Hero/Hero";
import QuoteBlock from "../components/QuoteBlock";
import ImageBlock from "../components/ImageBlock";
import PartnerBlock from "../components/PartnerBlock";
import StatBlock from "../components/Stat/StatBlock";
import InfoBlock from "../components/InfoBlock";
import { client } from "../lib/sanity";
import '../app/globals.css';

interface SanityImage {
  asset: {
    url: string;
    metadata?: unknown;
  };
  alt?: string;
}

interface HomepageImageBlock {
  title: string;
  images: SanityImage[];
}

export default function Home() {

const [gymImages, setGymImages] = useState<SanityImage[]>([]);

useEffect(() => {
  client
    .fetch(
      `*[_type == "homepageImageBlock" && title == "Our GYM"][0]{
        images[]{asset->{url}, alt}
      }`
    )
    .then((data: HomepageImageBlock) => {
      setGymImages(data?.images || []);
    });
}, []);

console.log("Our GYM image URLs:", gymImages.map(img => img.asset.url));

  const partners = {
    header: 'Our Partners',
    images: [
      { src: '/logos/A7.png', link: 'https://a7.co/' },
      { src: '/logos/Eleiko.png', link: 'https://eleiko.com/en-us' },
      { src: '/logos/AFH.png', link: 'https://www.afhboston.org/' },
      { src: '/logos/FutureBos.png', link: 'https://www.boston.gov/departments/youth-employment-and-opportunity/youth-jobs' },
      { src: '/logos/BOS.png', link: 'https://bellsofsteel.us/' },
    ],
  };

  return (
        <Grid>
          <Hero 
           title= "Making Strength" 
           subtitle= "Accessible for All"
          />
          <Container className=" mt-[20vh] min-h-[100vh]">
              <VideoBlock
                videoFilePath="file.mp4"
                title="About Urban Powerhouse"
                description="Urban PowerHouse is a nonprofit organization bringing empowerment and self-growth to those in Boston’s urban centers through strength & power sports. Our mission is to get a barbell into the hands of individuals of color living in and around Boston, reduce risk factors for chronic metabolic diseases through data-driven movement, and create an inclusive community representative of those we seek to serve.
"
                buttonText="Learn More"
                href="/About/OurStory"
                />
                 <QuoteBlock
                  quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis  "
                  author="FIRST LASTNAME, TITLE HERE"
                  authorImageSrc="/authorImg.png"
                />
              <ImageBlock
                  header="Our GYM"
                  images={gymImages.map(img => img.asset.url)}
                  className="bg-urban-grey"
              />
              <ImageBlock
              header="Our Equitment"
              images={[
                '/gymshots/Championship2025.jpg',
                '/gymshots/DejenaeMachinePress.jpg',
                '/gymshots/DSC01530.jpg',
                '/gymshots/DSC01572.jpg',
                '/gymshots/IMG_8611.jpg',
                '/gymshots/IMG_8613.jpg',
          
              ]}
               variant="simple"
               buttonText="See All"
              className="bg-urban-grey mt-10"
            />
                <PartnerBlock
                  header={partners.header}
                  images={partners.images}
                  className=""
                />

              <StatBlock
                header="Our Stats"
                stats={[
                  { number: "500", description: "Number of Athletes who have received individualized coaching" },
                  { number: "54", description: "Athletes who have received financial assistance" },
                  { number: "250", description: "Unique Visitors" },
                  { number: "1000", description: "Community Event Attendees" },
                  { number: "60", description: "sanctioned competitions UPH athletes have participated in" },
                  { number: "22", description: "Number of state, regional, and national competitions" },
                  { number: "19", description: "Number of first place wins" },
                ]}
                className="bg-urban-grey rounded-lg"
              />
              <InfoBlock 
                variant="contact"
                title="Reach Us"
                fields={[
                  // { label: "Phone", value: "123-888-3434" },
                  { label: "Email:", value: "teamurbanpowerhouse@gmail.com" },
                ]}
              />

              <InfoBlock 
                variant="hours"
                title="Operating Hours"
                businessHours={[
                  { day: "Monday - Friday", hours: "5am - 11pm" },
                  { day: "Saturday", hours: "8am -8pm" },
                  { day: "Sunday", hours: "8am - 6pm" },
                  // { day: "Holidays", hours: "Closed" }
                ]}
              />
            </Container>

          <Footer />
       
        </Grid>

  );
}
