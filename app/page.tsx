"use client";
import React from "react";
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

export default function Home() {
  const partners = {
    header: 'Our Partners',
    images: [
      { src: '/logos/A7.png', link: 'https://a7.co/' },
      { src: '/logos/Eleiko.png', link: 'https://eleiko.com/en-us' },
      { src: '/logos/AFH.png', link: 'https://www.afhboston.org/' },
      { src: '/logos/BOS.png', link: 'https://bellsofsteel.us//' },
      // { src: '/logos/placeholder.png', link: 'https://example.com/' },
      // { src: '/logos/placeholder.png', link: 'https://example.com/' },
      // { src: '/logos/placeholder.png', link: 'https://example.com/' },
      // { src: '/logos/placeholder.png', link: 'https://example.com/' },
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
                description="We are an non-profit organization in Boston working to increase the  exposure and participation of underserved youth and adults in strength  sports through training, information access, and financial support. We  want to make powerlifting and weightlifting attainable for everyone,  thereby keeping the sports diverse and inclusive for years to come. Want to help? Curious? Join our movement below!"
                buttonText="Learn More →"
                onButtonClick={() => console.log("Button clicked!")}
                />
                 <QuoteBlock
                  quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis  "
                  author="FIRST LASTNAME, TITLE HERE"
                  authorImageSrc="/authorImg.png"
                />
              <ImageBlock
              images={[
                '/gymshots/Championship2025.jpg',
                '/gymshots/DejenaeMachinePress.jpg',
                '/gymshots/DSC01530.jpg',
                '/gymshots/DSC01572.jpg',
                '/gymshots/IMG_8611.jpg',
                '/gymshots/IMG_8613.jpg',
                '/gymshots/DejenaeMachinePress.jpg',
                '/gymshots/DSC01572.jpg',
                '/gymshots/RenaudBench.jpg',
                '/gymshots/SofiaLegExtension.jpg',
                '/gymshots/Championship2025.jpg',
                '/gymshots/P1040529.jpg',
          
              ]}
              className="bg-urban-grey"
            />
                <PartnerBlock
                  header={partners.header}
                  images={partners.images}
                  className=""
                />

              <StatBlock
                header="Our Stats"
                stats={[
                  { number: "500", description: "Members" },
                  { number: "5", description: "Championiships" },
                  { number: "200", description: "Equipments" },
                  { number: "$20000", description: "Donated" },
                ]}
                className="bg-urban-grey rounded-lg"
              />
              <InfoBlock 
                variant="contact"
                title="Reach Us"
                fields={[
                  { label: "Phone", value: "123-888-3434" },
                  { label: "Email", value: "contact@urbanpowerhouse.com" },
                ]}
              />

              <InfoBlock 
                variant="hours"
                title="Operating Hours"
                businessHours={[
                  { day: "Monday - Friday", hours: "5am - 10pm" },
                  { day: "Saturday", hours: "8am - 5pm" },
                  { day: "Sunday", hours: "8am - 3pm" },
                  { day: "Holidays", hours: "Closed" }
                ]}
              />

            </Container>

          <Footer />
       
        </Grid>

  );
}
