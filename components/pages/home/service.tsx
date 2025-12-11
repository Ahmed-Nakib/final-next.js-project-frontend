import Image from "next/image"

const serviceData = [
  {
    id: "1",
    title: "Free Worldwide Shipping",
    description: "Free shipping for all orders over $100 Contrary to popular belief.",
    image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/162196463701.png"
  },
  {
    id: "2",
    title: "24/7 Customer Support",
    description: "We provide instant support for all customer queries.",
    image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/162196467602.png"
  },
  {
    id: "3",
    title: "Secure Payment",
    description: "All transactions are secured and encrypted.",
    image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/162196471103.png"
  },
  {
    id: "4",
    title: "Fast Delivery",
    description: "Get your products delivered within 2–5 days.",
    image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/162196474904.png"
  },
]

const Service = () => {
  return (
    <div className="my-container py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceData.map((i) => (
          <div
            key={i.id}
            className="flex items-center p-2 rounded-md shadow-sm border hover:shadow-md transition-all duration-300 bg-white"
          >
            <div className="flex-shrink-0">
              <Image
                src={i.image}
                alt={i.title}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <div>
              <h4 className="text-md font-medium mb-1">{i.title}</h4>
              <p className="text-sm text-gray-600 leading-tight">{i.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service
