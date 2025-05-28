export default {
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{type: 'text'}],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'pinned',
      title: 'Pinned',
      type: 'boolean',
      description: 'Check to pin this article to the top',
      initialValue: false,
    },
  ],
}