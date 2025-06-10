export default {
  name: "ourStoryPage",
  title: "Our Story",
  type: "document",

 fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "blocks",
      title: "Content Blocks",
      type: "array",
      of: [{ type: "articleBlock" }],
    }
  ]
}