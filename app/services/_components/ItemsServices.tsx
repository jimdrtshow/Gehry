export default function ItemsService() {
  return (
    <section className="w-screen h-auto ">
      {/* Block 1  */}
      <div className="w-full h-auto flex flex-col md:flex-row p-10">
        <div className="w-full md:w-1/2 h-1/2 md:h-auto flex flex-col md:flex-row items-center justify-center lg:justify-start">
          <p className="pb-5 text-[6.854rem] text-my_color_9  opacity-10 md:pr-10 ">
            01
          </p>
          <h2 className="text-[2.618rem] text-my_color_8 text-center lg:text-left">
            the idea.
          </h2>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-auto flex items-center justify-start pt-10 lg:p-0">
          <p className="text-center lg:text-left text-[1rem] text-my_color_7">
            This is the moment when you envision creating a new living space or
            renovating an existing one. Gehry guides you from the very start,
            providing key insights, avoiding common pitfalls, and outlining
            administrative timelines. We can also assist in property selection,
            offering advice on urban planning, land orientation, structural
            condition, and associated costs.
          </p>
        </div>
      </div>
    </section>
  );
}
