"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
        <Grid>
          <Navigation />
          <Hero />

          <Footer />
       
        </Grid>

  );
}
