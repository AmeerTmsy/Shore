export default function GiftHero() {
  return (
    <div className="h-[100vh] bg-[url('vishubanner.png')] bg-cover bg-center flex items-center justify-center text-white text-center shadow-lg">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#000000] featuredText">
          Find the Perfect Gift
        </h1>
        <div className="flex flex-col gap-4">
          <p className="mt-3 text-2xl font-light text-[#000000] ">
            Find the perfect Vishu present for you loved ones
          </p>
          <p className="mt-3 text-lg font-light text-[#000000] ">
            For every moment, every person, every budget
          </p>
        </div>
      </div>
    </div>
  );
}