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
              <ArticleBlock variant="title" title="UPH Secures City of Boston Grants to Expand Youth Workforce Programs" />
            <ArticleBlock
            variant="paragraph"
            paragraphs={[
                "Urban PowerHouse also received a 2025 Let’s Play Boston Sports Grant from the City of Boston, and was selected as a 2025 - 2026 employment partner by the City of Boston’s Office of Youth Employment and Opportunity. UPH is utilizing these funds to expand their programs for youth members, age 14 to 18, including their workforce development program.",
            ]}
            />
            <ArticleBlock
            variant="quote"
            quote="The City of Boston has become one of our strongest partners. We are honored that the City has been able to get behind our mission and offer concrete supports to help us broaden our impact."
            cite=" Laurie Maranian, Co-Founder"

            />
            <ArticleBlock variant="go-back" />
              </Container>
            <Footer />
          </Grid>

    );
}
