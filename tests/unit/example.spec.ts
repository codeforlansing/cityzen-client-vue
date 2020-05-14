import { shallowMount } from '@vue/test-utils'
import TaskList from '@/components/TaskList.vue'

describe('TaskList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TaskList, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
