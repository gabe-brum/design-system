import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui-design-system/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero odio, odit quod iusto officia officiis aspernatur nesciunt fuga est libero quis, nulla consequatur ducimus quidem, inventore rem dignissimos accusamus?',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio',
      },
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {

}

export const CustomTag: StoryObj<TextProps> = {
  args: { 
    children: 'Strong text',
    as: 'strong'
  }
}
