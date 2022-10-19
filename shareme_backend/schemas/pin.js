export default {
  name: "pin",
  type: "document",
  title: "Pin",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "about",
      type: "string",
      title: "About",
    },
    {
      name: "destination",
      type: "url",
      title: "Destination",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "image",
      type: "url",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "userId",
      type: "string",
      title: "User ID",
    },
    {
      name: "postedBy",
      type: "postedBy",
      title: "PostedBy",
    },
    {
      name: "save",
      type: "array",
      title: "Save",
      of: [{ type: "save" }],
    },
    {
      name: "comments",
      type: "array",
      title: "Comments",
      of: [{ type: "comment" }],
    },
  ],
};
