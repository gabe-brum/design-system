import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@design-system-from-gabe-brum/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gabe-brum.png',
    alt: 'Gabriel Brum da Luz'
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}
