"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Question from "../components/Question";
import '../app/globals.css';


export default function FAQ() {


// function Question({ text }) {
//   return <div className="FAQ">{text}</div>
// }

// function MoreInfoButton({ image }) {
//   return <button src="{image}"className="Click">\/</button>
// }

// function MoreInformation({ text }) {
//   return <div className="flex col-start-1 col-span-12 Info">{text}</div>
// }


    return (                     
          <Grid className="gap-y-4 overflow-hidden break-all">
            <Navigation/>
            <Container className="min-h-[60vh] ">
              <h1 className="text-[32px] col-start-1 col-span-11 title">FAQ</h1>
              <Question title="Lorem Ipsum 1"/>
              <Question title="Lorem Ipsum 2"/>
              <Question title="Lorem Ipsum 3"/>
              <Question title="Lorem Ipsum 4"/>

                
                {/* <h1 className="text-[32px] col-span-11 title">FAQ</h1>
                <div className="flex place-content-between col-start-1 col-span-12 FAQ-Block-1">
                  <Question text = "Lorem Ipsum 1"/>
                  <MoreInfoButton image = "arrowButton.png"/>
                </div>
                <MoreInformation text = "geuigsoohs"/> */}
                
          

                  
              </Container>
            <Footer />
          </Grid>

    );
}
