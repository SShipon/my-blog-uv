import { notFound } from 'next/navigation'

// This is a mock function to simulate fetching data
async function getItemDetails(id: string) {
  // In a real application, you would fetch data from an API or database
  const items = [
    { id: '1', name: 'Item 1', description: 'This is item 1' },
    { id: '2', name: 'Item 2', description: 'This is item 2' },
    { id: '3', name: 'Item 3', description: 'This is item 3' },
  ]
  
  const item = items.find(item => item.id === id)
  
  if (!item) {
    return null
  }
  
  return item
}

export default async function DetailsPage({ params }: { params: { id: string } }) {
  const item = await getItemDetails(params.id)

  if (!item) {
    notFound()
  }

  return (
    <div className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-4">{item.name}</h1>
        <p className="text-xl text-muted-foreground">{item.description}</p>
      </div>
    </div>
  )
}

