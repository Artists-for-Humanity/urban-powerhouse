"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
// import ArticlePreview from "../components/News/ArticlePreview";
import NewsBlock from "../components/News/NewsBlock";
import '../app/globals.css';

export default function News() {
    return (
          <Grid>
            <Navigation/>
              <Container>

              <NewsBlock
              header="News & Events"
              />
              </Container>

            <Footer />
        
          </Grid>

    );
}
