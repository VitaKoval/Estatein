import Link from 'next/link'
import React from 'react'

function MealsPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        marginTop: '32px',
      }}
    >
      <h1>Meals Page</h1>
      <Link href="/meals/share">Share</Link>
      <Link href="/meals/meal-id">Share for Meal ID</Link>
    </div>
  )
}

export default MealsPage
