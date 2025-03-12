import React from 'react'

function MealPage({ params }) {
  return (
    <div>
          <h2>Meal - {params?.id}</h2>
    </div>
  )
}

export default MealPage
