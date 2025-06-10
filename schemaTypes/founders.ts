export default {
  name: "foundersPage",
  title: "Founders Page",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    {
      name: "founders",
      title: "Founders",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", title: "Image", type: "image" },
            { name: "name", title: "Name", type: "string" },
            { name: "bio", title: "Bio", type: "text" },
           
          ],
        },
      ],
    },
  ],
};