function RightSection() {
  return (
    <section className="relative max-w-6xl mx-auto py-20 px-6">

      {/* Decorative Square */}

      <div
        className="
          absolute
          top-10
          right-10
          w-16
          h-16
          border
          border-purple-300
          rotate-12
          opacity-30
        "
      ></div>

      {/* Decorative Line */}

      <div
        className="
          absolute
          bottom-20
          left-0
          w-40
          h-[2px]
          bg-gradient-to-r
          from-purple-400
          to-transparent
          opacity-40
        "
      ></div>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="order-2 md:order-1">

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Innovation Creates Opportunity
          </h2>

          <p className="text-gray-600 leading-relaxed mt-4">
            Modern technology enables businesses to reach
            new markets, improve efficiency, and deliver
            exceptional customer experiences. Innovation
            is the key to staying competitive.
          </p>

        </div>

        <div className="order-1 md:order-2 overflow-hidden rounded-3xl">

          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
            alt="Tech Innovation"
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

      </div>

    </section>
  );
}

export default RightSection;