import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Profile, { ProfileProps } from './Profile';

export default {
  title: 'Components/Profile',
  component: Profile,
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;