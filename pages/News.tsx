"use client";
import React from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import NewsBlock from "../components/News/NewsBlock";
import '../app/globals.css';

interface Article {
  title: string;
  paragraphs: string[];
  link: string;
  variant: "pinned" | "title-only";
}

export default function News() {

  const articles: Article[] = [
    {
      title: "UPH Named 2025 Grantee Partner by The Lenny Zakim Fund",

      paragraphs: [
        "Urban PowerHouse is proud to have been named a 2025 Grantee Partner of The Lenny Zakim Fund. The Lenny Zakim Fund works to develop deep relationships and builds bridges among people and communities to advance social, economic, and racial justice.",
        "“We are honored to be a part of the Zakim Fund portfolio and look forward to the unique opportunities for partnership, collaboration, and learning that are to come. The Zakim Fund supports fantastic organizations doing impactful work in our communities, and we are so grateful to work alongside these changemakers.” Joseph Stephen, Executive Director & Co-Founder",
      ],
      link: "/Articles/ZakimFund",
      variant: "pinned",
    },
    {
      title: "UPH Secures City of Boston Grants to Expand Youth Workforce Programs",
      paragraphs: [],
      link: "/Articles/LetsPlay",
      variant: "title-only", 
    },
    {
      title: "Artists for Humanity Partners with UPH for Youth-Led Website Redesign",
      paragraphs: [],
      link: "/Articles/AFH",
      variant: "title-only", 
    },
    {
      title: "UPH Hosts Inaugural Black Boston Lifts Community Event",
      paragraphs: [],
      link: "/Articles/BlackBoston",
      variant: "title-only", 
    },
    {
      title: " Athletes Shine in Spring 2025 Powerlifting Competitions",
      paragraphs: [],
      link: "/Articles/Powerlifting",
      variant: "title-only", 
    },
  ];

    return (
          <Grid>
            <Navigation/>
              <Container>
               <NewsBlock header="News & Events" articles={articles} />
              </Container>
            <Footer />
          </Grid>

    );
}
