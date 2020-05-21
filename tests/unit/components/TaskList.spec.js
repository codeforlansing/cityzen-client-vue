import { shallowMount } from '@vue/test-utils'
import TaskList from '../../../src/components/TaskList.vue'

describe('TaskList.vue', () => {
  it('renders task name when passed', () => {
    const task = {
      taskId: '12345',
      name: 'todo',
      description: 'longer explanation of thing',
      status: 'todo'
    }
    const wrapper = shallowMount(TaskList, {
      propsData: { tasks: [task], value: [] }
    })
    expect(wrapper.text()).toContain(task.name)
  })
})
