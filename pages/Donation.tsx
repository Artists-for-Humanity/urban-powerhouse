"use client";
import React, { useEffect, useState } from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import TextBlock from "../components/Donation/TextBlock";
import DonationWeight from "../components/Donation/DonationWeight";
import { client } from "../lib/sanity";



import '../app/globals.css';


export default function Donation() {

   const [pageData, setPageData] = useState({
    title: "",
    textBlock: "",
    donationWeightsTitle: "",
    donations: [],
  });

   useEffect(() => {
    client
      .fetch(
        `*[_type == "donationPage"][0]{title, textBlock, donationWeightsTitle, donations}`
      )
      .then((data) => setPageData(data));
  }, []);

    return (
      
          <Grid className="gap-y-4">
            <Navigation/>
              <Container>
                <h1 className="text-[32px] font-semibold col-span-full lg:col-start-2 lg:col-span-10">{pageData.title}</h1>
                <TextBlock text={ pageData.textBlock}/>
                <DonationWeight
                    title={pageData.donationWeightsTitle}
                    donations={pageData.donations}
                    businessId="ASDZCSFGY9L7Q"
                    currencyCode="USD"
                    itemName="UPH Donation"
                />

              </Container>
            <Footer />
          </Grid>

    );
}
