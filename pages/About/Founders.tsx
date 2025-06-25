"use client";
import React, { useEffect, useState } from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import '../../app/globals.css';
import Leadership from "../../components/Leadership";
import { client } from "../../lib/sanity";


interface Founder {
  name: string;
  bio: string;
  image: { asset: { url: string } };
}

interface FoundersPageData {
  title: string;
  subtitle?: string;
  founders: Founder[];
}

export default function Founders() {

const [data, setData] = useState<FoundersPageData | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "foundersPage"][0]{
          title,
          founders[]{
            image{asset->{url}},
            name,
            bio,
       
     
          }
        }`
      )
      .then((res: FoundersPageData) => setData(res));
  }, []);

 if (!data) return null;

    return (
          <Grid>
            <Navigation/>
              <Container>
                  <h1 className="text-[32px] font-semibold col-span-full ">
          {data.title || "Meet the Founders"}
        </h1>
      
        {data.founders.map((founder, idx) => (
          <Leadership
            key={idx}
            imageSrc={founder.image?.asset?.url || ""}
            name={founder.name}
            description={founder.bio.split('\n')}
          />
        ))}
          
              </Container>
            <Footer />
          </Grid>

    );
}
