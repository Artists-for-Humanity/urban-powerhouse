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
  articles: Array<{
    title: string;
    paragraphs: string[];
    pinned?: boolean;
    link?: {
      slug?: {
        current: string;
      };
      paragraphs?: string[];
    };
  }>;
}

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageTitle, setPageTitle] = useState<string>("News & Events");

  useEffect(() => {
    client.fetch<SanityNewsArticle[]>(
      `*[_type == "newsArticle"]{
        title,
        articles[]{
          title,
          paragraphs,
          pinned,
          link->{
            slug,
            paragraphs[0..1]
          }
        }
      }`
    ).then((data) => {
      console.log("Sanity newsArticle fetch result:", data);
      
      if (data.length > 0) {
        const newsPage = data[0]; // Get the first (and likely only) news page document
        setPageTitle(newsPage.title || "News & Events");
        const sortedArticles = newsPage.articles || [];
        
        // Sort articles: pinned first, then by array order (which is the drag-and-drop order)
        const finalArticles = sortedArticles
          .map((item, index) => ({
            ...item,
            originalIndex: index
          }))
          .sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return a.originalIndex - b.originalIndex;
          });

        setArticles(
          finalArticles.map((item) => {
            console.log("item.link?.slug?.current:", item.link?.slug?.current);
            
            // For pinned articles, use the first 1-2 paragraphs from the linked article if available
            const displayParagraphs = item.pinned && item.link?.paragraphs?.length 
              ? item.link.paragraphs.slice(0, 2) 
              : item.paragraphs || [];
            
            return {
              title: item.title,
              paragraphs: displayParagraphs,
              link: item.link?.slug?.current ? `/News/${item.link.slug.current}` : "#",
              variant: item.pinned ? "pinned" : "title-only",
            };
          })
        );
      }
    });
  }, []);

  return (
    <Grid>
      <Navigation />
      <Container>
        <NewsBlock header={pageTitle} articles={articles} />
      </Container>
      <Footer />
    </Grid>
  );
}