export function handleKeyboard(event, multiline) {
  //To save content, press Enter or Escape
  //If the content is multiline, Shift + Enter let line breaks
  const hasBeenEdited = multiline
  ? event.key === 'Enter' && !event.shiftKey || event.key === 'Escape'
  : event.key === 'Enter' || event.key === 'Escape'

  if (hasBeenEdited) {
    event.preventDefault()
    event.currentTarget.blur()
  }
}