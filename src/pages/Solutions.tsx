import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home, 
  Building, 
  Shield, 
  Snowflake, 
  Factory, 
  Wrench, 
  Package 
} from 'lucide-react';

const Solutions = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: "Metal Roofing Sheet Installation",
      description: "Professional installation of high-quality metal roofing sheets for residential, commercial, and industrial buildings. Our team ensures proper fitting, weatherproofing, and long-lasting performance with corrosion-resistant materials.",
      image: "/lovable-uploads/3fa74b34-0b9e-4bbb-b691-7b83c1e3c11b.png",
      color: "border-blue-200"
    },
    {
      icon: <Building className="h-12 w-12 text-green-600" />,
      title: "Profiled Roof Panel Installation",
      description: "Expert installation of profiled roof panels with superior thermal insulation properties. Perfect for warehouses, factories, and commercial buildings requiring energy-efficient roofing solutions with aesthetic appeal.",
      image: "/lovable-uploads/1a5ae9a9-10b7-48f3-b0a9-a8082fb925c2.png",
      color: "border-green-200"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: "Wall Panel Installation (PUF)",
      description: "Complete wall panel installation services using high-density PUF core panels. Ideal for industrial buildings, cold storage facilities, and commercial structures requiring excellent thermal insulation.",
      image: "/lovable-uploads/0ad9ab70-0f4f-4637-b7c1-9f2bc4023b01.png",
      color: "border-purple-200"
    },
    {
      icon: <Factory className="h-12 w-12 text-orange-600" />,
      title: "Cleanroom Panel Installation",
      description: "Specialized installation of cleanroom panels with bacteria-resistant and fire-retardant properties. Perfect for pharmaceutical, food processing, and healthcare facilities requiring sterile environments.",
      image: "/lovable-uploads/6f007fd1-c7a0-46fb-9d53-4d1b8d1ee46e.png",
      color: "border-orange-200"
    },
    {
      icon: <Snowflake className="h-12 w-12 text-red-600" />,
      title: "Coldroom Panels",
      description: "Professional installation of coldroom panels with superior insulation properties. Designed for cold storage facilities, food processing units, and pharmaceutical storage requiring precise temperature control.",
      image: "/lovable-uploads/85ba5516-ecbd-45f4-aae7-ebcee20578b1.png",
      color: "border-red-200"
    },
    {
      icon: <Wrench className="h-12 w-12 text-indigo-600" />,
      title: "Metal Fabrication",
      description: "Custom metal fabrication services including frames, structures, and specialized components. We work with MS, SS, and UPVC materials to create rust-proof, durable solutions for various applications.",
      image: "/lovable-uploads/d413acca-a3ba-4da9-8c45-e927c445f2e1.png",
      color: "border-indigo-200"
    },
    {
      icon: <Package className="h-12 w-12 text-teal-600" />,
      title: "Accessories Supply",
      description: "Complete range of roofing accessories including screws, butyl tapes, sealants, vents, and flashings. All accessories are standardized and designed for leak-proof installation and long-term durability.",
      image: "/lovable-uploads/d9bc1aa7-3b08-44b6-b48c-88a3fbaa4a41.png",
      color: "border-teal-200"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=1920&h=600&q=80" 
              alt="Industrial solutions" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative text-center py-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Solutions
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Comprehensive roofing and cladding services tailored to meet your specific project requirements
            </p>
          </div>
        </div>

        {/* Services Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
            What We Do
          </h2>
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className={`overflow-hidden hover:shadow-xl transition-all duration-300 border-2 ${service.color}`}>
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-2xl font-bold text-gray-900 ml-4">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1920&h=600&q=80" 
              alt="Custom solutions" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative text-center bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Every project is unique. Contact us to discuss your specific requirements and 
              get a tailored solution that meets your exact needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/919384818299?text=Hi, I need a custom roofing solution. Can you help?', '_blank')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold shadow-lg"
              >
                Discuss Your Project
              </button>
              <button 
                onClick={() => window.location.href = 'tel:+919384818299'}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-bold shadow-lg"
              >
                Call for Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
