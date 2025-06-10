"use client";
import React, { useEffect, useState } from "react";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import ArticleBlock from "../../components/News/ArticleBlock";
import '../../app/globals.css';
import { client } from "../../lib/sanity";

interface OurStoryBlock {
  blockType: string;
  title?: string;
  paragraphs?: string[];
  image?: { asset: { url: string } };
  images?: { asset: { url: string } }[];
}

interface OurStoryPageData {
  title: string;
  blocks: OurStoryBlock[];
}

export default function AboutArticle() {
  const [data, setData] = useState<OurStoryPageData | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "ourStoryPage"][0]{
          title,
          blocks[]{
            blockType,
            title,
            paragraphs,
            image{asset->{url}},
            images[]{asset->{url}}
          }
        }`
      )
      .then((res: OurStoryPageData) => setData(res));
  }, []);

 if (!data) return null;

  return (
    <Grid>
      <Navigation />
      <Container className="">
         <h1 className="text-[32px] font-semibold col-span-full mb-[40px]">{data.title}</h1>
        {data.blocks.map((block, idx) => {
          switch (block.blockType) {
            case "title":
              return <ArticleBlock key={idx} variant="title" title={block.title || ""} />;
            case "paragraph":
              return <ArticleBlock key={idx} variant="paragraph" paragraphs={block.paragraphs || []} />;
            case "bullet-points":
              return <ArticleBlock key={idx} variant="bullet-points" paragraphs={block.paragraphs || []} />;
            case "center-image":
              return <ArticleBlock key={idx} variant="center-image" imageSrc={block.image?.asset.url || ""} />;
            case "side-by-side-images":
              return <ArticleBlock key={idx} variant="side-by-side-images" imageSrcs={block.images?.map(img => img.asset.url) || []} />;
            default:
              return null;
          }
        })}

      </Container>
      <Footer />
    </Grid>
  );
}
