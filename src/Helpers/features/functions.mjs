//write the discription of functions here
//example description

const functionDescription = [
  {
    name: "getNotes",
    description:
      "gives path of notes use path and call main ",
  },
  {
    name: "main",
    description:
      "takes path of doc and gives text back",
    parameters: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "path of doc to be read",
        }
        },

      },
      required: ["path"],
    },
    {
      name: "getResources",
      description:
        "gives give resources with link ",
    },
    {
      name: "getPosts",
      description:
        "gives posts ",
    },
  
];

export { functionDescription };
