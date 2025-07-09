import { Clock, Shield, Palette, Users, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Services = () => {
  console.log('Services component is rendering');
  
  const services = [
    {
      icon: Clock,
      title: "Guaranteed ROI Performance",
      description: "Our premium constructions deliver 15-25% higher property values than market average, with guaranteed completion dates that protect your investment timeline.",
      features: ["Property Value Increase Guarantee", "Timeline Insurance", "Market Analysis Reports", "Resale Value Optimization"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80",
      savings: "Save $15,000+ in potential delays"
    },
    {
      icon: Shield,
      title: "Zero-Risk Construction", 
      description: "Comprehensive insurance coverage, 25-year structural warranty, and payment protection guarantee. You pay nothing if we don't deliver exactly what we promised.",
      features: ["Money-Back Guarantee", "Full Insurance Coverage", "Quality Defect Protection", "Legal Compliance Assurance"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      savings: "Worth $50,000+ in peace of mind"
    },
    {
      icon: Palette,
      title: "All-Inclusive Luxury Package",
      description: "From permits to interior design - we handle everything. No hidden costs, no surprise expenses, no contractor coordination headaches.",
      features: ["Permit Processing Included", "Interior Design Service", "All Trades Coordination", "Fixed-Price Contract"],
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      savings: "Save $25,000+ in coordination costs"
    },
    {
      icon: Users,
      title: "Premium Concierge Service",
      description: "Dedicated project manager, 24/7 communication, weekly progress reports, and priority support. Experience construction without the stress.",
      features: ["Personal Project Manager", "24/7 Support Hotline", "Weekly Video Updates", "Priority Materials Access"],
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      savings: "Time savings worth $10,000+"
    }
  ];

  console.log('Services data:', services);

  return (
    <section id="services" className="py-24 relative bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/10"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-amber-500/30 mb-6">
            <span className="text-amber-500 font-medium text-sm">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Fast Track</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge construction techniques with time-tested craftsmanship 
            to deliver exceptional residential properties that stand the test of time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            console.log(`Rendering service ${index}:`, service.title);
            return (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:scale-[1.02]">
                  {/* Service Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-amber-500/30">
                        <service.icon className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-200">
                          <CheckCircle className="h-4 w-4 text-amber-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Value Highlight */}
                    <div className="bg-slate-700/50 backdrop-blur-sm border border-amber-500/30 rounded-lg p-3 mt-4">
                      <div className="text-amber-500 font-semibold text-sm mb-1">💰 Client Value</div>
                      <div className="text-gray-200 text-sm">{service.savings}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-amber-500 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-amber-500 mb-2">15+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-amber-500" />
              </div>
              <div className="text-3xl font-bold text-amber-500 mb-2">25</div>
              <div className="text-gray-300 text-sm">Year Warranty</div>
            </div>
          </div>
        </div>

        {/* Value Proposition CTA */}
        <div className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm inline-block p-8 rounded-2xl border border-amber-500/30 max-w-4xl">
            <h3 className="text-3xl font-semibold text-white mb-4">Why Choose Fast Track? Simple.</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6 text-left">
              <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded-xl border border-amber-500/20">
                <div className="text-amber-500 font-bold text-lg mb-2">💸 Save Money</div>
                <p className="text-gray-300 text-sm">Average client saves $100,000+ through our efficiency and no-surprise pricing</p>
              </div>
              <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded-xl border border-amber-500/20">
                <div className="text-amber-500 font-bold text-lg mb-2">⏰ Save Time</div>
                <p className="text-gray-300 text-sm">Complete projects 30% faster than industry average with our streamlined process</p>
              </div>
              <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded-xl border border-amber-500/20">
                <div className="text-amber-500 font-bold text-lg mb-2">🛡️ Zero Stress</div>
                <p className="text-gray-300 text-sm">Full project management, insurance coverage, and quality guarantees included</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 150+ satisfied clients who chose the smart way to build. Get your free consultation and discover why we're Metro City's #1 choice for luxury residential construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold shadow-amber-500/20 text-lg px-8 py-3">
                Get Free Consultation Worth $500
              </Button>
              <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10 text-lg px-8 py-3">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
