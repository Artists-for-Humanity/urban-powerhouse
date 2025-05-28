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
      title: 'Link to Article',
      type: 'reference',
      to: [{ type: 'article' }],
      description: 'Select the article this news item links to. If it does not exist, create a new Article first.',
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