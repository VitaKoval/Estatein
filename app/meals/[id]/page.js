import { Button } from "@/ui"

function MealPage({ params }) {
  return (
    <div>
      <h2>Meal - {params?.id}</h2>
      <div className="content__actions">
        <Button>Learn More</Button>
        <Button variant="accent">Browse Properties</Button>
      </div>
    </div>
  )
}

export default MealPage
