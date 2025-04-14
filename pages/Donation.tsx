"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import TextBlock from "../components/Donation/TextBlock";
import DonationWeight from "../components/Donation/DonationWeight";
import '../app/globals.css';


export default function Donation() {

    return (
          <Grid className="gap-y-4">
            <Navigation/>
              <Container>
                <h1 className="text-[32px] font-semibold col-span-full ">Why Give to UPH?</h1>
                <TextBlock text="Lorem ipsum dolor sit amet consectetur. Cras eget urna pellentesque diam tincidunt diam. Elementum imperdiet vitae sit consectetur pharetra. Platea phasellus cursus sed praesent eget scelerisque. Pretium leo vulputate facilisis elit rhoncus. Venenatis urna imperdiet velit at ultrices ultrices porttitor integer. Fringilla fames ultrices odio egestas dui etiam. Arcu fermentum mauris sit maecenas eu dolor justo ut ut. Tellus nam velit vitae vulputate nec vestibulum sed massa nibh. Hendrerit cras elementum volutpat magna in lorem enim." />
                <TextBlock text="Lorem ipsum dolor sit amet consectetur. Cras eget urna pellentesque diam tincidunt diam. Elementum imperdiet vitae sit consectetur pharetra. Platea phasellus cursus sed praesent eget scelerisque. Pretium leo vulputate facilisis elit rhoncus. Venenatis urna imperdiet velit at ultrices ultrices porttitor integer. Fringilla fames ultrices odio egestas dui etiam. Arcu fermentum mauris sit maecenas eu dolor justo ut ut. Tellus nam velit vitae vulputate nec vestibulum sed massa nibh. Hendrerit cras elementum volutpat magna in lorem enim." />
                <DonationWeight
                    title="Your Donation Counts Help under represented teens access the world of strength training!"
                    donations={[
                    { amount: "$30", description: "Become a Friend of UPH " },
                    { amount: "$65", description: "Supports a 12 month federation membership for one athlete" },
                    { amount: "$100", description: "Covers one competition entry fee for one athlete." },
                    { amount: "$250", description: "Covers approved competition gear for one athlete." },
                    { amount: "$600", description: "Purchases a new barbell for athletes to use during training." },
                    { amount: "$1000", description: "Helps cover travel cost associated with larger scale competitions." },
                    { amount: "$2500", description: "Helps us open the doors to our first brick and mortar facility" },
                    { amount: "$__", description: "Make a gift. Every donation, no matter the size, will help us make Boston strong  together" },
                    ]}
                    className="bg-urban-grey"
                />
              </Container>
            <Footer />
          </Grid>

    );
}
