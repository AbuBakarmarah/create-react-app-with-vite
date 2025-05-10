import { useEffect, useState } from 'react'

export default function CatFact() {
  const [fact, setFact] = useState('Loading…')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((res) => {
        if (!res.ok) throw new Error('Network error')
        return res.json()
      })
      .then((data) => setFact(data.fact))
      .catch(() => setError('Failed to load.'))
  }, [])

  return (
    <div className="cat-fact">
      <h2>🐱 Random Cat Fact</h2>
      {error ? <p className="error">{error}</p> : <p>{fact}</p>}
    </div>
  )
}