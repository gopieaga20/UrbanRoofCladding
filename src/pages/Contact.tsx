import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919384818299?text=Hi, I would like to know more about your services.', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919384818299';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:urbanroofingandcladding@gmail.com';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=1920&q=80"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 via-blue-600/80 to-teal-600/80" />
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
          <div className="w-full h-full border-r-8 border-b-8 border-white rounded-tl-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
            Get in touch with our team for professional roofing and cladding solutions
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Method Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 border-t-4" style={{ borderTopColor: '#11a9df' }}>
            <CardContent className="pt-8 pb-8 px-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#11a9df]/10 mb-5">
                <Phone className="h-8 w-8 text-[#11a9df]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone Support</h3>
              <div className="text-gray-700 font-semibold mb-1">+91 9384818299</div>
              <div className="text-gray-500 text-sm mb-4">+91 9384818298 / 97 / 96</div>
              <p className="text-gray-500 text-sm mb-6">Call us directly for immediate assistance and consultation</p>
              <Button
                className="bg-[#11a9df] hover:bg-[#0ea5db] text-white font-bold w-full"
                onClick={handleCall}
              >
                Call Now
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 border-t-4 border-t-green-500">
            <CardContent className="pt-8 pb-8 px-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-5">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <div className="text-gray-700 font-semibold mb-1">+91 9384818299</div>
              <div className="text-gray-500 text-sm mb-4">+91 9384818298 / 97 / 96</div>
              <p className="text-gray-500 text-sm mb-6">Chat with us on WhatsApp for quick responses and quotes</p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white font-bold w-full"
                onClick={handleWhatsApp}
              >
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 border-t-4" style={{ borderTopColor: '#11a9df' }}>
            <CardContent className="pt-8 pb-8 px-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#11a9df]/10 mb-5">
                <Mail className="h-8 w-8 text-[#11a9df]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <div className="text-gray-700 font-semibold text-sm mb-4 break-all">urbanroofingandcladding@gmail.com</div>
              <p className="text-gray-500 text-sm mb-6">Send us your project details and requirements</p>
              <Button
                className="bg-[#11a9df] hover:bg-[#0ea5db] text-white font-bold w-full mb-3"
                onClick={handleEmail}
              >
                Send Email
              </Button>
              <div className="flex justify-center gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61578285023663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/urbanroofing_2024/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Hours & Locations */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Business Hours */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#11a9df]">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#11a9df]/10">
                  <Clock className="h-5 w-5 text-[#11a9df]" />
                </div>
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-red-600 font-medium">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Locations */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-[#11a9df]">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#11a9df]/10">
                  <MapPin className="h-5 w-5 text-[#11a9df]" />
                </div>
                Our Locations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#11a9df] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Registered Office</h4>
                  <p className="text-sm text-gray-600">
                    Flat No.58, Karnavur Road, Peerangimedu, Tindivanam, Tamil Nadu – 604001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#11a9df] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sales Office</h4>
                  <p className="text-sm text-gray-600">
                    No.2/20, Vanniyar Mettustreet, Iyyappanthangal, Chennai – 600056
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="border border-gray-200 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-gray-900">
              Find Us
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242.93637724739986!2d80.13637326727849!3d13.036815359173008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1755263787169!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Urban Roofing and Cladding Solutions"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
