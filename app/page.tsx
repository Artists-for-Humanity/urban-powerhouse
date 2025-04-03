"use client";
import React from "react";
import Grid from "../components/GridContainer";
// import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import HeroText from "../components/HeroText";
import Container from "../components/Container";
// import Video from "../components/Video";
import VideoBlock from "../components/VideoBlock";
import QuoteBlock from "../components/QuoteBlock";
import ImageBlock from "../components/ImageBlock";

export default function Home() {
  return (
        <Grid>
          {/* <Navigation /> */}
          <Hero />
          <Container>
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
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
                '/placeholder.svg',
              ]}
              className="bg-urban-grey"
            />
            </Container>

          <Footer />
       
        </Grid>

  );
}
