interface EmojiCardProps {
  emoji: string
  group: string
  handleFilter: (group: string) => void
}

const CategoryCard: React.FunctionComponent<EmojiCardProps> = ({
  emoji,
  group,
  handleFilter,
}) => {
  return (
    <>
      <button
        onClick={() => handleFilter(group)}
        className="flex items-baseline justify-start pl-7 bg-gray-50 py-2 rounded-md hover:bg-gray-100"
      >
        <span className="text-xl mr-4" role={'img'} aria-label={emoji}>
          {emoji}
        </span>
        <p>{group}</p>
      </button>
    </>
  )
}

export default CategoryCard
