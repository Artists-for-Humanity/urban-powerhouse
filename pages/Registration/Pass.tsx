"use client";
import React, { useEffect, useState } from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import Pass from "../../components/Pass";
import Button from "../../components/Button";
import '../../app/globals.css';
import '../../app/mindbody.css';


export default function Passes() {
  const [selectedTier, setSelectedTier] = useState("DAY");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  const pricingOptions = [
    {
      label: 'DAY',
      price: '$15',
      description:
        'Day Pass: In town for a day or just want to check us out? Drop in for one day of training with our day pass option, $15.',
    },
    {
      label: 'WEEK',
      price: '$35',
      description:
        "Week Pass: If you're going to be in the Boston area for more than just a day trip, we offer a week pass. Unlimited access for seven days for $35.",
    },
          {
      label: 'Facility Membership',
      price: '$50',
      description:
        'Facility Membership: Unlimited gym access during staffed hours for one calendar month.',
    },


  ];
  const customOption = [
    {
      label: 'Custom',
      price: '$$$',
      description:
        'Work with us to design a personalized package that fits your unique training goals and schedule. Contact Urban PowerHouse for details and pricing',
    },

  ];

  return (
    <Grid>
      <Navigation />
      <Container>
        <h1 className="text-[32px] font-semibold col-span-full">Membership Pricing Options</h1><br /><br />
        <h3 className="font-semibold text-xl col-span-full lg:col-start-2 lg:col-span-10 sm:mt-10">
          <span className="text-[var(--urban-orange)] ">Thank you</span> for registering with Urban PowerHouse! We have a variety of membership options available
        </h3><br />
        <Pass
          variant='default'
          options={pricingOptions}
          onSelect={(label: string) => setSelectedTier(label)}
        />

        <div className="col-start-3 col-span-2 mt-10 sm:col-start-4 lg:col-start-6 ">
          <Button
            label="Buy Pass"
            iconSrc="/icons/card.svg"
            variant="default"
            className="text-right"
            onClick={() => {
              const classMap: Record<string, string> = {
                DAY: "healcode-day",
                WEEK: "healcode-week",
                "10 Day Visit Punch Card": "healcode-10daypass",
                "30 Minutes Semi-Private Session": "healcode-30min",
                "Coaching Membership": "healcode-coaching",
                "Facility Membership": "healcode-facility",
              };

              const widgetAnchor = document.querySelector(
                `healcode-widget .${classMap[selectedTier]}`
              ) as HTMLElement | null;

              if (widgetAnchor) {
                widgetAnchor.click();
                // window.open(widgetAnchor,'_blank');
              } else {
                console.warn("No widget found for selected tier:", selectedTier);
              }
            }}
          />
        </div>
        <Pass variant='custom' options={customOption} />
               <div
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{
            __html: `
              <healcode-widget
                data-version="0.2"
                data-link-class="healcode-day"
                data-site-id="105872"
                data-service-id="100007"
                data-type="pricing-link"
                data-inner-html=""
              ></healcode-widget>
              <healcode-widget
                data-version="0.2"
                data-link-class="healcode-week"
                data-site-id="105872"
                data-service-id="100008"
                data-type="pricing-link"
                data-inner-html=""
              ></healcode-widget>
                <healcode-widget
                data-version="0.2"
                data-link-class="healcode-10daypass"
                data-site-id="105872"
                data-service-id="100009"
                data-type="pricing-link"
                data-inner-html=""
              ></healcode-widget>
               <healcode-widget
                data-version="0.2"
                data-link-class="healcode-30min"
                data-site-id="105872"
                data-service-id="66"
                data-type="pricing-link"
                data-inner-html=""
              ></healcode-widget>
              <healcode-widget
      data-version="0.2"
      data-link-class="healcode-coaching"
      data-site-id="105872"
      data-mb-site-id="5724678"
      data-service-id="101"
      data-type="contract-link"
      data-inner-html=""
    ></healcode-widget>
              <healcode-widget
                data-version="0.2"
                data-link-class="healcode-facility"
                data-site-id="105872"
                data-service-id="102"
                data-type="contract-link"
                data-inner-html=""
              ></healcode-widget>
              
            `,
          }}
        />
        <div></div>


      </Container>
      <Footer />
    </Grid>
  );
}
