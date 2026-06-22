import { Card, CardContent } from '@/components/ui/card';
import { Building, Snowflake, Shield, Settings } from 'lucide-react';

const SectionHeader = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="flex items-center mb-8">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#11a9df]/10 mr-4">
      {icon}
    </div>
    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
  </div>
);

const AppCard = ({ image, alt, title, description }: { image: string; alt: string; title: string; description: string }) => (
  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden border border-gray-200">
    <div className="aspect-video overflow-hidden">
      <img src={image} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <CardContent className="p-5">
      <h3 className="text-base font-bold text-gray-900 mb-2" style={{ color: '#11a9df' }}>{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const Applications = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/e961c0b8-7c4b-4288-a9f4-c717de514e0c.png"
            alt="Industrial Building Applications"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 via-blue-600/80 to-teal-600/80" />
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
          <div className="w-full h-full border-r-8 border-b-8 border-white rounded-tl-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Applications
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
            Explore the diverse uses of our high-quality PUF panels and metal solutions across multiple sectors.
          </p>
        </div>
      </section>

      {/* Buildings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader icon={<Building className="h-6 w-6 text-[#11a9df]" />} title="Buildings" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AppCard
              image="/lovable-uploads/a74fd313-8c82-4102-8a6a-0a1efe776b2d.png"
              alt="Residential Construction"
              title="Residential"
              description="PUF panels are used in walls, roofs, and floors to provide insulation and regulate temperature, reducing energy consumption."
            />
            <AppCard
              image="/lovable-uploads/d9fb1dc2-882f-4ec7-b929-2d3060570674.png"
              alt="Commercial Buildings"
              title="Commercial"
              description="Used in offices, retail spaces, and other commercial buildings to create comfortable and energy-efficient environments."
            />
            <AppCard
              image="/lovable-uploads/56e45f61-6740-420c-9f94-974606757bdd.png"
              alt="Prefabricated Construction"
              title="Prefabricated & Modular"
              description="Ideal for creating temporary structures like site offices, staff accommodations, and canteens on construction sites."
            />
            <AppCard
              image="/lovable-uploads/e961c0b8-7c4b-4288-a9f4-c717de514e0c.png"
              alt="Industrial Buildings"
              title="Industrial Buildings"
              description="Suitable for large industrial facilities where temperature control and structural integrity are crucial."
            />
          </div>
        </div>
      </section>

      {/* Cold Storage Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader icon={<Snowflake className="h-6 w-6 text-[#11a9df]" />} title="Cold Storage Facilities" />
          <div className="grid md:grid-cols-2 gap-8">
            <AppCard
              image="/lovable-uploads/8789586e-bd5d-4473-938d-aaa9fc46cdef.png"
              alt="Temperature-Controlled Warehouses"
              title="Temperature-Controlled Warehouses"
              description="PUF panels are used to construct walk-in freezers, chillers, and temperature-controlled warehouses, where maintaining specific temperatures is essential."
            />
            <AppCard
              image="/lovable-uploads/e34d82c4-b22b-4ef2-868d-4b034c7facca.png"
              alt="Temperature-Controlled Transportation"
              title="Temperature-Controlled Transportation"
              description="Used in insulated containers and vehicles for transporting temperature-sensitive goods with optimal thermal efficiency."
            />
          </div>
        </div>
      </section>

      {/* Clean Rooms and Laboratories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader icon={<Shield className="h-6 w-6 text-[#11a9df]" />} title="Clean Rooms and Laboratories" />
          <div className="grid md:grid-cols-2 gap-8">
            <AppCard
              image="/lovable-uploads/3647a540-1500-466a-9ea8-94ca8a98e6ef.png"
              alt="Medical Facilities"
              title="Medical & Pharmaceutical"
              description="Essential for creating sterile environments in hospitals, pharmaceutical manufacturing, and biotechnology facilities."
            />
            <AppCard
              image="/lovable-uploads/57c0175b-fcf1-4028-93b5-eeeab4d3f8e1.png"
              alt="Laboratory"
              title="Research Laboratories"
              description="Used in clean rooms and laboratories where maintaining a sterile and controlled environment is critical for research and development."
            />
          </div>
        </div>
      </section>

      {/* Other Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader icon={<Settings className="h-6 w-6 text-[#11a9df]" />} title="Other Applications" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AppCard
              image="/lovable-uploads/49420d13-40fa-4601-9019-7f5f375c73dd.png"
              alt="Infrastructure Projects"
              title="Infrastructure Projects"
              description="Used in roofing for airport terminals, metro stations, and shopping complexes providing superior structural solutions."
            />
            <AppCard
              image="/lovable-uploads/4b47eba9-2e23-47b4-b3e8-b05757e3eb50.png"
              alt="Institutional Buildings"
              title="Institutional Buildings"
              description="Applied in schools, hospitals, and laboratories for their safety, comfort, and energy efficiency benefits."
            />
            <AppCard
              image="/lovable-uploads/76c32076-323c-4ec5-a4bf-35bfdf72bf9d.png"
              alt="Agricultural Buildings"
              title="Agricultural Structures"
              description="Perfect for agricultural buildings such as poultry houses and storage facilities, providing optimal environmental control."
            />
            <AppCard
              image="/lovable-uploads/d9fb1dc2-882f-4ec7-b929-2d3060570674.png"
              alt="Soundproof Solutions"
              title="Soundproof Partitions"
              description="The sandwiched structure makes them effective for noise reduction, suitable for soundproof partitions and enclosures."
            />
            <AppCard
              image="/lovable-uploads/57c0175b-fcf1-4028-93b5-eeeab4d3f8e1.png"
              alt="Control Rooms"
              title="Specialized Applications"
              description="Customized for specific needs like control rooms and noise-proof enclosures with tailored specifications."
            />
            <AppCard
              image="/lovable-uploads/667e1c96-8b72-49af-aad9-5b1910215b20.png"
              alt="Food Processing"
              title="Process Industries"
              description="Essential for food processing plants and pharmaceutical manufacturing sites requiring strict hygiene and temperature control."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applications;
