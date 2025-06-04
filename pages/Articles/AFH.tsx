"use client";
import React from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import ArticleBlock from "../../components/News/ArticleBlock";
import '../../app/globals.css';



export default function AFH() {

    return (
          <Grid>
            <Navigation/>
              <Container className="">
              <h1 className="text-[32px] font-semibold col-span-full mb-[40px] ">News & Events</h1>
              <ArticleBlock variant="title" title="Artists for Humanity Partners with UPH for Youth-Led Website Redesign" />
            <ArticleBlock
            variant="paragraph"
            paragraphs={[
                "Urban PowerHouse is honored to have been selected by Artists for Humanity in early 2025 for a pro bono website redesign project. Artists For Humanity (AFH) harnesses the power of mentorship and paid professional experiences to inspire teens to build their future. We are proud to work alongside such a strong organization that puts youth in the driver’s seat.",
                "The partnership will continue as we link the Urban PowerHouse youth with the Artists for Humanity youth to create video and photo assets to help advance the strategic growth of the organization."
            ]}
            />
            <ArticleBlock variant="go-back" />
              </Container>
            <Footer />
          </Grid>

    );
}
