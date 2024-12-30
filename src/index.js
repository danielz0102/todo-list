import '@/index.css'
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { Priority, Todo } from '@/modules/Todo'
import { Project } from '@/modules/Project'

function getCurrentDatetime() {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const currentDate = new Date()
  const zonedDate = toZonedTime(currentDate, userTimezone)
  return format(zonedDate, 'dd-MM-yyyy:HH:mm:ss')
}

const todo = new Todo({
  title: 'Learn JavaScript',
  description: 'Learn JavaScript to become a better developer',
  dueDate: getCurrentDatetime(),
  priority: Priority.HIGH
})

const project = new Project('Personal')
project.addTodo(todo)

console.log(project)