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

  const articles = [
    {
      title: "2024 City of Boston SuccessLink Program",
      paragraphs: [
        "Urban PowerHouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.",
        "The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing funding for employment opportunities to youth participants between the ages of 14-18, and young adults between the ages of 19-24.",
        "We are looking forward to employing 11 youth workers and 1 young adult worker this summer. Interested applicants should complete this google form. Urban PowerHouse will reach out to candidates of interest to schedule an in-person or virtual interview.",
      ],
      link: "/successlink",
    },
    {
      title: "2024 Lorem ipsum dolor sit amet consectetur. Gravida.",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate. Lorem elementum eget nunc risus sed at mauris sit.",
        "Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam. Ut pellentesque nibh quam vitae ut mi sed sem. Placerat tincidunt varius at felis congue imperdiet.",
      ],
      link: "/lorem-ipsum",
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
