import { getServices } from '../assets/companyData'

export default function Services() {
  const services = getServices()
  return (
    <section id="services" className="py-20">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-3xl font-semibold mb-6">Our Services</h3>
      <div className="flex flex-wrap -mx-4">

      {
        services.map(service =>  <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white p-6 rounded shadow-md border-t-4 border-green-600">
            <h4 className="text-xl font-bold mb-2">{service.name}</h4>
            <p>{service.description}</p>
          </div>
        </div>)
      }

       

      </div>
    </div>
  </section>
  )
}
