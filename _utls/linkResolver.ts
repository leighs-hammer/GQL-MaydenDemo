export const linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'showcases') {
    return `/showcases/${doc.uid}`
  }
  // URL for a product type
  if (doc.type === 'woods') {
    return `/woods/${doc.uid}`
  }
  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  // Backup for all other types
  return '/'
}
