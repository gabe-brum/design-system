import type { StoryObj, Meta } from '@storybook/react'

import { Text, Box, Checkbox, CheckboxProps } from '@design-system-from-gabe-brum/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
          <Text size='sm'>Accept terms of use</Text>
        </Box>
      )
    }
  ],

} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {

}
