
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Users, Clock, Award, HeartHandshake, Settings, Wrench } from 'lucide-react';

const Index = () => {
  const handleGetQuote = () => {
    window.open('https://wa.me/919384818299?text=Hi, I would like to get a quote for roofing services.', '_blank');
  };

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-8 w-8 text-cyan-600" />,
      title: "One-Stop Solution",
      description: "Complete roofing and cladding services from supply to installation",
      color: "bg-cyan-50 border-cyan-200"
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: "High-Quality Materials",
      description: "Premium materials from trusted manufacturers for lasting durability",
      color: "bg-teal-50 border-teal-200"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Professional Installation Team",
      description: "Skilled and experienced professionals ensuring perfect installation",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-600" />,
      title: "Customized Solutions",
      description: "Tailored solutions to meet your specific project requirements",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "On-Time Delivery",
      description: "Reliable scheduling and timely project completion",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: "Cost-Effective Services",
      description: "Competitive pricing without compromising on quality",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-pink-600" />,
      title: "After-Sales Support",
      description: "Comprehensive support and maintenance services",
      color: "bg-pink-50 border-pink-200"
    },
    {
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      title: "Experienced Team",
      description: "Years of expertise in roofing and cladding industry",
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=1920&h=800&q=80" 
            alt="Modern building" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Urban Roofing & Cladding Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md font-medium">
              Quality materials, expert installation, and reliable service for all your roofing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8 py-4 font-bold shadow-lg border-2 border-white"
                onClick={handleGetQuote}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white border-2 border-orange-600 text-lg px-8 py-4 font-bold shadow-lg"
                onClick={() => window.location.href = 'tel:+919384818299'}
              >
                Call Now: +91 9384818299
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Our Expertise
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6 font-medium">
                From residential homes to large-scale industrial projects, we supply market-standard 
                roofing sheets, PUF panels, flashings, accessories, UPVC products, and complete 
                installation services.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                Our comprehensive approach ensures that every project is 
                completed to the highest standards with premium materials and professional workmanship.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/a7c53a33-d875-49c3-b99b-a3ed5b8d7b7e.png" 
                alt="Steel frame construction" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="/lovable-uploads/7a079bcf-f68e-47b9-97f5-81023e9a39cf.png" 
                alt="Professional roofing installation" 
                className="rounded-lg shadow-lg mt-8 w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose Urban Roofing and Cladding Solutions?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
              We combine quality materials, expert craftsmanship, and reliable service to deliver 
              exceptional roofing and cladding solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className={`text-center p-6 hover:shadow-xl transition-all duration-300 border-2 ${item.color} hover:scale-105`}>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1920&h=600&q=80" 
            alt="Construction site" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white drop-shadow-md font-medium">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-8 py-4 font-bold shadow-lg border-2 border-white"
              onClick={handleGetQuote}
            >
              Get Your Quote via WhatsApp
            </Button>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white border-2 border-orange-600 text-lg px-8 py-4 font-bold shadow-lg"
              onClick={() => window.location.href = 'tel:+919384818299'}
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
