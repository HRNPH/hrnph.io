import type { Meta, StoryObj } from "@storybook/react";
import Script from "next/script";
import HeroSection from "./HeroSection";
import Background from "../BgWrapper";

const meta: Meta<typeof HeroSection> = {
  title: "Landing/Hero",
  component: HeroSection,
  parameters: {},
  decorators: [
    (Story) => (
      <div>
        <Script
          src="sdk/live2dcubismcore.min.js"
          strategy="afterInteractive" // load before anything else
        />
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Background>
      <HeroSection />
    </Background>
  ),
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
