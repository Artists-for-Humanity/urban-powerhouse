export default {
  name: 'homepageImageBlock',
  title: 'Homepage Image Block',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Block Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: {
        sortable: true, // Allows drag-and-drop reordering in Studio
      },
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(1),
      description: 'Select and reorder images for the homepage block.',
    },
  ],
}