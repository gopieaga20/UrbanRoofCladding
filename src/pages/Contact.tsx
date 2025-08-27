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
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=1920&q=80" 
              alt="Contact us" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for professional roofing and cladding solutions
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone Contact */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                    alt="Phone support" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="flex items-center text-blue-600">
                      <Phone className="h-6 w-6 mr-3" />
                      Phone Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      <div>+91 9384818299</div>
                      <div className="text-lg">+91 9384818298 / 97 / 96</div>
                    </div>
                    <p className="text-gray-600 mb-4">Call us directly for immediate assistance and consultation</p>
                    <button 
                      onClick={handleCall}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Call Now
                    </button>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80" 
                    alt="WhatsApp chat" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="flex items-center text-green-600">
                      <MessageCircle className="h-6 w-6 mr-3" />
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      <div>+91 9384818299</div>
                      <div className="text-lg">+91 9384818298 / 97 / 96</div>
                    </div>
                    <p className="text-gray-600 mb-4">Chat with us on WhatsApp for quick responses and quotes</p>
                    <button 
                      onClick={handleWhatsApp}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Chat on WhatsApp
                    </button>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Email Contact */}
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80" 
                    alt="Email communication" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="flex items-center text-blue-600">
                      <Mail className="h-6 w-6 mr-3" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-lg font-semibold text-gray-900 mb-2">urbanroofingandcladding@gmail.com</p>
                    <p className="text-gray-600 mb-4">Send us your project details and requirements</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button 
                        onClick={handleEmail}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Send Email
                      </button>
                      <div className="flex gap-2">
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
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>

          {/* Business Hours & Location */}
          <div className="space-y-6">
            {/* Business Hours */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80" 
                  alt="Business hours" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center text-blue-600">
                  <Clock className="h-6 w-6 mr-3" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80" 
                  alt="Our locations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center text-blue-600">
                  <MapPin className="h-6 w-6 mr-3" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Registered Office:</h4>
                  <p className="text-sm text-gray-600">
                    Flat No.58, Karnavur Road, Peerangimedu, Tindivanam, Tamil Nadu – 604001
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sales Office:</h4>
                  <p className="text-sm text-gray-600">
                    No.2/20, Vanniyar Mettustreet, Iyyappanthangal, Chennai – 600056
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl text-gray-900">
                Find Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242.93637724739986!2d80.13637326727849!3d13.036815359173008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1755263787169!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Urban Roofing and Cladding Solutions"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;
