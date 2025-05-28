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
              <ArticleBlock variant="title" title="Athletes Shine in Spring 2025 Powerlifting Competitions" />
            <ArticleBlock
            variant="paragraph"
            paragraphs={[
                "Spring 2025 brought many opportunities for Urban PowerHouse athletes and members to compete.",
            ]}
            />
             <ArticleBlock
        variant="bullet-points"
        paragraphs={[
          'UPH Athlete Avery Covitz competed at USAPL High School Nationals for her 4th and final year as a high school student, bringing home the bronze medal in her weight class. Avery holds multiple Massachusetts state records in the squat for various age and weight classes.',
          'UPH Member and youth worker Kyle Kim took to the platform for USAPL Collegiate Nationals in his debut performance as a college athlete',
        ]}
      />
            <ArticleBlock
            variant="side-by-side-images"
            imageSrcs={['/gymshots/USAPLHighSchoolNationals.jpg', '/gymshots/USAPLHighSchoolNationals2.jpg']}
            />

                   <ArticleBlock
        variant="bullet-points"
        paragraphs={[
          'UPH staff member Chris Uhunmwuagho traveled to Georgia for Powerlifting America University Nationals and podiumed, placing 4th',
          'Rachelle Alexandre plans to compete at her first powerlifting meet, USAPL Ladies of Iron, when she will be just 8 months postpartum and is using the platform to show women everywhere that a healthy pregnancy, healthy motherhood, and training for strength can all go together!'
        ]}
      />

            <ArticleBlock variant="center-image" imageSrc="/gymshots/IMG_4282.png"></ArticleBlock>
            <ArticleBlock variant="go-back" />
              </Container>
            <Footer />
          </Grid>

    );
}
