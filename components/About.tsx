
import { Clock, Shield, Award, Users, CheckCircle, Target } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We pride ourselves on completing projects on schedule without compromising quality."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous quality checks and comes with comprehensive warranties."
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Our skilled artisans bring decades of experience to every construction detail."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your vision guides our process, ensuring the final result exceeds expectations."
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team Members" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-construction-gold/5 via-transparent to-construction-gold/10"></div>
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-construction-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-construction-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="glass-effect-strong inline-block px-6 py-2 rounded-full border border-construction-gold/30 mb-6">
            <span className="text-construction-gold font-medium text-sm">About Fast Track</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building Excellence with{" "}
            <span className="gradient-text">Precision</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Fast Track Constructions has been transforming architectural dreams 
            into stunning realities. We specialize in premium residential construction with an 
            unwavering commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-effect-strong border border-construction-gold/20 rounded-2xl p-6 text-center hover:border-construction-gold/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-construction-gold mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="glass-effect-strong rounded-2xl overflow-hidden border border-construction-gold/20">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Construction site with workers"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-construction-dark/40 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 glass-effect-strong border border-construction-gold/30 rounded-2xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-construction-gold/20 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-construction-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Award Winning</div>
                  <div className="text-xs text-muted-foreground">Construction Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="glass-effect-strong border border-construction-gold/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To deliver exceptional residential construction services that exceed client expectations 
                through innovative design, superior craftsmanship, and sustainable building practices.
              </p>
              
              <div className="space-y-3">
                {[
                  "Sustainable building practices and eco-friendly materials",
                  "Cutting-edge construction technology and methodologies",
                  "Transparent communication throughout the entire process",
                  "Comprehensive warranties and after-completion support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-construction-gold mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect-strong border border-construction-gold/20 rounded-2xl p-6 hover:border-construction-gold/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-construction-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-construction-gold/30 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-construction-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-construction-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
