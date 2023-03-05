'use client'
import { useState } from 'react'
import EmojiCard from '@/components/EmojiCard'
import List from '@/components/List'
import emojisData from '@/data/emojis'
import CategoryCard from '@/components/CategoryCard'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentSearch, setCurrentSearch] = useState('')
  const [filteredEmojis, setFilteredEmojis] = useState(emojisData.slice(0, 48))

  function handleFilterByCategory(category: string) {
    setFilteredEmojis(
      emojisData.filter((emoji) =>
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    )
  }

  function handleFilterBySearch(search: string) {
    setCurrentSearch(search.trim())
    if (search.trim().length > 0) {
      setFilteredEmojis(
        emojisData.filter((emoji) =>
          emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        )
      )
    } else {
      setFilteredEmojis(emojisData.slice(0, 500))
    }
  }

  return (
    <>
      <h1 className=" text-2xl md:text-5xl font-bold text-text-primary text-center tracking-wide">
        👋 Welcome to Wikimoji ✨
      </h1>
      <div className="flex justify-center">
        <input
          className="w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
          id="name"
          type="text"
          placeholder="Search for an emoji"
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="😀"
          group={'Smileys & Emotion'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="👨🏻"
          group={'People & Body'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🐶"
          group={'Animals & Nature'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🍔"
          group={'Food & Drink'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="⚽️"
          group="Activities"
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🏨"
          group={'Travel & Places'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="💡"
          group="Objects"
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="⚛️"
          group="Symbols"
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🚩"
          group="Flags"
        />
      </div>
      {!filteredEmojis.length && (
        <p className="text-center text-xl text-gray-500">{`Sorry, we could'n find an emoji with: "${currentSearch}"`}</p>
      )}
      <List emojis={filteredEmojis} />
      <Footer />
    </>
  )
}
