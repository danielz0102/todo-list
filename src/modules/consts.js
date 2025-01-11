import { addYears } from 'date-fns'

const currentYear = new Date().getFullYear()
const DATE_FORMAT = "MMMM dd',' yyyy',' HH:mm 'hrs'"
const MAX_DATE = addYears(new Date(currentYear, 11, 31), 100)

export { DATE_FORMAT, MAX_DATE }