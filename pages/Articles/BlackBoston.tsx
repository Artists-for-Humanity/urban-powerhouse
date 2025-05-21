"use client";
import React from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import ArticleBlock from "../../components/News/ArticleBlock";
import '../../app/globals.css';



export default function News() {

    return (
          <Grid>
            <Navigation/>
              <Container className="">
              <h1 className="text-[32px] font-semibold col-span-full mb-[40px] ">News & Events</h1>
              <ArticleBlock variant="title" title="UPH Hosts Inaugural Black Boston Lifts Community Event" />
            <ArticleBlock
            variant="paragraph"
            paragraphs={[
                "In March of 2025 Black Boston Lifts hosted their first social meet-up and lift at Urban PowerHouse. Part of our original vision for Urban PowerHouse was to create a welcoming community where people from all walks of life - people of color, women, people who identify as LGBTQIA - feel welcome and supported. We are more than just a gym. It was tremendous to be the host site for the first Black Boston Lifts event. There is a lot of synergy with our missions and goals and we look forward to more events and collaboration in the future.",
            ]}
            />
                                     <ArticleBlock
            variant="side-by-side-images"
            imageSrcs={['/blackBoston/P1040575.jpg', '/blackBoston/P1040529.jpg']}
            />
                                     <ArticleBlock
            variant="side-by-side-images"
            imageSrcs={['/blackBoston/P1040527.jpg', '/blackBoston/P1040569.jpg']}
            />
            <ArticleBlock variant="go-back" />
              </Container>
            <Footer />
          </Grid>

    );
}
