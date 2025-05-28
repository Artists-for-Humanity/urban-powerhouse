export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: { required: () => any; }) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: { required: () => any; }) => Rule.required() },
    // Add more fields as needed (body, images, etc.)
  ],
}