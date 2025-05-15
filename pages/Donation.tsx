"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";



import '../app/globals.css';


export default function Donation() {

    return (
          <Grid className="gap-y-4 ">
            <Navigation/>
              <Container>
              <div className="grid grid-cols-2 place-content-center h-48 ...">
              <div>Why Give to UPH?</div>
              </div>

              
              </Container>
            <Footer />
          </Grid>

    );
}
