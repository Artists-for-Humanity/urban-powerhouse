"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Bullet from "../components/FAQ/Bullet/BulletItem";
import FAQ from "../components/FAQ/FAQ";


export default function Home() {
  return (
        <Grid>
          <Navigation />
          <FAQ/>
          <Footer />

        </Grid>

  );
}
