type Category = Partial<{
  title: string
}>

export const mapCategories = (categories: Category[]) => {
  return categories?.map(item => `${item.title}`).join(', ') || ''
}
