export default {
  name: 'newsArticle',
  title: 'News Page',
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
      validation: (Rule: { custom: (arg0: (value: any, context: any) => Promise<true | "Only one article can be pinned at a time.">) => any; }) =>
  Rule.custom(async (value, context) => {
    if (!value) return true;
    const client = context.getClient({apiVersion: '2023-01-01'});
    const id = context.document._id.replace(/^drafts\./, '');
    const count = await client.fetch(
      `count(*[_type == "newsArticle" && pinned == true && _id != $id && _id != "drafts." + $id])`,
      {id}
    );
    return count === 0 ? true : 'Only one article can be pinned at a time.';
  }),
    },
  ],
}