"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Hero from "../components/Hero/Hero";


export default function Home() {


  return (
        <Grid>
          <Hero 
           title= "Making Strength" 
           subtitle= "Accessible for All"
          />
          <Container className=" mt-[20vh] min-h-[100vh]">
           
            </Container>

          <Footer />
       
        </Grid>

  );
}
