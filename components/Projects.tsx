import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Projects = () => {
  console.log('Projects component is rendering');
  
  const projects = [
    {
      id: 1,
      title: "Modern Duplex Villa",
      location: "Downtown District", 
      type: "Duplex",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      description: "Luxury duplex featuring contemporary design with premium finishes and smart home integration. Delivered 2 weeks ahead of schedule with 23% property value increase.",
      features: ["4 Bedrooms", "3 Bathrooms", "2-Car Garage", "Smart Home"],
      value: "+23% Property Value",
      timeline: "Completed 2 weeks early"
    },
    {
      id: 2,
      title: "Heritage Bungalow Restoration",
      location: "Garden Heights",
      type: "Bungalow", 
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
      description: "Classic bungalow restoration preserving historical charm while adding modern amenities and energy efficiency upgrades. Featured in Metro Home & Design magazine.",
      features: ["3 Bedrooms", "2 Bathrooms", "Heritage Preservation", "Solar Integration"],
      value: "Featured in Metro Home & Design",
      timeline: "Historic restoration in 4 months"
    },
    {
      id: 3,
      title: "Contemporary Townhouse Complex",
      location: "Metro Valley",
      type: "Townhouse",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Award-winning townhouse design with rooftop terraces and premium urban living features. Winner of 2024 Residential Excellence Award.",
      features: ["3 Bedrooms", "2.5 Bathrooms", "Rooftop Deck", "City Views"],
      value: "2024 Excellence Award Winner",
      timeline: "6-unit complex in 5 months"
    },
    {
      id: 4,
      title: "Executive Family Estate",
      location: "Hillside Estates",
      type: "Custom Home",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Ultra-luxury custom estate with panoramic valley views, wine cellar, and home theater. Our flagship project showcasing premium craftsmanship.",
      features: ["5 Bedrooms", "4 Bathrooms", "Wine Cellar", "Home Theater"],
      value: "$2.1M Property Value",
      timeline: "Luxury build in 7 months"
    },
    {
      id: 5,
      title: "Artist Loft Studios",
      location: "Arts District",
      type: "Multi-Unit",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Innovative studio complex designed for creative professionals with flexible spaces, natural lighting, and collaborative areas. 100% pre-leased before completion.",
      features: ["12 Studios", "Rooftop Garden", "Creative Spaces", "Community Hub"],
      value: "100% Pre-leased",
      timeline: "Multi-unit in 6 months"
    },
    {
      id: 6,
      title: "Net-Zero Eco Residence",
      location: "Green Valley",
      type: "Eco Home",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Pioneering net-zero energy home with integrated solar systems, rainwater harvesting, and sustainable materials. Carbon neutral with energy bill savings of $3,200/year.",
      features: ["4 Bedrooms", "Net-Zero Energy", "Rainwater System", "Sustainable Materials"],
      value: "$3,200/year energy savings",
      timeline: "Green build in 5 months"
    }
  ];

  console.log('Projects data:', projects);

  return (
    <section id="projects" className="py-24 relative bg-slate-100">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-white/70 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-amber-500/30 mb-6">
            <span className="text-amber-600 font-medium text-sm">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Latest{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed residential projects that showcase our commitment 
            to quality craftsmanship, innovative design, and sustainable building practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            console.log(`Rendering project ${index}:`, project.title);
            return (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="bg-white/70 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      width={1000}
                      height={1000}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Button size="sm" className="w-full bg-white/20 backdrop-blur-sm border border-amber-500/40 text-amber-600 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-amber-500/40 text-amber-700 text-sm font-semibold rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-slate-600 mb-3">
                        <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-slate-800 flex items-center">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Project Success Metrics */}
                    <div className="grid grid-cols-1 gap-2">
                      <div className="bg-white/50 backdrop-blur-sm border border-amber-500/20 rounded-lg p-3">
                        <div className="text-amber-600 font-semibold text-sm mb-1">🏆 Achievement</div>
                        <div className="text-slate-800 text-sm">{project.value}</div>
                      </div>
                      <div className="bg-white/50 backdrop-blur-sm border border-amber-500/20 rounded-lg p-3">
                        <div className="text-amber-600 font-semibold text-sm mb-1">⚡ Timeline</div>
                        <div className="text-slate-800 text-sm">{project.timeline}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/70 backdrop-blur-sm inline-block p-8 rounded-2xl border border-amber-500/30">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-700 mb-6 max-w-md mx-auto">
              Let&apos;s discuss your vision and create something extraordinary together.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold shadow-amber-500/20">
              View All Projects
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
