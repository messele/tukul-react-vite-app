export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-6 text-center py-20 bg-green-600 text-white">
        <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
        <p className="mb-6">
          Have a project in mind? Let's discuss how we can work together to
          create success.
        </p>
        <form action="#" method="POST" className="max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 mb-4 rounded border border-gray-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 rounded border border-gray-200"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-4 mb-4 rounded border border-gray-200"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-white text-green-600 px-6 py-3 font-semibold rounded shadow-md hover:bg-gray-100"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
