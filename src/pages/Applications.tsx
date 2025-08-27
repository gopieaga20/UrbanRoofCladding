import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Snowflake, Shield, Settings } from 'lucide-react';

const Applications = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/e961c0b8-7c4b-4288-a9f4-c717de514e0c.png" 
              alt="Industrial Building Applications" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Applications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse uses of our high-quality PUF panels and metal solutions across multiple sectors.
            </p>
          </div>
        </div>

        {/* Buildings Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Building className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Buildings</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Residential */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg">Residential</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/a74fd313-8c82-4102-8a6a-0a1efe776b2d.png" 
                    alt="Residential Construction" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  PUF panels are used in walls, roofs, and floors to provide insulation and regulate temperature, reducing energy consumption.
                </p>
              </CardContent>
            </Card>

            {/* Commercial */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg">Commercial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/d9fb1dc2-882f-4ec7-b929-2d3060570674.png" 
                    alt="Commercial Buildings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Used in offices, retail spaces, and other commercial buildings to create comfortable and energy-efficient environments.
                </p>
              </CardContent>
            </Card>

            {/* Prefabricated and Modular */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg">Prefabricated & Modular</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/56e45f61-6740-420c-9f94-974606757bdd.png" 
                    alt="Prefabricated Construction" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Ideal for creating temporary structures like site offices, staff accommodations, and canteens on construction sites.
                </p>
              </CardContent>
            </Card>

            {/* Industrial Buildings */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg">Industrial Buildings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/e961c0b8-7c4b-4288-a9f4-c717de514e0c.png" 
                    alt="Industrial Buildings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Suitable for large industrial facilities where temperature control and structural integrity are crucial.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cold Storage Facilities */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Snowflake className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Cold Storage Facilities</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/8789586e-bd5d-4473-938d-aaa9fc46cdef.png" 
                    alt="Temperature-Controlled Warehouses" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Temperature-Controlled Warehouses</h3>
                <p className="text-gray-600">
                  PUF panels are used to construct walk-in freezers, chillers, and temperature-controlled warehouses, where maintaining specific temperatures is essential.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/e34d82c4-b22b-4ef2-868d-4b034c7facca.png" 
                    alt="Temperature-Controlled Transportation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Temperature-Controlled Transportation</h3>
                <p className="text-gray-600">
                  Used in insulated containers and vehicles for transporting temperature-sensitive goods with optimal thermal efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Clean Rooms and Laboratories */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Clean Rooms and Laboratories</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/3647a540-1500-466a-9ea8-94ca8a98e6ef.png" 
                    alt="Medical Facilities" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical & Pharmaceutical</h3>
                <p className="text-gray-600">
                  Essential for creating sterile environments in hospitals, pharmaceutical manufacturing, and biotechnology facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/57c0175b-fcf1-4028-93b5-eeeab4d3f8e1.png" 
                    alt="Laboratory" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Laboratories</h3>
                <p className="text-gray-600">
                  Used in clean rooms and laboratories where maintaining a sterile and controlled environment is critical for research and development.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Other Applications */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Settings className="h-8 w-8 text-blue-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Other Applications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Infrastructure Projects */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg">Infrastructure Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/49420d13-40fa-4601-9019-7f5f375c73dd.png" 
                    alt="Infrastructure Projects" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Used in roofing for airport terminals, metro stations, and shopping complexes providing superior structural solutions.
                </p>
              </CardContent>
            </Card>

            {/* Institutional Buildings */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg">Institutional Buildings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/4b47eba9-2e23-47b4-b3e8-b05757e3eb50.png" 
                    alt="Institutional Buildings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Applied in schools, hospitals, and laboratories for their safety, comfort, and energy efficiency benefits.
                </p>
              </CardContent>
            </Card>

            {/* Agricultural Structures */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg">Agricultural Structures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/76c32076-323c-4ec5-a4bf-35bfdf72bf9d.png" 
                    alt="Agricultural Buildings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Perfect for agricultural buildings such as poultry houses and storage facilities, providing optimal environmental control.
                </p>
              </CardContent>
            </Card>

            {/* Soundproof Partitions */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg">Soundproof Partitions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/d9fb1dc2-882f-4ec7-b929-2d3060570674.png" 
                    alt="Soundproof Solutions" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  The sandwiched structure makes them effective for noise reduction, suitable for soundproof partitions and enclosures.
                </p>
              </CardContent>
            </Card>

            {/* Specialized Applications */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg">Specialized Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/57c0175b-fcf1-4028-93b5-eeeab4d3f8e1.png" 
                    alt="Control Rooms" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Customized for specific needs like control rooms and noise-proof enclosures with tailored specifications.
                </p>
              </CardContent>
            </Card>

            {/* Process Industries */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600 text-lg">Process Industries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/lovable-uploads/667e1c96-8b72-49af-aad9-5b1910215b20.png" 
                    alt="Food Processing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Essential for food processing plants and pharmaceutical manufacturing sites requiring strict hygiene and temperature control.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Applications;
