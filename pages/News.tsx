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

  // const articles: Article[] = [
  //   {
  //     title: "May 4th, 2024 Star Wars Fans Go Wild. Hide ur troopers.",

  //     paragraphs: [
  //       "Urban PowerHouse is proud to be a Summer 2024 SuccessLink Employment partner with the City of Boston.",
  //       "The Office of Youth Employment and Opportunity is supporting Boston-area 501(c)(3) nonprofits interested in providing funding for employment opportunities to youth participants between the ages of 14-18, and young adults between the ages of 19-24.",
  //       "We are looking forward to employing 11 youth workers and 1 young adult worker this summer. Interested applicants should complete this google form. Urban PowerHouse will reach out to candidates of interest to schedule an in-person or virtual interview.",
  //     ],
  //     link: "/Article",
  //     variant: "pinned",
  //   },
  //   {
  //     title: "April 1st, 2024 City of Boston SuccessLink Program (Luke won't give me his b-day)",
  //     paragraphs: [
  //       "Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi.. Faucibus eget quis pharetra quis metus enim imperdiet scelerisque sagittis...",
  //       "In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. Dictum phasellus fringilla massa sed viverra libero vitae nulla.. Dictum viverra sed pretium enim sollicitudin lorem in enim a.. Tortor quam vel tristique vestibulum mi accumsan odio faucibus aliquam.. Lorem nisl ut cras faucibus massa diam vitae consequat egestas.. Et nec ut cursus sit facilisi lobortis congue bibendum.. Amet et orci arcu id..",
  //     ],
  //     link: "/Article",
  //     variant: "title-only", 
  //   },
  //   {
  //     title: "October 11th, 2003 A star was born..",
  //     paragraphs: [
  //       "Lorem ipsum dolor sit amet consectetur. Vel posuere tristique sed diam. Cursus urna in in odio vulputate.. Lorem elementum eget nunc risus sed at mauris sit.. Integer in tortor volutpat dui. Id eget cras euismod sit nulla morbi etiam.. Ut pellentesque nibh quam vitae ut mi sed sem.. Placerat tincidunt varius at felis congue imperdiet.. Enim a elit risus amet tortor facilisi.. ",
  //       "In neque mauris nunc eros mauris in congue sit.. Mauris id cras nunc adipiscing mauris ut eu dignissim elementum.. Scelerisque donec turpis ut arcu egestas ac rhoncus sed sit.. Posuere enim eget mauris et eu dui magna.. Quam consectetur sem eget ultrices donec risus velit sodales.. Cras integer iaculis gravida morbi aliquam eget senectus viverra.. ",
  //     ],
  //     link: "/Article",
  //     variant: "title-only", 
  //   },
  // ];
  const articles: Article[] = [
    {
      title: "Urban PowerHouse Named 2025 Zakim Fund Grantee",
      paragraphs: [
        "Urban PowerHouse is proud to have been named a 2025 Grantee Partner of The Lenny Zakim Fund. The Lenny Zakim Fund works to develop deep relationships and builds bridges among people and communities to advance social, economic, and racial justice.",
        "“We are honored to be a part of the Zakim Fund portfolio and look forward to the unique opportunities for partnership, collaboration, and learning that are to come. The Zakim Fund supports fantastic organizations doing impactful work in our communities, and we are so grateful to work alongside these changemakers.” — Joseph Stephen, Executive Director & Co-Founder"
      ],
      link: "/Articles/ZakimFund",
      variant: "pinned"
    },
    {
      title: "2025 Sports Grant + Employment Partnership Secured",
      paragraphs: [
        "Urban PowerHouse also received a 2025 Let’s Play Boston Sports Grant from the City of Boston, and was selected as a 2025 - 2026 employment partner by the City of Boston’s Office of Youth Employment and Opportunity. UPH is utilizing these funds to expand their programs for youth members, age 14 to 18, including their workforce development program.",
        "“The City of Boston has become one of our strongest partners. We are honored that the City has been able to get behind our mission and offer concrete supports to help us broaden our impact.” — Laurie Maranian, Co-Founder"
      ],
      link: "/Article",
      variant: "title-only"
    },
    {
      title: "Artists for Humanity Taps UPH for Web Redesign",
      paragraphs: [
        "Urban PowerHouse is honored to have been selected by Artists for Humanity in early 2025 for a pro bono website redesign project. Artists For Humanity (AFH) harnesses the power of mentorship and paid professional experiences to inspire teens to build their future. We are proud to work alongside such a strong organization that puts youth in the driver’s seat.",
        "The partnership will continue as we link the Urban PowerHouse youth with the Artists for Humanity youth to create video and photo assets to help advance the strategic growth of the organization."
      ],
      link: "/Article",
      variant: "title-only"
    },
    {
      title: "Black Boston Lifts Hosts First Meetup at UPH",
      paragraphs: [
        "In March of 2025 Black Boston Lifts hosted their first social meet-up and lift at Urban PowerHouse. Part of our original vision for Urban PowerHouse was to create a welcoming community where people from all walks of life - people of color, women, people who identify as LGBTQIA - feel welcome and supported.",
        "We are more than just a gym. It was tremendous to be the host site for the first Black Boston Lifts event. There is a lot of synergy with our missions and goals and we look forward to more events and collaboration in the future."
      ],
      link: "/Article",
      variant: "title-only"
    },
    {
      title: "UPH Powerlifters Shine in Spring 2025 Nationals",
      paragraphs: [
        "Spring 2025 brought many opportunities for Urban PowerHouse athletes and members to compete.",
        "UPH Athlete Avery Covitz competed at USAPL High School Nationals for her 4th and final year as a high school student, bringing home the bronze medal in her weight class. Avery holds multiple Massachusetts state records in the squat for various age and weight classes.",
        "UPH Member and youth worker Kyle Kim took to the platform for USAPL Collegiate Nationals in his debut performance as a college athlete.",
        "UPH staff member Chris Uhunmwuagho traveled to Georgia for Powerlifting America University Nationals and podiumed, placing 4th.",
        "Rachelle Alexandre plans to compete at her first powerlifting meet, USAPL Ladies of Iron, when she will be just 8 months postpartum and is using the platform to show women everywhere that a healthy pregnancy, healthy motherhood, and training for strength can all go together!"
      ],
      link: "/Article",
      variant: "title-only"
    }
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
