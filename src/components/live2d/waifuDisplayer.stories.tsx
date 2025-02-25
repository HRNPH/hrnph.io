import type { Meta, StoryObj } from "@storybook/react";
import WaifuDisplayer from "./WaifuDisplayer";

const meta: Meta = {
  title: "waifu/Displayer",
  component: WaifuDisplayer,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    modelOptions: {
      description: "Options for the live2d model",
      table: {
        type: {
          summary: "modelOptions",
        },
      },
      control: {
        type: "object",
      },
      defaultValue: {
        position: {
          x: 0.5,
          y: 0.5,
        },
      },
      subControls: {
        position: {
          x: {
            description: "X position (horizontal alignment)",
            control: {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
            },
            table: {
              type: {
                summary: "number",
              },
              defaultValue: { summary: 0.5 },
            },
          },
          y: {
            description: "Y position (vertical alignment)",
            control: {
              type: "range",
              min: 0,
              max: 1,
              step: 0.01,
            },
            table: {
              type: {
                summary: "number",
              },
              defaultValue: { summary: 0.5 },
            },
          },
        },
      },
    },
  },
} satisfies Meta<typeof WaifuDisplayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    modelOptions: {
      position: {
        x: 0.5,
        y: 0.5,
      },

      scale: {
        x: 0.03,
        y: 0.03,
      },

      alpha: 0.5,
      bgColor: "#000000",
      model: "/models/EVA/EVA.model3.json",
    },
  },
  render: (args) => (
    <WaifuDisplayer className="h-64 w-64" modelOptions={args.modelOptions} />
  ),
};
