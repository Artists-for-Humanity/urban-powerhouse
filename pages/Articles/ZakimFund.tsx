"use client";
import React from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import ArticleBlock from "../../components/News/ArticleBlock";
import '../../app/globals.css';



export default function ZakimFund() {

    return (
          <Grid>
            <Navigation/>
              <Container className="">
              <h1 className="text-[32px] font-semibold col-span-full mb-[40px] ">News & Events</h1>
              <ArticleBlock variant="title" title="UPH Named 2025 Grantee Partner by The Lenny Zakim Fund" />
            <ArticleBlock
            variant="paragraph"
            paragraphs={[
                "Urban PowerHouse is proud to have been named a 2025 Grantee Partner of The Lenny Zakim Fund. The Lenny Zakim Fund works to develop deep relationships and builds bridges among people and communities to advance social, economic, and racial justice.",
            ]}
            />
            <ArticleBlock
            variant="quote"
            quote="We are honored to be a part of the Zakim Fund portfolio and look forward to the unique opportunities for partnership, collaboration, and learning that are to come. The Zakim Fund supports fantastic organizations doing impactful work in our communities, and we are so grateful to work alongside these changemakers."
            cite="Joseph Stephen, Executive Director & Co-Founder"

            />
            <ArticleBlock variant="go-back" />
              </Container>
            <Footer />
          </Grid>

    );
}
