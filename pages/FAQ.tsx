"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import Question from "../components/Question";
import '../app/globals.css';


export default function FAQ() {
  const values = ["hidden", ""]
  let i = 0
  const infoDisplay = values[i]
  const handleClick = () => {
        if (i = 0) {
           i = 1
        }
        else {
           i = 0
        }
        console.log("clicked")
      }

  
    return (                     
          <Grid className="gap-y-4 overflow-hidden break-all">
            <Navigation/>
            <Container className="min-h-[60vh] ">
              <h1 className="text-[32px] col-start-1 col-span-11 title">FAQ</h1>
              <Question faq="Lorem Ipsum 1" answer="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." hidden={infoDisplay} click={() => handleClick}/>
              <Question faq="Lorem Ipsum 2" answer="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." hidden={infoDisplay}/>
              <Question faq="Lorem Ipsum 3" answer="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." hidden={infoDisplay}/>
              <Question faq="Lorem Ipsum 4" answer="Curabitur pretium tincidunt lacus. Nulla gravida orci a odio." hidden={infoDisplay}/>
              </Container>
            <Footer />
          </Grid>

    );
}
