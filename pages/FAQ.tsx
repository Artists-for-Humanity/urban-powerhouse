"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';


export default function FAQ() {
function Question({ text }) {
  return <div className="col-start-1 col-span-6 FAQ">{text}</div>
}

function MoreInfoButton({image}) {
  return <button className="col-start-6 col-span-1 sm:col-start-8 lg:col-start-12 Click"></button>
}

    return (                     
          <Grid className="gap-y-4 overflow-hidden break-all">
            <Navigation/>
              <Container className="min-h-[60vh] ">
                <h1 className="text-[32px] col-span-11 title">FAQ</h1>
                <div className="FAQ-Block-1">
                  <Question text = "Lorem Ipsum 1"/>
                  <MoreInfoButton image = "3"/>
                </div>
                <div className="FAQ-Block-2">
                  <Question text = "Lorem Ipsum 2"/>
                  <MoreInfoButton image = "2"/>
                </div>
                <div className="FAQ-Block-3">
                <Question text = "Lorem Ipsum 3"/>
                <MoreInfoButton image = "2"/>
                </div>
                <div className="FAQ-Block-4">
                <Question text = "Lorem Ipsum 4"/>
                <MoreInfoButton image = "2"/>
                </div>
                <div className="FAQ-Block-5">
                <Question text = "Lorem Ipsum 5"/>
                <MoreInfoButton image = "2"/>
                </div>
                <div className="FAQ-Block-6">
                <Question text = "Lorem Ipsum 6"/>
                <MoreInfoButton image = "2"/>
                </div>
                <div className="FAQ-Block-7">
                <Question text = "Lorem Ipsum 7"/>
                <MoreInfoButton image = "2"/>
                </div>
              

                  
              </Container>
            <Footer />
          </Grid>

    );
}
