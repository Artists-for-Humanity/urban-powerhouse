"use client";
import React, { useEffect, useRef } from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';
import '../app/mindbody.css';

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
        `<healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="842201501f60" data-widget-version="1" ></healcode-widget>`
      );
    }
  }, []);

  return (
    <Grid>
      <Navigation />
      <Container>
        <h1 className="text-[32px] font-semibold col-span-full">Session Scheduler</h1><br /><br />
        {}
        <div ref={widgetRef} className="col-span-full" />

      </Container>
      <Footer />
    </Grid>
  );
}