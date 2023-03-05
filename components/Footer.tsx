import * as React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 p-10 mt-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-center">
          Made with
          <span role="img" aria-label="heart" className="pr-1">
            ❤️
          </span>
          by{' '}
          <a
            href="https://github.com/andreaspwu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bold text-blue-500 hover:text-blue-600"
          >
            Andreas
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
