"use client";
import React, { useEffect, useRef, useState} from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import '../../app/globals.css';
import '../../app/mindbody.css';
import { client } from "../../lib/sanity";


export default function Registration() {
  const widgetRef = useRef<HTMLDivElement>(null);
   const [pageData, setPageData] = useState<{ title?: string; intro?: string; cta?: string }>({});

  useEffect(() => {
    client
      .fetch(
        `*[_type == "registrationPage"][0]{title, intro, cta}`
      )
      .then((data) => setPageData(data));
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    if (widgetRef.current) {
      widgetRef.current.insertAdjacentHTML(
        'beforeend',
        `<healcode-widget data-type="registrations" data-widget-partner="object" data-widget-id="841598651f60" data-widget-version="0"></healcode-widget>`
      );
    }

    const timeout = setTimeout(() => {
        // Remove unwanted style
      const styleTags = document.querySelectorAll('style');
      styleTags.forEach((style) => {
        if (
          style.innerHTML.includes(
            'div.healcode #hc-register { background-color: #1D42E1 !important;'
          )
        ) {
          style.remove();
        }
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  

  return (
    <Grid>
      <Navigation />
      <Container>
        <h1 className="text-[32px] font-semibold col-span-full lg:col-start-2 lg:col-span-10 lg:mb-6">{pageData.title}</h1><br /><br />
        <h3 className="font-semibold col-span-full lg:col-start-2 lg:col-span-10">
         {pageData.intro}
        </h3><br />
        <h3 className="font-semibold col-span-full lg:col-start-2 lg:col-span-10"> {pageData.cta}</h3><br /><br />

        {}
        <div ref={widgetRef} className="col-span-full lg:col-start-2 lg:col-span-10" />

      </Container>
      <Footer />
    </Grid>
  );
}
