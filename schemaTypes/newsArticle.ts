const newsArticleSchema = {
  name: 'newsArticle',
  title: 'News Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.required(),
      description: 'The main title for the News & Events page',
    },
    {
      name: 'articles',
      title: 'News Articles',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'newsItem',
          title: 'News Item',
          fields: [
            {
              name: 'title',
              title: 'Article Title',
              type: 'string',
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'paragraphs',
              title: 'Paragraphs',
              type: 'array',
              of: [{type: 'text'}],
              description: 'Brief description or excerpt for the news item',
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
          preview: {
            select: {
              title: 'title',
              pinned: 'pinned',
            },
            prepare(selection: { title: string; pinned: boolean }) {
              const { title, pinned } = selection;
              return {
                title: title,
                subtitle: pinned ? 'Pinned' : 'Regular',
              };
            },
          },
        },
      ],
      options: {
        sortable: true,
      },
      description: 'Add and reorder news articles. Items can be dragged and dropped to change their order.',
    },
  ],
};

export default newsArticleSchema;