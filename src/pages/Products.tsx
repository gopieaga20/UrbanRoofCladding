
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  // Add timestamp for cache busting
  const cacheBuster = Date.now();
  
  const products = [
    {
      title: "Metal Roofing Sheets",
      description: "High-quality galvalume and GI roofing sheets with superior corrosion resistance",
      specifications: [
        "Thickness: 0.40mm to 0.60mm",
        "Material: Galvalume/GI",
        "Profile: Trapezoidal/Ribbed",
        "Finish: Color coated (RAL)",
        "Features: Corrosion-resistant, heat-reflective, durable"
      ],
      image: "/lovable-uploads/70ffd233-d566-4ce6-ac36-e87b40dc1385.png"
    },
    {
      title: "Profiled Roofing Panels",
      description: "Insulated roofing panels with excellent thermal performance",
      specifications: [
        "Thickness: 30mm to 100mm",
        "Core: PUF/PIR",
        "Density: 40±2 kg/m³",
        "Features: Thermal insulation, aesthetic finish"
      ],
      image: "/lovable-uploads/4554d310-78a9-4608-bb6f-d82de87fd4a9.png"
    },
    {
      title: "Cold Room Panels",
      description: "Specialized panels for temperature-controlled environments",
      specifications: [
        "Thickness: 50mm–150mm",
        "Core: PUF",
        "Conductivity: ≤ 0.024 W/mK",
        "Features: High insulation, hygienic surface"
      ],
      image: "/lovable-uploads/766da004-b621-44fe-b2cf-89fef5d88179.png"
    },
    {
      title: "Wall Partitions (PUF)",
      description: "Lightweight and reusable wall partition solutions",
      specifications: [
        "Thickness: 50mm to 100mm",
        "Features: Lightweight, reusable, cost-effective"
      ],
      image: "/lovable-uploads/10dbe646-543e-4c8e-84e5-5e0b44673fa2.png"
    },
    {
      title: "Cleanroom Panels",
      description: "Specialized panels for sterile and controlled environments",
      specifications: [
        "Surface: GI/SS",
        "Core: PUF/PIR",
        "Features: Fire-retardant, bacteria-resistant"
      ],
      image: "/lovable-uploads/e4188257-d740-4862-a17c-b902cc556f8c.png"
    },
    {
      title: "Flashings",
      description: "Essential accessories for leak prevention and weatherproofing",
      specifications: [
        "Types: Ridge, corner, drip edge",
        "Material: GI / Aluminum / Color Coated Steel",
        "Features: Leak prevention, custom-shaped"
      ],
      image: "/lovable-uploads/b6b874dc-2eb7-4946-b6d4-c7041f7a0c17.png"
    },
    {
      title: "Installation Accessories",
      description: "Complete range of installation accessories for professional fitting",
      specifications: [
        "Includes: Screws, butyl tapes, sealants, vents",
        "Features: Leak-proof and standardized"
      ],
      image: "/lovable-uploads/bbd139ac-051b-46ac-85da-321b09785e7d.png"
    },
    {
      title: "Metal Fabrications",
      description: "Custom metal fabrication for specialized requirements",
      specifications: [
        "Products: Frames, UPVC structures",
        "Material: MS, SS, UPVC",
        "Features: Rust-proof, custom designs"
      ],
      image: "/lovable-uploads/1abf0ef4-4929-466d-918b-206ef2268260.png"
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Image failed to load:', e.currentTarget.src);
    // Fallback to a placeholder or default image
    e.currentTarget.src = "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1920&q=80" 
              alt="Quality products" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality materials from trusted manufacturers for industrial and commercial applications
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={`${index}-${cacheBuster}`} className="h-full hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  key={`img-${index}-${cacheBuster}`}
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={handleImageError}
                  onLoad={() => console.log('Image loaded successfully:', product.image)}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {product.title}
                </CardTitle>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Specifications:</h4>
                  <div className="space-y-2">
                    {product.specifications.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need Detailed Specifications?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for detailed product specifications, technical data sheets, 
            and customized solutions for your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/919384818299?text=Hi, I need detailed product specifications for my project.', '_blank')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Product Details
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+919384818299'}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Speak to Expert
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
