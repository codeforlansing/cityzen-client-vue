export type Status = 'todo' | 'ready' | 'done'

export type Task = {
  taskId: string,
  name: string,
  description: string,
  status: Status
}
