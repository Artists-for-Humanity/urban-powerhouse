"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "../../lib/sanity";
// import Image from "next/image";
import Grid from "../../components/GridContainer";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import ArticleBlock from "../../components/News/ArticleBlock";
import '../../app/globals.css';

type ArticleBlockVariant =
  | "title"
  | "paragraph"
  | "quote"
  | "image-description"
  | "center-image"
  | "side-by-side-images"
  | "bullet-points"
  | "go-back";

interface ArticleBlockData {
  blockType: ArticleBlockVariant;
  title?: string;
  paragraphs?: string[];
  quote?: string;
  cite?: string;
  description?: string;
  image?: { asset: { url: string } };
  imageSrcs?: { asset: { url: string } }[];
  video?: { asset: { url: string } };
}

export default function ArticlePage() {
  const params = useParams();
  const slug = params && typeof params.slug === "string"
    ? params.slug
    : Array.isArray(params?.slug)
    ? params?.slug[0]
    : undefined;
const [article, setArticle] = useState<{ title: string; blocks: ArticleBlockData[] } | null>(null);

    useEffect(() => {
    if (!slug) return;
    client
        .fetch(
        `*[_type == "article" && slug.current == $slug][0]{
            title,
            blocks[]{
            blockType,
            title,
            paragraphs,
            quote,
            cite,
            description,
            image{asset->{url}},
            imageSrcs[]{asset->{url}},
            video{asset->{url}}
            }
        }`,
        { slug }
        )
        .then(setArticle);
    }, [slug]);

  if (!article) return <div>Loading...</div>;

return (
  <div>
      <Grid>
            <Navigation/>
              <Container className="">
    {/* {article.blocks?.map((block, i) => {
      switch (block.blockType) {
        case "title":
          return <h2 key={i}>{block.title}</h2>;
        case "paragraph":
          return block.paragraphs?.map((p: string, j: number) => (
            <p key={`${i}-p-${j}`}>{p}</p>
          ));
        case "bullet-points":
          return (
            <ul key={i}>
              {block.paragraphs?.map((p: string, j: number) => (
                <li key={`${i}-bp-${j}`}>{p}</li>
              ))}
            </ul>
          );
        case "quote":
          return (
            <blockquote key={i}>
              {block.quote}
              {block.cite && <footer>— {block.cite}</footer>}
            </blockquote>
          );
       case "image":
      return block.image?.asset?.url ? (
        <Image
          key={i}
          src={block.image.asset.url}
          alt={block.description || ""}
          width={800}
          height={600}
          style={{ width: "100%", height: "auto" }}
        />
      ) : null;
    case "image-description":
      return (
        <figure key={i}>
          {block.image?.asset?.url && (
            <Image
              src={block.image.asset.url}
              alt={block.description || ""}
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          )}
          {block.description && <figcaption>{block.description}</figcaption>}
        </figure>
      );
    case "center-image":
      return (
        <figure key={i} style={{ textAlign: "center" }}>
          {block.image?.asset?.url && (
            <Image
              src={block.image.asset.url}
              alt={block.description || ""}
              width={800}
              height={600}
              style={{ display: "inline-block" }}
            />
          )}
          {block.description && <figcaption>{block.description}</figcaption>}
        </figure>
      );
    case "side-by-side-images":
      return (
        <div key={i} style={{ display: "flex", gap: 16 }}>
          {block.imageSrcs?.map((img, j) =>
            img.asset?.url ? (
              <Image
                key={j}
                src={img.asset.url}
                alt=""
                width={400}
                height={300}
                style={{ flex: 1 }}
              />
            ) : null
          )}
        </div>
      );
        case "video":
          return block.video?.asset?.url ? (
            <video key={i} controls style={{ maxWidth: "100%" }}>
              <source src={block.video.asset.url} />
            </video>
          ) : null;
        case "go-back":
          return (
            <button key={i} onClick={() => window.history.back()}>
              Go Back
            </button>
          );
        default:
          return null;
      }
    })} */}
        {article.blocks?.map((block, i) => (
        <ArticleBlock
            key={i}
            variant={block.blockType}
            title={block.title}
            paragraphs={block.paragraphs}
            quote={block.quote}
            cite={block.cite}
            imageSrc={block.image?.asset?.url}
            imageSrcs={block.imageSrcs?.map(img => img.asset.url)}
            description={block.description}
            videoSrc={block.video?.asset?.url}
        />
        ))}
        </Container>
        <Footer/>
        </Grid>
  </div>
);
}