export const recursiveArrayToTree = (allElements) => {
  const arrayToTree = (elements) =>
    elements.map(element => {
      const children = allElements.filter(({ parent }) => parent === element.name )

      return Object.assign({}, 
        { ...element }, 
        children.length ? { children: arrayToTree(children) } : {}
      )
    })

  const rootElements = allElements.filter(element => !element.parent)
  return arrayToTree(rootElements)
}