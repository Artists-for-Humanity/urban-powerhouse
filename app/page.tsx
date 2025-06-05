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
  title: string;
  blockType: 'images' | 'equipment' | 'partners' | 'quote' | 'contact' | 'hours' | 'hero-video' | 'video-block';
  images?: SanityImage[];
  partners?: Partner[];
  quote?: string;
  author?: string;
  authorImage?: { asset: { url: string; } };
  contact?: { label: string; value: string }[];
  hours?: { day: string; hours: string }[];
  video?: { asset: { url: string } };
  subheader?: string;
  paragraph?: string;
}

export default function Home() {

const [imageBlocks, setImageBlocks] = useState<HomepageImageBlock[]>([]);


useEffect(() => {
  client
    .fetch(
      `*[_type == "homepageImageBlock"]{
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
        subheader,
        paragraph
      }`
    )
    .then((data: HomepageImageBlock[]) => {
      setImageBlocks(data || []);
    });
}, []);


const gymBlock = imageBlocks.find(block => block.blockType === "images");
const equipmentBlock = imageBlocks.find(block => block.blockType === "equipment");
const partnerBlock = imageBlocks.find(block => block.blockType === "partners");
const quoteBlock = imageBlocks.find(block => block.blockType === "quote");
const contactBlock = imageBlocks.find(b => b.blockType === "contact");
const hoursBlock = imageBlocks.find(b => b.blockType === "hours");
const videoBlock = imageBlocks.find(block => block.blockType === "hero-video");
const videoContentBlock = imageBlocks.find(block => block.blockType === "video-block");



  return (
        <Grid>
          <Hero 
           title= "Making Strength" 
           subtitle= "Accessible for All"
          videoSrc={videoBlock?.video?.asset.url || "/file.mp4"}

          />
          <Container className=" mt-[20vh] min-h-[100vh]">
          
                {videoContentBlock && (
                  <VideoBlock
                    videoFilePath={videoContentBlock.video?.asset.url || ""}
                    title={videoContentBlock.subheader || ""}
                    description={videoContentBlock.paragraph || ""}
                    buttonText="Learn More"
                    href="/About/OurStory"
                  />
                )}
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
