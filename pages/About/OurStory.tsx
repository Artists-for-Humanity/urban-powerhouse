"use client";
import React from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import ArticleBlock from "../../components/News/ArticleBlock";
import '../../app/globals.css';

export default function AboutArticle() {
  return (
    <Grid>
      <Navigation />
      <Container className="">
        <h1 className="text-[32px] font-semibold col-span-full mb-[40px]">News & Events</h1>

        <ArticleBlock variant="title" title="About Urban PowerHouse" />

        <ArticleBlock
          variant="paragraph"
          paragraphs={[
            "Urban PowerHouse is an organization bringing empowerment and self-growth to those in Boston’s urban centers through strength & power sports.",
            "Our mission is to get a barbell into the hands of individuals of color living in and around Boston, reduce risk factors for chronic metabolic diseases through data-driven movement, and create an inclusive community representative of those we seek to serve."
          ]}
        />

        <ArticleBlock
          variant="bullet-points"
          paragraphs={[
            "High quality coaching, training, and competition opportunities in powerlifting and weightlifting",
            "Nutrition education",
            "A unique, affordable environment where people of all socioeconomic and ethnic backgrounds are training and learning together",
            "Accessible opportunities for physical activity, social support, and resources to realize the benefits of strength sports"
          ]}
        />

        <ArticleBlock
          variant="paragraph"
          paragraphs={[
            "We see our coached athletes 3-4 times per week for 1.5–2 hours of supervised training. If they train independently, we provide feedback via video submissions and video conferencing.",
            "Progress is tracked using Google Sheets that showcase strength changes over time."
          ]}
        />

   

        <ArticleBlock
          variant="paragraph"
          paragraphs={[
            "Individuals also receive nutrition coaching tailored to their goals, including choosing supportive foods, establishing sustainable habits, and setting macronutrient targets for competitive athletes."
          ]}
        />

        <ArticleBlock
          variant="title"
          title="Our History"
        />

 
                 <ArticleBlock
          variant="center-image"
          imageSrc="/humbleBeginnings/VeryFirstPod.jpg"
        />

        <ArticleBlock
          variant="paragraph"
          paragraphs={[
            "In March 2020, when COVID shut down the commercial gym we trained in, we moved into a 250 sq. ft. storage space with our 7 athletes.",
          ]}
        />
                         <ArticleBlock
            variant="side-by-side-images"
            imageSrcs={['/humbleBeginnings/MoveintoCurrentSpace.jpg', '/humbleBeginnings/MoveintoCurrentSpace2.jpg']}
            />
                    <ArticleBlock
          variant="paragraph"
          paragraphs={[
            "The demand for our programming grew, and by May 2021, we relocated to a 3,000 sq. ft. facility in Hyde Park. We've been focused on strategic impact ever since."
          ]}
        />

        <ArticleBlock
          variant="title"
          title="Our Why"
        />

        <ArticleBlock
          variant="paragraph"
          paragraphs={[
            "We are focused on the physical, mental, and social wellness of low-to-moderate income individuals of color in Boston. Our goal is to provide a supportive outlet for these individuals to work toward their goals.",
            "Through competing and traveling for strength sports, we’ve seen firsthand that diversity is lacking in the field. Urban PowerHouse exists to expand access to strength sports for people of color and those with limited financial means."
          ]}
        />

        <ArticleBlock
          variant="center-image"
          imageSrc="/humbleBeginnings/MockMeetFundraiserPodDays.jpg"
        />

      </Container>
      <Footer />
    </Grid>
  );
}
