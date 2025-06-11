import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'donationPage',
  title: 'Donation Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'textBlock',
      title: 'Intro Text Block',
      type: 'text',
    }),
    defineField({
      name: 'donationWeightsTitle',
      title: 'Donation Weights Title',
      type: 'string',
    }),
    defineField({
      name: 'donations',
      title: 'Donation Options',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'amount', title: 'Amount', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        }),
      ],
    }),

  ],
})