import { defineType } from 'sanity'

export default defineType({
  name: 'articleBlock',
  title: 'Article Block',
  type: 'object',
  fields: [
    {
      name: 'blockType',
      title: 'Block Type',
      type: 'string',
      options: {
        list: [
          { title: 'Title', value: 'title' },
          { title: 'Paragraph', value: 'paragraph' },
          { title: 'Quote', value: 'quote' },
          { title: 'Image Description', value: 'image-description' },
          { title: 'Center Image', value: 'center-image' },
          { title: 'Side by Side Images', value: 'side-by-side-images' },
          { title: 'Bullet Points', value: 'bullet-points' },
          { title: 'Go Back', value: 'go-back' },
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: ({ parent }) => parent?.blockType !== 'title',
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      hidden: ({ parent }) =>
        !['paragraph', 'bullet-points'].includes(parent?.blockType),
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      hidden: ({ parent }) => parent?.blockType !== 'quote',
    },
    {
      name: 'cite',
      title: 'Cite',
      type: 'string',
      hidden: ({ parent }) => parent?.blockType !== 'quote',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      hidden: ({ parent }) =>
        !['image-description', 'center-image'].includes(parent?.blockType),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({ parent }) =>
        !['image', 'image-description', 'center-image'].includes(parent?.blockType),
    },
    {
      name: 'imageSrcs',
      title: 'Side by Side Images',
      type: 'array',
      of: [{ type: 'image' }],
      hidden: ({ parent }) => parent?.blockType !== 'side-by-side-images',
      validation: Rule => Rule.max(2).min(2).error('You must add exactly two images.'),
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      options: { accept: 'video/*' },
      hidden: ({ parent }) => parent?.blockType !== 'video',
    },
  ],
   preview: {
    select: {
      blockType: 'blockType',
      title: 'title',
      description: 'description',
      quote: 'quote',
      image: 'image',
    },
    prepare(selection) {
      const { blockType, title, description, quote, image } = selection;
      let blockTitle = '';
      switch (blockType) {
        case 'title':
          blockTitle = `Title: ${title || '(no title)'}`;
          break;
        case 'paragraph':
          blockTitle = 'Paragraph';
          break;
        case 'quote':
          blockTitle = `Quote: ${quote ? quote.substring(0, 30) + '...' : ''}`;
          break;
        case 'image-description':
          blockTitle = `Image + Description: ${description ? description.substring(0, 30) + '...' : ''}`;
          break;
        case 'center-image':
          blockTitle = 'Center Image';
          break;
        case 'side-by-side-images':
          blockTitle = 'Side by Side Images';
          break;
        case 'bullet-points':
          blockTitle = 'Bullet Points';
          break;
        case 'go-back':
          blockTitle = 'Go Back Button';
          break;
        case 'image':
          blockTitle = 'Image';
          break;
        case 'video':
          blockTitle = 'Video';
          break;
        default:
          blockTitle = blockType || 'Block';
      }
      return {
        title: blockTitle,
        media: image,
      };
    },
  },
})