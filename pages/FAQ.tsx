"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';


export default function FAQ() {

function Question({ text }) {
  return <div className="FAQ">{text}</div>
}

function MoreInfoButton({image}) {
  return <button className="bg-{image} Click">\/</button>
}

function MoreInformation({ text, update }) {
  return <div className="flex col-start-1 col-span-12 {update} Info">{text}</div>
}


    return (                     
          <Grid className="gap-y-4 overflow-hidden break-all">
            <Navigation/>
              <Container className="min-h-[60vh] ">
                <h1 className="text-[32px] col-span-11 title">FAQ</h1>
                <div className="flex place-content-between col-start-1 col-span-12 FAQ-Block-1">
                  <Question text = "Lorem Ipsum 1"/>
                  <MoreInfoButton image = "arrowButton.png"/>
                </div>
                <MoreInformation text = "geuigsoohs"/>
                <div className="flex place-content-between col-start-1 col-span-12 FAQ-Block-2">
                  <Question text = "Lorem Ipsum 2"/>
                  <MoreInfoButton image = "arrowButton.png"/>
                </div>
                <MoreInformation text = "geuigsoohs"/>
                <div className="flex place-content-between col-start-1 col-span-12 FAQ-Block-3">
                  <Question text = "Lorem Ipsum 3"/>
                  <MoreInfoButton image = "arrowButton.png"/>
                </div>
                <MoreInformation text = "geuigsoohs"/>
                <div className="flex place-content-between col-start-1 col-span-12 FAQ-Block-4">
                  <Question text = "Lorem Ipsum 4"/>
                  <MoreInfoButton image = "arrowButton.png"/>
                </div>
                <MoreInformation text = "geuigsoohs"/>
                <div className="flex place-content-between col-start-1 col-span-12 FAQ-Block-5">
                  <Question text = "Lorem Ipsum 5"/>
                  <MoreInfoButton image = "arrowButton.png"/>
                </div>
                <MoreInformation text = "geuigsoohs"/>
                <div className="flex place-content-between col-start-1 col-span-12 FAQ-Block-6">
                  <Question text = "Lorem Ipsum 6"/>
                  <MoreInfoButton image = "arrowButton.png"/>
                </div>
                <MoreInformation text = "geuigsoohs"/>
                <div className="flex place-content-between col-start-1 col-span-12 FAQ-Block-7">
                  <Question text = "Lorem Ipsum 7"/>
                  <MoreInfoButton image = "arrowButton.png"/>
                </div>
                <MoreInformation text = "geuigsoohs"/>
              

                  
              </Container>
            <Footer />
          </Grid>

    );
}
