import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, ZoomIn, Loader2, AlertCircle, ChevronDown } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { Project } from '@/types/project';

const INITIAL_COUNT = 3;

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      const { data, error: err } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (err) {
        setError('Failed to load projects. Please try again later.');
      } else {
        setProjects(data as Project[]);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  const openLightbox = (imageIndex: number, projectId: string) => {
    setSelectedImageIndex(imageIndex);
    setSelectedProjectId(projectId);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setSelectedProjectId(null);
  };

  const getCurrentProject = () => projects.find(p => p.id === selectedProjectId);

  const nextImage = () => {
    const proj = getCurrentProject();
    if (selectedImageIndex !== null && proj?.images) {
      setSelectedImageIndex((selectedImageIndex + 1) % proj.images.length);
    }
  };

  const prevImage = () => {
    const proj = getCurrentProject();
    if (selectedImageIndex !== null && proj?.images) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? proj.images.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      overlayRef.current?.focus();
    }
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-600 to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            alt="Metal Roofing Construction"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 via-blue-600/80 to-teal-600/80" />
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
          <div className="w-full h-full border-l-8 border-b-8 border-white rounded-tr-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Our Projects
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
            Showcasing our expertise in industrial roofing and cladding solutions across various sectors
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="h-10 w-10 animate-spin text-[#11a9df]" />
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <AlertCircle className="h-12 w-12 text-red-400" />
            <p className="text-gray-600 text-lg">{error}</p>
            <Button
              variant="outline"
              className="border-[#11a9df] text-[#11a9df]"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-500 text-lg">No projects found. Check back soon!</p>
          </div>
        )}

        {/* Projects list */}
        {!loading && !error && projects.length > 0 && (
          <>
            <div className="space-y-16">
              {visibleProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                  <CardHeader className="border-b border-gray-100 bg-gray-50/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {project.name}
                        </CardTitle>
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge className="bg-[#11a9df]/10 text-[#11a9df] border border-[#11a9df]/20 font-medium">
                            {project.type}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={
                              project.status === 'Completed'
                                ? 'border-green-500 text-green-700 bg-green-50'
                                : 'border-orange-500 text-orange-700 bg-orange-50'
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mt-3">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-6">
                    {project.images && project.images.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.images.map((image, index) => (
                          <div
                            key={index}
                            className="aspect-video overflow-hidden rounded-lg cursor-pointer group relative"
                            onClick={() => openLightbox(index, project.id)}
                          >
                            <img
                              src={image}
                              alt={`${project.name} - Image ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                              <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 text-sm italic">No images available for this project.</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* More / Less Projects toggle */}
            {hasMore && (
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#11a9df] text-[#11a9df] hover:bg-[#11a9df] hover:text-white font-bold px-10 gap-2"
                  onClick={() => setShowAll(prev => !prev)}
                >
                  {showAll ? (
                    <>Show Less</>
                  ) : (
                    <>
                      More Projects
                      <ChevronDown className="h-5 w-5" />
                      <span className="ml-1 bg-[#11a9df] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {projects.length - INITIAL_COUNT}
                      </span>
                    </>
                  )}
                </Button>
              </div>
            )}
          </>
        )}

        {/* CTA Section */}
        <section className="text-center mt-20 bg-gray-50 rounded-xl p-12 border border-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your roofing and cladding requirements.
            Our team is ready to deliver exceptional results for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#11a9df] hover:bg-[#0ea5db] text-white font-bold shadow-lg px-8"
              onClick={() => window.open('https://wa.me/919384818299?text=Hi, I would like to discuss a new project with you.', '_blank')}
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#11a9df] text-[#11a9df] hover:bg-[#11a9df] hover:text-white font-bold shadow-lg px-8"
              onClick={() => window.location.href = 'tel:+919384818299'}
            >
              Call Now
            </Button>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 outline-none"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative max-w-5xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white z-10 bg-black/40 hover:bg-black/70 rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white z-10 bg-black/40 hover:bg-black/70 rounded-full p-3 transition-colors"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            {(() => {
              const currentProject = getCurrentProject();
              return currentProject && selectedImageIndex !== null ? (
                <>
                  <img
                    src={currentProject.images[selectedImageIndex]}
                    alt={`${currentProject.name} - Image ${selectedImageIndex + 1}`}
                    className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg shadow-2xl"
                  />
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-1.5 rounded-full text-sm font-medium">
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
