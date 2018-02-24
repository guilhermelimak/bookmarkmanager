import { configure } from '@storybook/vue'

import Vue from 'vue'

function loadStories() {
  // You can require as many stories as you need.
  require('@/components/CommonButton/CommonButton.story')
  require('@/components/CommonInput/CommonInput.story')
}

configure(loadStories, module)
