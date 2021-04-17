import React from 'react';

import Loading from './Loading.jsx';

export default {
  title: 'Components/Loading',
  component: Loading,
}

const Template = (args) => <Loading {...args} />;

export const DefaultLoading = Template.bind({});

DefaultLoading.args = {
};