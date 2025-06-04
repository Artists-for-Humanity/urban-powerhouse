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

interface Partner {
  image: {
    asset: {
      url: string;
    };
  };
  link: string;
}

interface HomepageImageBlock {
  key: string;
  title: string;
  blockType: 'images' | 'partners' | 'quote' | 'contact' | 'hours' | 'hero-video';
  images?: SanityImage[];
  partners?: Partner[];
  quote?: string;
  author?: string;
  authorImage?: { asset: { url: string; } };
  contact?: { label: string; value: string }[];
  hours?: { day: string; hours: string }[];
  video?: { asset: { url: string } };
}

export default function Home() {

const [imageBlocks, setImageBlocks] = useState<HomepageImageBlock[]>([]);


useEffect(() => {
  client
    .fetch(
      `*[_type == "homepageImageBlock"]{
        key,
        title,
        blockType,
        images[]{asset->{url}, alt},
        partners[]{image{asset->{url}}, link},
        quote,
        author,
        authorImage{asset->{url}},
        contact[]{label, value},
        hours[]{day, hours},
        video{asset->{url}},
      }`
    )
    .then((data: HomepageImageBlock[]) => {
      setImageBlocks(data || []);
    });
}, []);


const gymBlock = imageBlocks.find(block => block.key === "our-gym");
const equipmentBlock = imageBlocks.find(block => block.key === "equipment");
const partnerBlock = imageBlocks.find(block => block.key === "partners");
const quoteBlock = imageBlocks.find(block => block.blockType === "quote");
const contactBlock = imageBlocks.find(b => b.blockType === "contact");
const hoursBlock = imageBlocks.find(b => b.blockType === "hours");
const videoBlock = imageBlocks.find(block => block.blockType === "hero-video");



  return (
        <Grid>
          <Hero 
           title= "Making Strength" 
           subtitle= "Accessible for All"
          videoSrc={videoBlock?.video?.asset.url || "/file.mp4"} // <-- Pass videoSrc prop

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
                 {/* <QuoteBlock
                  quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis  "
                  author="FIRST LASTNAME, TITLE HERE"
                  authorImageSrc="/authorImg.png"
                /> */}
              {quoteBlock && (
                <QuoteBlock
                  quote={quoteBlock.quote || ""}
                  author={quoteBlock.author || ""}
                  authorImageSrc={quoteBlock.authorImage?.asset.url || ""}
                />
              )}
              <ImageBlock
                header={gymBlock?.title || ""}
                images={gymBlock?.images?.map(img => img.asset.url) || []}
              />

              <ImageBlock
                header={equipmentBlock?.title || ""}
                images={equipmentBlock?.images?.map(img => img.asset.url) || []}
                variant="simple"
                buttonText="See All"
                className="bg-urban-grey mt-10"
              />
          {partnerBlock && partnerBlock.blockType === "partners" && (
          <PartnerBlock
            header={partnerBlock.title}
            images={partnerBlock.partners?.map(p => ({
              src: p.image.asset.url,
              link: p.link,
            })) || []}
            className=""
          />
        )}

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
              {/* <InfoBlock 
                variant="contact"
                title="Reach Us"
                fields={[
                  // { label: "Phone", value: "123-888-3434" },
                  { label: "Email:", value: "teamurbanpowerhouse@gmail.com" },
                ]}
              /> */}

              {/* <InfoBlock 
                variant="hours"
                title="Operating Hours"
                businessHours={[
                  { day: "Monday - Friday", hours: "5am - 11pm" },
                  { day: "Saturday", hours: "8am -8pm" },
                  { day: "Sunday", hours: "8am - 6pm" },
                  // { day: "Holidays", hours: "Closed" }
                ]}
              /> */}
   {contactBlock && (
          <InfoBlock
            variant="contact"
            title={contactBlock.title}
            fields={contactBlock.contact || []}
          />
        )}

        {hoursBlock && (
          <InfoBlock
            variant="hours"
            title={hoursBlock.title}
            businessHours={hoursBlock.hours || []}
          />
        )}

            </Container>

          <Footer />
       
        </Grid>

  );
}
