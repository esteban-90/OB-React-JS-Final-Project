import Task from 'models/Task.class'
import LEVELS from 'models/levels.enum'
import TaskItem from 'components/pure/TaskItem'

export default function TaskList() {
  const task = new Task({
    name: 'Example',
    description: 'Something',
    completed: false,
    level: LEVELS.NORMAL,
  })

  return (
    <div>
      <TaskItem task={task} />
    </div>
  )
}
