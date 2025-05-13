"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';

function Question({ value, styleType }) {
  return <div style={styleType} className="FAQ">Lorem Ipsum {value}</div>
}
export default function FAQ() {
 

    return (                     
          <Grid className="gap-y-4 overflow-hidden">
            <Navigation/>
              <Container className="min-h-[60vh]">
                <h1 className="title">FAQ</h1>
                <Question value ="1" styleType={{grid-column-start: span 4}}/>
                <Question value ="2"/>
                <Question value ="3"/>
                <Question value ="4"/>
                

                  
              </Container>
            <Footer />
          </Grid>

    );
}
