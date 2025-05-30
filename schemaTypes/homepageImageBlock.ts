import { defineType } from 'sanity'
import type { Rule } from 'sanity'

export default defineType({
  name: 'homepageImageBlock',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'key',
      title: 'Block Key',
      type: 'string',
      description: 'A unique key for this block (e.g. "our-gym", "equipment"). Use this to reference the block in code.',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Block Title',
      type: 'string',
    },
    {
      name: 'blockType',
      title: 'Block Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image Gallery', value: 'images' },
          { title: 'Partners', value: 'partners' },
          { title: 'Quote', value: 'quote' },
          { title: 'Contact', value: 'contact' },
          { title: 'Hours', value: 'hours' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { sortable: true },
      hidden: ({ parent }: { parent?: any }) => parent?.blockType !== 'images',

      description: 'Select and reorder images for the homepage block.',
    },
    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Logo',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
    hidden: ({ parent }: { parent?: { blockType?: string } }) => parent?.blockType !== 'partners',


      description: 'Add partner logos and links.',
    },
     {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      hidden: ({ parent }) => parent?.blockType !== 'quote',
      description: 'The quote text.',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      hidden: ({ parent }) => parent?.blockType !== 'quote',
      description: 'The author of the quote.',
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      hidden: ({ parent }) => parent?.blockType !== 'quote',
      description: 'Image of the author.',
    },
     {
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string', validation: (Rule: Rule) => Rule.required() },
          { name: 'value', title: 'Value', type: 'string', validation: (Rule: Rule) => Rule.required() },
        ]
      }],
      hidden: ({ parent }) => parent?.blockType !== 'contact',
      description: 'Contact form fields'
    },
     {
      name: 'hours',
      title: 'Hours',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'day', title: 'Day', type: 'string', validation: (Rule: Rule) => Rule.required() },
          { name: 'hours', title: 'Hours', type: 'string', validation: (Rule: Rule) => Rule.required() },
        ]
      }],
      hidden: ({ parent }) => parent?.blockType !== 'hours',
      description: 'Operating hours'
    },
  ],
})
