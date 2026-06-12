function IntroSection() {
  return (
    <section className="relative max-w-6xl mx-auto py-32 px-6 text-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"></div>

      {/* Floating Square */}
      <div className="absolute top-16 left-20 w-16 h-16 border border-purple-300 rotate-12 opacity-40"></div>

      {/* Floating Rectangle */}
      <div className="absolute bottom-20 right-20 w-24 h-12 border border-pink-300 -rotate-12 opacity-30"></div>

      {/* Decorative Line Left */}
      <div className="absolute top-40 left-0 w-40 h-[2px] bg-gradient-to-r from-purple-500 to-transparent opacity-40"></div>

      {/* Decorative Line Right */}
      <div className="absolute bottom-32 right-0 w-52 h-[2px] bg-gradient-to-l from-pink-500 to-transparent opacity-40"></div>

      {/* Dot Pattern */}
      <div className="absolute top-10 right-10 grid grid-cols-5 gap-2 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-purple-500 rounded-full"
          ></div>
        ))}
      </div>

      {/* Content */}

      <div className="relative z-10">

        <div className="inline-block px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-8">
           Our Vision
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Building{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Extraordinary
          </span>{" "}
          Digital Experiences
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We believe innovation is more than technology—it is about
          creating meaningful connections, empowering people, and
          transforming ideas into impactful solutions that shape the future.
        </p>

      </div>

    </section>

    
  );
}

export default IntroSection;