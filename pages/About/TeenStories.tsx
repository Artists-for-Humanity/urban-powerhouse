"use client";
import React from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import ArticleBlock from "../../components/News/ArticleBlock";
import '../../app/globals.css';



export default function TeenStories() {

    return (
          <Grid>
            <Navigation/>
              <Container className="">
              <h1 className="text-[32px] font-semibold col-span-full mb-[40px] ">Teen Stories</h1>
              <ArticleBlock variant="title" title="Emmanuella Gustave-Paul" />
            <ArticleBlock
            variant="paragraph"
            paragraphs={[
                "Urban PowerHouse loves having Emmanuella Gustave-Paul as a part of the UPH community. Emmanuella started working with UPH in the summer of 2024 as a youth worker through UPH’s partnership with the Office of Youth Employment and Opportunity. She joined as a member around the same time, doing some of her powerlifting training with her Urban family, and continued on as a youth worker employee for the 2024 - 2025 school year.",
                "Emmanuella discovered powerlifting at Boston Latin School (BLS), where she joined the powerlifting team in 8th grade. Participating in the under 48 kilo weight class, Emmanuella is a very lightweight lifter, but her personality and strength are so much larger than her stature. Emmanuella loves lifting heavy weights and being a part of both her school team and the UPH strength community. SHe is the current record holder in the deadlift for her age and weight class both in Massachusetts and regionally.",
                "When she is not deadlifting 300 pounds or working at the gym, Emmanuella participates in BLS Big Band and BLS Pizzaz in the pit orchestra. She lives in Hyde Park with her parents, siblings, and pets, and loves that she can walk to a gym in her own neighborhood that welcomes other people who look like her."
            ]}
            />
            <ArticleBlock
            variant="center-image"
            imageSrc="/teenStory/Emmanuella/EmmanuellaLifting.JPG"
            description="Emmanuella Gustave-Paul, UPH Youth Worker and Powerlifter"
            />
             <ArticleBlock variant="title" title="Avery Covitz " />
            <ArticleBlock
            variant="paragraph"
            paragraphs={[
                "Almost as soon as Urban PowerHouse moved into our current facility space in Hyde Park, teen member Avery Covitz joined the team of coached athletes, along with her Dad, Dan.",
                "Avery, just a freshman, recalled attending CrossFit Kids’ classes where she wasn’t allowed to touch a barbell. She learned a lot, but she knew she was ready for more.",
                "Avery is now a high school graduate and she’s off to Rutgers in the fall where she has plans to continue her powerlifting career. In her four years working with Head Coach Joseph, Avery competed on the national stage 4 times. She’s a two-time silver medalist at USAPL Nationals and holds the squat record in Massachusetts in multiple age and weight classes. Squatting almost 300 pounds, this tiny power house is super strong!",
                "She’s also stronger on the inside, according to her parents:"
            ]}
            />
            
            <ArticleBlock
            variant="quote"
            quote="Urban PowerHouse is a place where Avery found her sport and skills she can utilize for the rest of her life. The people at Urban PowerHouse allowed her self-confidence to shine. From her first time through the door, UPH has been not just a gym but a community to grow as an individual and as an athlete for Avery."
            cite="Jessica Covitz, Avery’s Mom"
            />
                 <ArticleBlock
            variant="paragraph"
            paragraphs={[
              "Avery will spend her summer helping out in the gym at UPH with our teen and youth programming. She’ll continue to work on her coaching skills and give back to the community she cares for so much!"
            ]}
            />
                 <ArticleBlock
            variant="center-image"
            imageSrc="/teenStory/Avery/Avery+Joe.png"
            description="Avery Covitz with Head Coach Joseph Uhunmwuagho"
            />
              </Container>
            <Footer />
          </Grid>

    );
}
