import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      name: "Supreme Delicious Food – Bangalore",
      type: "Industrial Roofing & Cladding",
      description: "This project involves supplying and installing high-performance metal roofing sheets and composite roof panels for Supreme Delicious Food's industrial facility in Bangalore. Our team ensures expert execution with high-quality materials for durable, long-lasting results.",
      status: "Completed",
      images: [
        "/lovable-uploads/c7625350-d813-4a22-b2cc-f99ce7d06719.png",
        "/lovable-uploads/1e8f60af-95bf-46e5-9783-50d349946221.png",
        "/lovable-uploads/7dad9ed9-4a26-47a4-a2f1-c1287678d1c7.png",
        "/lovable-uploads/6ca571d5-c799-4fa8-8169-3ce963e3a4e5.png",
        "/lovable-uploads/0057516a-d04e-4ced-a3ba-d2f6c5a8244a.png",
        "/lovable-uploads/c6b29714-a04a-4bab-a06f-18380bff88b7.png"
      ]
    },
    {
      id: 2,
      name: "ALPS ENGINEERING",
      type: "KUMHO ENGINEERING – Oragadam",
      description: "This project for ALPS ENGINEERING involved delivering precision-engineered metal roofing and composite roof panels for KUMHO ENGINEERING's facility in Oragadam. Our expert team managed the supply and installation, ensuring high-quality execution with durable materials.",
      status: "Completed",
      images: [
        "/lovable-uploads/cc7971aa-2563-40a8-8741-3a78c54eb277.png",
        "/lovable-uploads/26023ff9-15da-4b15-827c-f373ba37954d.png",
        "/lovable-uploads/0f47bc28-db9c-464b-8629-ca82647e78ea.png",
        "/lovable-uploads/ec4c6bc0-fb93-4889-92f3-67044b1d3992.png",
        "/lovable-uploads/16d9f8b6-5602-4779-93d9-b58c60effbd0.png",
        "/lovable-uploads/4313d84a-2eb7-4b79-b64f-613301ac336f.png"
      ]
    },
    {
      id: 3,
      name: "ALPS ENGINEERING",
      type: "ALPS ENGINEERING – Pallavaram",
      description: "Ongoing project for ALPS ENGINEERING in Pallavaram involving supply and installation of premium metal roofing and composite panels, executed with our trusted quality and expert team.",
      status: "Ongoing",
      images: [
        "/lovable-uploads/3e3a0818-0bc5-4951-b166-835f34a24b20.png",
        "/lovable-uploads/5b91c45d-196c-4db2-ae51-e305fdf72978.png",
        "/lovable-uploads/99d7ca72-2f5f-4e5e-88f9-609b6bc38d1b.png",
        "/lovable-uploads/8df670cc-a127-4386-b70c-698b1190984b.png",
        "/lovable-uploads/8a4ec136-9030-4f34-9d76-a9926dc23057.png"
      ]
    }
  ];

  const openLightbox = (imageIndex: number, projectId: number) => {
    setSelectedImageIndex(imageIndex);
    setSelectedProjectId(projectId);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setSelectedProjectId(null);
  };

  const getCurrentProject = () => {
    return projects.find(p => p.id === selectedProjectId);
  };

  const nextImage = () => {
    const currentProject = getCurrentProject();
    if (selectedImageIndex !== null && currentProject?.images) {
      setSelectedImageIndex((selectedImageIndex + 1) % currentProject.images.length);
    }
  };

  const prevImage = () => {
    const currentProject = getCurrentProject();
    if (selectedImageIndex !== null && currentProject?.images) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? currentProject.images.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section with Metal Roofing Background */}
        <div className="relative mb-16">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80" 
              alt="Metal Roofing Construction" 
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative text-center py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise in industrial roofing and cladding solutions across various sectors
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-gray-900 mb-2">
                      {project.name}
                    </CardTitle>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {project.type}
                      </Badge>
                      <Badge variant="outline" className="border-green-500 text-green-700">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <div 
                      key={index}
                      className="aspect-video overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => openLightbox(index, project.id)}
                    >
                      <img 
                        src={image}
                        alt={`${project.name} - Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your roofing and cladding requirements. 
            Our team is ready to deliver exceptional results for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/919384818299?text=Hi, I would like to discuss a new project with you.', '_blank')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+919384818299'}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call Now
            </button>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            {(() => {
              const currentProject = getCurrentProject();
              return currentProject && selectedImageIndex !== null ? (
                <>
                  <img
                    src={currentProject.images[selectedImageIndex]}
                    alt={`${currentProject.name} - Image ${selectedImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
                    {selectedImageIndex + 1} / {currentProject.images.length}
                  </div>
                </>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
