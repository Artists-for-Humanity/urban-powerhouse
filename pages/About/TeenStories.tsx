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
             <ArticleBlock variant="title" title="Emmanuella Gustave-Paul" />
            <ArticleBlock
            variant="paragraph"
            paragraphs={[
                "Urban PowerHouse loves having Emmanuella Gustave-Paul as a part of the UPH community. Emmanuella started working with UPH in the summer of 2024 as a youth worker through UPH’s partnership with the Office of Youth Employment and Opportunity. She joined as a member around the same time, doing some of her powerlifting training with her Urban family, and continued on as a youth worker employee for the 2024 - 2025 school year.",
                "Emmanuella discovered powerlifting at Boston Latin School (BLS), where she joined the powerlifting team in 8th grade. Participating in the under 48 kilo weight class, Emmanuella is a very lightweight lifter, but her personality and strength are so much larger than her stature. Emmanuella loves lifting heavy weights and being a part of both her school team and the UPH strength community. SHe is the current record holder in the deadlift for her age and weight class both in Massachusetts and regionally.",
                "When she is not deadlifting 300 pounds or working at the gym, Emmanuella participates in BLS Big Band and BLS Pizzaz in the pit orchestra. She lives in Hyde Park with her parents, siblings, and pets, and loves that she can walk to a gym in her own neighborhood that welcomes other people who look like her."
            ]}
            />
              </Container>
            <Footer />
          </Grid>

    );
}
