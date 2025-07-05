import { useState } from 'react'
import { useNavigate } from 'react-router-dom' 

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const navigate = useNavigate()
  
  const goToHome = () => {
    navigate('/') 
  }
  return (
    <nav className="bg-gradient-to-r from-blue-400 to-cyan-500 shadow-xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <h1 onClick={goToHome} className="text-white text-3xl font-extrabold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] cursor-pointer">BlogSphere</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <button
                onClick={goToHome}
                className="text-white font-medium px-4 py-2 rounded-full hover:bg-white/20 hover:shadow-lg transition duration-300 ease-in-out"
              >
                Home
              </button>
            </li>
            {['About', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="text-white font-medium px-4 py-2 rounded-full hover:bg-white/20 hover:shadow-lg transition duration-300 ease-in-out"
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li className="relative group">
              <button
                className="text-white font-medium px-4 py-2 rounded-full flex items-center hover:bg-white/20 hover:shadow-lg transition duration-300 ease-in-out"
              >
                Categories
                <span className="ml-1 transform group-hover:rotate-180 transition-transform duration-300">▼</span>
              </button>
              <ul className="absolute top-12 left-0 bg-white text-sm rounded-lg shadow-lg py-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-300 z-50 w-48">
                {['Beauty', 'Tech', 'Fitness', 'Business', 'Sports'].map((cat) => (
                  <li key={cat}>
                    <a
                      href={`/category/${cat.toLowerCase()}`}
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500 hover:text-white hover:pl-6 transition-all duration-300"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="space-y-2 py-4">
            <li>
              <button
                onClick={goToHome}
                className="block text-white font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300 w-full text-left"
              >
                Home
              </button>
            </li>
            {['About', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="block text-white font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleDropdown}
                className="w-full text-left text-white font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300 flex justify-between items-center"
              >
                Categories
                <span className={`transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isDropdownOpen && (
                <ul className="pl-4 pt-2 space-y-1">
                  {['Beauty', 'Tech', 'Fitness', 'Business', 'Sports'].map((cat) => (
                    <li key={cat}>
                      <a
                        href={`/category/${cat.toLowerCase()}`}
                        className="block text-white px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300"
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
