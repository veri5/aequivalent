export const requestTagType = (status: string) => {
  let tag = ''
  switch (status) {
    case 'issued':
      tag = 'success'
      break
    case 'rejected':
      tag = 'danger'
      break
    case 'under review':
      tag = 'warning'
      break
    default:
      tag = 'info'
      break
  }
  return tag
}

export const correctTagType = (correct: string) => {
  let tag = ''
  switch (correct) {
    case 'correct':
      tag = 'success'
      break
    case 'incorrect':
      tag = 'danger'
      break
    default:
      tag = 'info'
      break
  }
  return tag
}

export const validTagType = (valid: string) => {
  let tag = ''
  switch (valid) {
    case 'valid':
      tag = 'success'
      break
    case 'invalid':
      tag = 'danger'
      break
    case 'unknown':
      tag = 'warning'
      break
    default:
      tag = 'info'
      break
  }
  return tag
}

export const elementsTagType = (status: string) => {
  let tag = ''
  switch (status) {
    case 'valid':
      tag = 'success'
      break
    case 'retired':
      tag = 'danger'
      break
    default:
      tag = 'info'
      break
  }
  return tag
}