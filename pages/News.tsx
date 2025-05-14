"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import '../app/globals.css';
import Newstitle from "../components/Newstitle";
import FirstArticle from "../components/FirstArticle";


export default function News() {

    return (
          <Grid className=" break-all">
            <Navigation/>
              <Container className="min-h-[60vh]">
                <Newstitle></Newstitle>
                
                <FirstArticle></FirstArticle>
              </Container>
            <Footer />
          </Grid>

    );
}
