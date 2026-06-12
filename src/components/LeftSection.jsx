function LeftSection() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="overflow-hidden rounded-3xl">
  <img
    src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80"
    alt="Team Collaboration"
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

        <div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Collaboration Drives Growth
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Successful businesses are built through strong
            partnerships and teamwork. By bringing together
            expertise and innovation, organizations can achieve
            sustainable growth and create greater value for
            their customers.
          </p>
        </div>

      </div>

    </section>
  );
}

export default LeftSection;