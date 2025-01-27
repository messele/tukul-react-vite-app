import { getCompanyInfo } from "../assets/companyData";

export default function Footer() {
  return (
   <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} {getCompanyInfo().name} All rights reserved.</p>
    </div>
  </footer>
    
  )
}