
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1920&h=600&q=80"
            alt="Modern architecture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 via-blue-600/80 to-teal-600/80" />
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
          <div className="w-full h-full border-l-8 border-b-8 border-white rounded-tr-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            About Urban Roofing and Cladding Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
            Your trusted partner for professional roofing and cladding services
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  Founded in 2024, Urban Roofing and Cladding Solutions was established with a clear vision —
                  to provide high-quality, reliable, and affordable roofing and cladding services across
                  residential, commercial, and industrial sectors.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  We specialize in supplying roofing sheets, PUF panels, flashings, UPVC products, and a
                  complete range of roofing accessories, along with end-to-end installation services. From
                  product supply to project execution, we ensure timely delivery, professional workmanship,
                  and long-lasting performance.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  Our commitment to customer satisfaction and quality service has helped us quickly earn
                  trust in the market — and we're only just getting started.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/lovable-uploads/6f83923e-8e36-4d32-b5aa-d4e1d513a22e.png"
                alt="Colorful roofing panels"
                className="rounded-xl shadow-lg w-full h-52 object-cover"
              />
              <img
                src="/lovable-uploads/ec3526d1-aebd-47a7-b5f5-023c26956a53.png"
                alt="Industrial warehouse structure"
                className="rounded-xl shadow-lg mt-8 w-full h-52 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-cyan-200 bg-cyan-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-100 mr-4">
                    <Eye className="h-7 w-7 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-800 leading-relaxed font-medium">
                  To be the leading provider of innovative roofing and cladding solutions,
                  setting industry standards for quality, reliability, and customer satisfaction
                  across India.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-teal-200 bg-teal-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 mr-4">
                    <Target className="h-7 w-7 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-800 leading-relaxed font-medium">
                  To deliver exceptional roofing and cladding solutions through quality materials,
                  professional installation, and comprehensive support, ensuring every project
                  exceeds customer expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1920&h=600&q=80"
              alt="Building excellence"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center py-14 px-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              At Urban Roofing and Cladding Solutions, we are committed to delivering projects
              that stand the test of time. Our focus on quality materials, skilled craftsmanship,
              and customer-centric service ensures that every client receives solutions that not
              only meet but exceed their expectations. We believe in building lasting relationships
              through trust, transparency, and exceptional service delivery.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
