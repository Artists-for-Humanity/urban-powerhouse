"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import TextBlock from "../components/Donation/TextBlock";
import DonationWeight from "../components/Donation/DonationWeight";
// import Button from "../components/Button";

// import Head from 'next/head';


import '../app/globals.css';


export default function Donation() {

    return (
      
          <Grid className="gap-y-4">
            <Navigation/>
              <Container>
                <h1 className="text-[32px] font-semibold col-span-full ">Why Give to UPH?</h1>
                <TextBlock text="Urban PowerHouse has created one the first nonprofit strength-training facilities supporting underserved populations in Boston and neighboring areas. Help us make strength sports, and health and wellness attainable for everyone by making a gift today. Your donation will help us provide training, information access and financial support to youth and adult athletes." />
                <DonationWeight
                    title="Your Donation Counts Help underrepresented youth, adults, and families access the world of strength training!"
                    donations={[
                    { amount: "$30", description: "Become a Friend of UPH. " },
                    { amount: "$65", description: "Supports a 12 month federation membership for one athlete." },
                    { amount: "$100", description: "Covers one competition entry fee for one athlete." },
                    { amount: "$250", description: "Covers approved competition gear for one athlete." },
                    { amount: "$600", description: "Purchases a new barbell for athletes to use during training." },
                    { amount: "$1000", description: "Helps cover travel costs associated with larger scale competitions." },
                    { amount: "$2500", description: "Helps us expand our programs for underserved athletes." },
                    { amount: "$__", description: "Make a gift. Every donation, no matter the size, will help us make Boston strong  together." },
                    
                    ]}
                    businessId="ASDZCSFGY9L7Q"
                    currencyCode="USD"
                    itemName="UPH Donation"
                />

              </Container>
            <Footer />
          </Grid>

    );
}
