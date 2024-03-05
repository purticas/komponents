import { StoryObjs } from "@storybook/web-components";
import { html } from "lit";
import "./komp-button";

export default {
  title: "Button",
  render: (args) => html`<komp-button label=${args.label}></komp-button>`,
};

export const primary: StoryObj = {
  name: "Primary",
  args: {
    label: "Learn More",
  },
};
