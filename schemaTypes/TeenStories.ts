import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teenStories',
  title: 'Teen Stories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'link',
      title: 'Link to Article',
      type: 'reference',
      to: [{ type: 'article' }],
      description: 'Select the article this story links to.',
    }),
    defineField({
      name: 'pinned',
      title: 'Pinned',
      type: 'boolean',
      description: 'Check to pin this teen story to the top.',
      initialValue: false,
      validation: (Rule) =>
        Rule.custom(async (value, context) => {
          if (!value) return true
          const client = context.getClient({ apiVersion: '2023-01-01' })
          const id = context.document._id.replace(/^drafts\./, '')
          const count = await client.fetch(
            `count(*[_type == "teenStories" && pinned == true && _id != $id && _id != "drafts." + $id])`,
            { id }
          )
          return count === 0 ? true : 'Only one story can be pinned at a time.'
        }),
    }),
  ],
})