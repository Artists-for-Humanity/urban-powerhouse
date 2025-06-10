export default {
  name: "ourStoryPage",
  title: "Our Story",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "blocks",
      title: "Content Blocks",
      type: "array",
      of: [
        { 
          type: "object",
          fields: [
            { name: "blockType", title: "Block Type", type: "string", options: { list: [
              { title: "Title", value: "title" },
              { title: "Paragraph", value: "paragraph" },
              { title: "Bullet Points", value: "bullet-points" },
              { title: "Center Image", value: "center-image" },
              { title: "Side by Side Images", value: "side-by-side-images" }
            ]}},
            { name: "title", title: "Title", type: "string", hidden: ({ parent }: { parent?: any }) => parent?.blockType !== "title" },
            { name: "paragraphs", title: "Paragraphs", type: "array", of: [{ type: "text" }], hidden: ({ parent }: { parent?: any }) => parent?.blockType !== "paragraph" && parent?.blockType !== "bullet-points" },
            { name: "image", title: "Image", type: "image", hidden: ({ parent }: { parent?: any }) => parent?.blockType !== "center-image" },
            { name: "images", title: "Images", type: "array", of: [{ type: "image" }], hidden: ({ parent }: { parent?: any }) => parent?.blockType !== "side-by-side-images" },
          ],
          preview: {
            select: {
              blockType: 'blockType',
              title: 'title',
              paragraphs: 'paragraphs',
              image: 'image',
              images: 'images',
            },
            prepare(selection: any) {
              const { blockType, title, paragraphs, image, images } = selection;
              let blockTitle = '';
              switch (blockType) {
                case 'title':
                  blockTitle = `Title: ${title || '(no title)'}`;
                  break;
                case 'paragraph':
                  blockTitle = `Paragraph: ${paragraphs && paragraphs.length ? paragraphs[0].substring(0, 30) + '...' : ''}`;
                  break;
                case 'bullet-points':
                  blockTitle = `Bullet Points: ${paragraphs && paragraphs.length ? paragraphs[0].substring(0, 30) + '...' : ''}`;
                  break;
                case 'center-image':
                  blockTitle = 'Center Image';
                  break;
                case 'side-by-side-images':
                  blockTitle = 'Side by Side Images';
                  break;
                default:
                  blockTitle = blockType || 'Block';
              }
              return {
                title: blockTitle,
                media: image || (images && images[0]),
              };
            },
          },
        }
      ]
    }
  ]
}