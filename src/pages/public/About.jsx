const CustRelation = "./Customer.svg";
const ShoppingBro = "./ShoppingBro.svg";
const TeamGoals = "./TeamGoals.svg";


export default function About() {
  return (
    <div>
      {/* Hero Section with Video */}
      <div className="relative h-[90vh] w-full overflow-hidden rounded-b-2xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/aboutSection.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Shore
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Every step tells a story — we craft footwear that blends comfort,
              performance, and timeless style.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex flex-col gap-5">
            <div className="grid md:grid-cols-2">
              <div className="flex justify-center md:order-2">
                <img className="w-10/12" src={ShoppingBro} alt="Customer experience image" />
              </div>
              <div className="md:order-1 flex items-center">
                <p className="text-gray-600 leading-relaxed text-center md:text-start">
                  At Shore, we go beyond just selling footwear — we help shape how people
                  experience quality, comfort, and style. Our approach is centered around
                  delivering products that not only look premium but also feel exceptional
                  with every step.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 ">
              <div className="flex justify-center">
                <img className="w-10/12" src={CustRelation} alt="Cunnecting brand image" />
              </div>
              <div className=" flex items-center">
                <p className="text-gray-600 leading-relaxed text-center md:text-end">
                  We collaborate with businesses and brands to elevate their customer
                  experience by offering footwear that appeals to a more refined and
                  quality-conscious audience. By focusing on craftsmanship, durability,
                  and modern design, we help attract and retain customers who value
                  premium products.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="flex justify-center md:order-2">
                <img className="w-10/12" src={TeamGoals} alt="Customer experience image" />
              </div>
              <div className="md:order-1 flex items-center">
                <p className="text-gray-600 leading-relaxed text-center md:text-start">
                  Our goal is to bridge the gap between functionality and luxury — ensuring
                  that every product we deliver gives customers the confidence and feeling
                  of wearing something truly premium. From everyday essentials to standout
                  pieces, each item is curated to meet high standards of performance and style.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 my-10 md:my-16 leading-relaxed">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>We</strong> strongly focused on innovation and attention to detail, ShoeStore
            continues to evolve as a platform that empowers both individuals and
            businesses to step forward with confidence.
          </p>

          {/* Vision Section */}
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="border hover:border-l-8 border-indigo-600 p-6 rounded-lg hover:shadow-lg transition-all">
              <h2 className="font-semibold text-lg mb-2 border-b border-gray-300 pb-1">
                Our Vision
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                To redefine how people experience footwear by creating a platform
                where premium quality, innovation, and style come together to set
                new standards in the industry.
              </p>
            </div>

            <div className="border hover:border-l-8 border-indigo-600 p-6 rounded-lg hover:shadow-lg transition-all">
              <h2 className="font-semibold text-lg mb-2 border-b border-gray-300 pb-1">
                Our Mission
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                To help businesses grow their customer base by providing high-quality,
                premium footwear that enhances customer satisfaction and builds
                long-term trust and loyalty.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}