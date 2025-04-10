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
      title: "May 4th, 2024 Star Wars Fans Go Wild. Hide ur troopers.",

      paragraphs: [
        "Urban PowerHouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.",
        "The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing funding for employment opportunities to youth participants between the ages of 14-18, and young adults between the ages of 19-24.",
        "We are looking forward to employing 11 youth workers and 1 young adult worker this summer. Interested applicants should complete this google form. Urban PowerHouse will reach out to candidates of interest to schedule an in-person or virtual interview.",
      ],
      link: "/",
      variant: "pinned",
    },
    {
      title: "April 1st, 2024 City of Boston SuccessLink Program (Luke won't give me his b-day)",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi.. Faucibus eget quis pharetra quis metus enim imperdiet scelerisque sagittis...",
        "In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. Dictum phasellus fringilla massa sed viverra libero vitae nulla.. Dictum viverra sed pretium enim sollicitudin lorem in enim a.. Tortor quam vel tristique vestibulum mi accumsan odio faucibus aliquam.. Lorem nisl ut cras faucibus massa diam vitae consequat egestas.. Et nec ut cursus sit facilisi lobortis congue bibendum.. Amet et orci arcu id..",
      ],
      link: "/",
      variant: "title-only", 
    },
    {
      title: "October 11th, 2003 A star was born..",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi.. ",
        "In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. ",
      ],
      link: "/",
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
