function FinalSection() {
  return (
    <section className="relative max-w-6xl mx-auto py-20 px-6">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}

        <div className="relative overflow-hidden rounded-3xl">

          {/* Glow Effect */}

          <div
            className="
              absolute
              -z-10
              top-6
              left-6
              w-72
              h-72
              bg-blue-400
              rounded-full
              blur-3xl
              opacity-20
            "
          ></div>

          {/* Decorative Rectangle */}

          <div
            className="
              absolute
              -top-4
              -right-4
              w-20
              h-10
              border
              border-blue-300
              rotate-12
              opacity-30
            "
          ></div>

          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            alt="Business Growth"
            className="
              w-full
              h-80
              object-cover
              rounded-3xl
              shadow-lg
              transition-all
              duration-500
              hover:scale-105
              cursor-pointer
            "
          />

        </div>

        {/* Content */}

        <div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Building Lasting Relationships
          </h2>

          <p className="text-gray-600 leading-relaxed mt-4">
            Long-term success depends on trust, transparency,
            and continuous improvement. Strong customer
            relationships create opportunities for future
            growth and collaboration.
          </p>

        </div>

      </div>

    </section>
  );
}

export default FinalSection;