import 'flatpickr/dist/flatpickr.min.css'
import './dueDate.css'
import flatpickr from 'flatpickr'
import { Storage } from '@/modules/Storage.js'
import { MAX_DATE } from '@/modules/consts.js'

export function createDueDate(todo, projectId) {
  const dueDate = document.createElement('p')
  dueDate.textContent = todo.dueDate
  dueDate.classList.add('fallback', 'dueDate')
  dueDate.addEventListener('click', e => showCalendar(e, todo, projectId))

  return dueDate
}

function showCalendar(e, todo, projectId) {
  const date = e.target

  if (date.editable) {
    flatpickr(date, {
      defaultDate: e.target.textContent,
      dateFormat: "F j, Y, H:i \\hr\\s",
      minDate: 'today',
      maxDate: MAX_DATE,
      enableTime: true,
      time_24hr: true,
  
      onChange: (selectedDates, dateStr) => {
        date.textContent = dateStr
  
        todo.updateProperty({
          value: dateStr,
          property: 'dueDate',
          project: Storage.getProject(projectId)
        })
      },
  
      onClose: (selectedDates, dateStr, instance) => {
        instance.destroy()
      }
    }).toggle()
  }
}