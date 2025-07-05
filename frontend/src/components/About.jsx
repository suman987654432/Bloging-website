import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="h-[50vh] bg-gradient-to-br from-black/50 to-black/50 bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-[2px] md:tracking-[4px] drop-shadow-2xl animate-fade-in-up">
            ABOUT
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-2 md:mt-4 opacity-90 animate-fade-in-up-delay">
            Discover Our Story
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-blue-100 min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl mb-8 md:mb-16 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent px-2">
              Welcome to Our Story
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 font-medium text-justify p-4 md:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl md:rounded-2xl border-l-4 border-indigo-500">
              At [Your Blog Name], we believe great stories spark change. What began as a passion project has now become a growing hub of insight, creativity, and community. Every word we publish aims to educate, inspire, and empower.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 md:mb-7 text-justify leading-6 md:leading-8">
              Our platform brings together curious minds and passionate voices from around the world. From thought-provoking articles to practical guides, we strive to deliver content that adds real value to your day.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 md:mb-7 text-justify leading-6 md:leading-8">
              Whether you're exploring tech trends, seeking personal growth, or just here to read something refreshing — this is your space. Our team is dedicated to producing content that's not only well-written but also rooted in relevance and reliability.
            </p>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl my-6 md:my-10 shadow-lg shadow-indigo-200">
              <h3 className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 font-semibold">Why We're Different</h3>
              <p className="text-sm sm:text-base md:text-lg leading-6 md:leading-relaxed opacity-95 text-justify">
                We're not chasing clicks — we're chasing connection. Every article is crafted with purpose, backed by research, and presented with passion. We focus on storytelling that resonates, informs, and leaves a lasting impression.
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 md:mb-7 text-justify leading-6 md:leading-8">
              As we grow, so does our vision — to create a space where content doesn't just exist, but matters. We're here to spark conversations, share knowledge, and build a genuine digital family.
            </p>

            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border-2 border-gray-200 mt-6 md:mt-8 text-center">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 m-0 italic leading-6 md:leading-relaxed">
                Thank you for joining us. This isn't just a blog — it's a movement. And you, dear reader, are a part of it.
              </p>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12">
            <div className="text-center bg-white p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-500 m-0">1000+</h3>
              <p className="text-gray-600 mt-1 md:mt-2 text-sm sm:text-base md:text-lg">Published Stories</p>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-500 m-0">50K+</h3>
              <p className="text-gray-600 mt-1 md:mt-2 text-sm sm:text-base md:text-lg">Monthly Explorers</p>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg sm:col-span-2 md:col-span-1">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-500 m-0">5+ Years</h3>
              <p className="text-gray-600 mt-1 md:mt-2 text-sm sm:text-base md:text-lg">Of Sharing Stories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fadeInUp 1s ease-out 0.5s both;
        }
      `}</style>
      <Footer/>
    </>
  )
}

export default About
