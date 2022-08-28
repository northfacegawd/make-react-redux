import { createDOM } from "./react";

const node = {
  tag: "p",
  props: {},
  children: [
    { tag: "h1", props: {}, children: ["React 만들어보기"] },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {
            style: "color:red",
          },
          children: ["첫 번째 아이템"],
        },
        {
          tag: "li",
          props: {
            style: "color:blue",
          },
          children: ["두 번째 아이템"],
        },
        {
          tag: "li",
          props: { style: "color:green" },
          children: ["세 번째 아이템"],
        },
      ],
    },
  ],
};

document.querySelector("#root").appendChild(createDOM(node));
