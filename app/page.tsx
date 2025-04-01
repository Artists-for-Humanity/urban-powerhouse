"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Video from "../components/Video";

export default function Home() {
  return (
        <Grid>
          <Navigation />
          <Video />
          <Footer />
       
        </Grid>

  );
}
