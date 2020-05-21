import { shallowMount } from '@vue/test-utils'
import ContactMethod from '../../../src/components/ContactMethod.vue'

describe('ContactMethod.vue', () => {
  it('renders email input', () => {
    const wrapper = shallowMount(ContactMethod, {
      propsData: { contactMethod: { email: '' } }
    })
    expect(wrapper.find('#cfl-email').exists()).toBe(true)
  })
})
