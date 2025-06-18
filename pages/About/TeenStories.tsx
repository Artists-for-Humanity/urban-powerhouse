"use client";
import React, { useEffect, useState } from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import NewsBlock from "../../components/News/NewsBlock";
import { client } from "../../lib/sanity";
import '../../app/globals.css';

interface TeenStory {
  title: string;
  paragraphs: string[];
  link: string;
  variant: "pinned" | "title-only";
}

interface SanityTeenStory {
  title: string;
  paragraphs: string[];
  pinned?: boolean;
  link?: {
    slug?: {
      current: string;
    };
  };
}

export default function TeenStories() {
  const [stories, setStories] = useState<TeenStory[]>([]);

  useEffect(() => {
    client.fetch<SanityTeenStory[]>(
      `*[_type == "teenStories"] | order(pinned desc, _createdAt desc){
        title,
        paragraphs,
        pinned,
        link->{slug}
      }`
    ).then((data) => {
      setStories(
        data.map((item) => ({
          title: item.title,
          paragraphs: item.paragraphs || [],
          link: item.link?.slug?.current ? `/News/${item.link.slug.current}` : "#",
          variant: item.pinned ? "pinned" : "title-only",
        }))
      );
    });
  }, []);

  return (
    <Grid>
      <Navigation />
      <Container>
        <NewsBlock header="Teen Stories" articles={stories} />
      </Container>
      <Footer />
    </Grid>
  );
}

