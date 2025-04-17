"use client";
import React, { useEffect, useRef } from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';

export default function Registration() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    if (widgetRef.current) {
      widgetRef.current.insertAdjacentHTML(
        'beforeend',
        `<healcode-widget 
            data-type="registrations" 
            data-widget-partner="object" 
            data-widget-id="841598651f60" 
            data-widget-version="0">
         </healcode-widget>`
      );
    }
  }, []);

  return (
    <Grid>
      <Navigation />
      <Container>
        <h1 className="text-[32px] font-semibold col-span-full">Registration & Membership</h1>
        <h3 className="font-semibold col-span-full">
          Welcome to Urban PowerHouse, Boston’s home for powerlifters and olympic weightlifters. 
          We are more than just a place to train, we are a nonprofit gym on a mission. 
          Our goal is to get a barbell into the hands of as many people as possible, 
          from all walks of life, and to provide a supportive community environment for 
          strength sports athletes living in and around the Greater Boston area.
        </h3>
        <h3 className="font-semibold col-span-full">Register today to get started.</h3>

        {}
        <div ref={widgetRef} className="w-full mt-8" />

      </Container>
      <Footer />
    </Grid>
  );
}
