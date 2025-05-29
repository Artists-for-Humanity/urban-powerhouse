export default {
  name: 'homepageImageBlock',
  title: 'Home Page',
  type: 'document',
  fields: [
     {
      name: 'key',
      title: 'Block Key',
      type: 'string',
      description: 'A unique key for this block (e.g. "our-gym", "equipment"). Use this to reference the block in code.',
      validation: (Rule: { required: () => any; }) => Rule.required(),
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
        ],
        layout: 'radio',
      },
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { sortable: true },
      hidden: ({ parent }) => parent?.blockType !== 'images',
      validation: Rule => Rule.custom((value, context) => {
        if (context.parent?.blockType === 'images' && (!value || value.length < 1)) {
          return 'At least one image is required';
        }
        return true;
      }),
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
            { name: 'image', title: 'Logo', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
            { name: 'link', title: 'Link', type: 'url', validation: Rule => Rule.required() },
          ],
        },
      ],
      hidden: ({ parent }) => parent?.blockType !== 'partners',
      validation: Rule => Rule.custom((value, context) => {
        if (context.parent?.blockType === 'partners' && (!value || value.length < 1)) {
          return 'At least one partner is required';
        }
        return true;
      }),
      description: 'Add partner logos and links.',
    },
  ],
}