import { shallowMount } from '@vue/test-utils'
import TaskList from '@/components/TaskList.vue'
import { Task } from '@types'

describe('TaskList.vue', () => {
  it('renders task name when passed', () => {
    const task: Task = {
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
