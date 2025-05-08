"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';


export default function FAQ() {

 

    return (
          <Grid className="gap-y-4">
            <Navigation/>
              <Container className="min-h-[60vh]">
              </Container>
            <Footer />
          </Grid>

    );
}
