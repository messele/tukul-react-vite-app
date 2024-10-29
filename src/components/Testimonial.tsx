import { getTestimonials } from "../assets/companyData";

export default function Testimonial() {
  const testimonials = getTestimonials();
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">What Our Clients Say</h3>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map(({comments, clientName}) => (
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-green-600">
                <p>
                  {`"${comments}"`}
                </p>
              <p className="mt-4 font-semibold">{`- ${clientName}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
