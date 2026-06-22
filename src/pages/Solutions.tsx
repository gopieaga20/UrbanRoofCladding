import { Button } from '@/components/ui/button';
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
      icon: <Home className="h-10 w-10 text-blue-600" />,
      iconBg: "bg-blue-100",
      title: "Metal Roofing Sheet Installation",
      description: "Professional installation of high-quality metal roofing sheets for residential, commercial, and industrial buildings. Our team ensures proper fitting, weatherproofing, and long-lasting performance with corrosion-resistant materials.",
      image: "/lovable-uploads/3fa74b34-0b9e-4bbb-b691-7b83c1e3c11b.png",
    },
    {
      icon: <Building className="h-10 w-10 text-green-600" />,
      iconBg: "bg-green-100",
      title: "Profiled Roof Panel Installation",
      description: "Expert installation of profiled roof panels with superior thermal insulation properties. Perfect for warehouses, factories, and commercial buildings requiring energy-efficient roofing solutions with aesthetic appeal.",
      image: "/lovable-uploads/1a5ae9a9-10b7-48f3-b0a9-a8082fb925c2.png",
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-600" />,
      iconBg: "bg-purple-100",
      title: "Wall Panel Installation (PUF)",
      description: "Complete wall panel installation services using high-density PUF core panels. Ideal for industrial buildings, cold storage facilities, and commercial structures requiring excellent thermal insulation.",
      image: "/lovable-uploads/0ad9ab70-0f4f-4637-b7c1-9f2bc4023b01.png",
    },
    {
      icon: <Factory className="h-10 w-10 text-orange-600" />,
      iconBg: "bg-orange-100",
      title: "Cleanroom Panel Installation",
      description: "Specialized installation of cleanroom panels with bacteria-resistant and fire-retardant properties. Perfect for pharmaceutical, food processing, and healthcare facilities requiring sterile environments.",
      image: "/lovable-uploads/6f007fd1-c7a0-46fb-9d53-4d1b8d1ee46e.png",
    },
    {
      icon: <Snowflake className="h-10 w-10 text-red-600" />,
      iconBg: "bg-red-100",
      title: "Coldroom Panels",
      description: "Professional installation of coldroom panels with superior insulation properties. Designed for cold storage facilities, food processing units, and pharmaceutical storage requiring precise temperature control.",
      image: "/lovable-uploads/85ba5516-ecbd-45f4-aae7-ebcee20578b1.png",
    },
    {
      icon: <Wrench className="h-10 w-10 text-indigo-600" />,
      iconBg: "bg-indigo-100",
      title: "Metal Fabrication",
      description: "Custom metal fabrication services including frames, structures, and specialized components. We work with MS, SS, and UPVC materials to create rust-proof, durable solutions for various applications.",
      image: "/lovable-uploads/d413acca-a3ba-4da9-8c45-e927c445f2e1.png",
    },
    {
      icon: <Package className="h-10 w-10 text-teal-600" />,
      iconBg: "bg-teal-100",
      title: "Accessories Supply",
      description: "Complete range of roofing accessories including screws, butyl tapes, sealants, vents, and flashings. All accessories are standardized and designed for leak-proof installation and long-term durability.",
      image: "/lovable-uploads/d9bc1aa7-3b08-44b6-b48c-88a3fbaa4a41.png",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=1920&h=600&q=80"
            alt="Industrial solutions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 via-blue-600/80 to-teal-600/80" />
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
          <div className="w-full h-full border-r-8 border-b-8 border-white rounded-tl-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Our Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
            Comprehensive roofing and cladding services tailored to meet your specific project requirements
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Services Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
            What We Do
          </h2>
          <div className="space-y-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100`}
              >
                {/* Image */}
                <div className="lg:w-1/2 h-72 lg:h-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Content */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-white">
                  <div className="flex items-center mb-5">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${service.iconBg} mr-4 flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 p-12 rounded-xl border border-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            Every project is unique. Contact us to discuss your specific requirements and
            get a tailored solution that meets your exact needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#11a9df] hover:bg-[#0ea5db] text-white font-bold shadow-lg px-8"
              onClick={() => window.open('https://wa.me/919384818299?text=Hi, I need a custom roofing solution. Can you help?', '_blank')}
            >
              Discuss Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#11a9df] text-[#11a9df] hover:bg-[#11a9df] hover:text-white font-bold shadow-lg px-8"
              onClick={() => window.location.href = 'tel:+919384818299'}
            >
              Call for Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
