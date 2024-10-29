import { getCompanyInfo } from "../assets/companyData"

export default function Header() {
  const cInfo = getCompanyInfo();
  return (
    <nav className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-600">{cInfo.name}</h1>
      <ul className="flex space-x-6">
        <li><a href="#services" className="hover:text-green-600">Services</a></li>
        <li><a href="#portfolio" className="hover:text-green-600">Portfolio</a></li>
        <li><a href="#testimonials" className="hover:text-green-600">Testimonials</a></li>
        <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}
