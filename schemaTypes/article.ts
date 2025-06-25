import { defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [{ type: 'articleBlock' }],
    },
  ],
})