function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}

        <div>

          {/* Badge */}

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-6">
           Trusted by 500+ Businesses
          </div>

          {/* Heading */}

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">

            Partner With

            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {" "}Experts{" "}
            </span>

            To Grow Faster

          </h1>

          {/* Description */}

          <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl">

            We help businesses build meaningful partnerships,
            increase customer engagement, and accelerate growth
            through innovative digital solutions and strategic
            collaboration.

          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              className="
                bg-black
                text-white
                px-7
                py-3
                rounded-full
                hover:bg-gray-800
                transition
                duration-300
              "
            >
              Get Started
            </button>

            <button
              className="
                border
                border-gray-300
                px-7
                py-3
                rounded-full
                hover:bg-gray-100
                transition
                duration-300
              "
            >
              Learn More
            </button>

          </div>

          {/* Customer Avatars */}

          <div className="flex items-center mt-10">

            <div className="flex -space-x-3">

              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />

              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />

            </div>

            <p className="ml-4 text-gray-600">
              Trusted by <span className="font-semibold">10,000+</span> happy customers
            </p>

          </div>

        </div>

        {/* Right Image Section */}

        <div className="relative flex justify-center">

          {/* Glow 1 */}

          <div
            className="
              absolute
              w-96
              h-96
              bg-purple-500
              rounded-full
              blur-3xl
              opacity-20
              -left-8
              top-6
            "
          />

          {/* Glow 2 */}

          <div
            className="
              absolute
              w-80
              h-80
              bg-pink-500
              rounded-full
              blur-3xl
              opacity-20
              right-0
              bottom-0
            "
          />

          {/* Main Image */}

          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Team Collaboration"
            className="
              relative
              w-full
              max-w-sm
              aspect-square
              object-cover
              rounded-full
              shadow-2xl
              border-4
              border-white
            "
          />

          {/* Floating Avatar 1 */}

          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt=""
            className="
              absolute
              top-4
              left-4
              w-16
              h-16
              rounded-full
              border-4
              border-white
              shadow-lg
            "
          />

          {/* Floating Avatar 2 */}

          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt=""
            className="
              absolute
              bottom-10
              right-2
              w-16
              h-16
              rounded-full
              border-4
              border-white
              shadow-lg
            "
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;