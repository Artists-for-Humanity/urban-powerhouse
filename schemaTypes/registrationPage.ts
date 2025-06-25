import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'registrationPage',
  title: 'Registration Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Intro Text',
      type: 'text',
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'string',
    }),
  ],
})