import React, { useState, useEffect } from "react";
import Grid from "../components/GridContainer";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import NewsBlock from "../components/News/NewsBlock";
import '../app/globals.css';
import { client } from "../lib/sanity";

interface Article {
  title: string;
  paragraphs: string[];
  link: string;
  variant: "pinned" | "title-only";
}

interface SanityNewsArticle {
  title: string;
  paragraphs: string[];
  pinned?: boolean;
  link?: {
    slug?: {
      current: string;
    };
  };
}

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    client.fetch<SanityNewsArticle[]>(
      `*[_type == "newsArticle"] | order(pinned desc, _createdAt desc){
        title,
        paragraphs,
        pinned,
        link->{slug}
      }`
    ).then((data) => {
      console.log("Sanity newsArticle fetch result:", data);
      setArticles(
        data.map((item) => {
          console.log("item.link?.slug?.current:", item.link?.slug?.current);
          return {
            title: item.title,
            paragraphs: item.paragraphs || [],
            link: item.link?.slug?.current ? `/Articles/${item.link.slug.current}` : "#",
            variant: item.pinned ? "pinned" : "title-only",
          };
        })
      );
    });
  }, []);

  return (
    <Grid>
      <Navigation />
      <Container>
        <NewsBlock header="News & Events" articles={articles} />
      </Container>
      <Footer />
    </Grid>
  );
}