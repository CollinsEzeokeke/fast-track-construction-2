"use client";

import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Homeowner",
      property: "Modern Duplex, Downtown District",
      content: "Fast Track Constructions exceeded every expectation. From initial consultation to final handover, their professionalism and attention to detail was remarkable. Our duplex is not just a house, it's our dream home.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Investor",
      property: "Luxury Townhouse Complex",
      content: "Working with Fast Track on multiple properties has been incredible. Their timeline accuracy and build quality consistently deliver excellent ROI. They understand both the technical and business sides perfectly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Family Builder",
      property: "Custom Family Home, Hillside Estates",
      content: "The team made our custom home vision a reality. Every detail was thoughtfully executed, and their sustainable building practices aligned perfectly with our values. Couldn't be happier with the result.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Homeowner",
      property: "Heritage Bungalow Renovation",
      content: "Fast Track transformed our old bungalow into a modern masterpiece while preserving its historic charm. Their craftsmanship is outstanding, and they completed everything ahead of schedule.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-construction-gold/10 via-transparent to-construction-gold/5"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="glass-effect-strong inline-block px-6 py-2 rounded-full border border-construction-gold/30 mb-6">
            <span className="text-construction-gold font-medium text-sm">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real stories from real clients who trusted us with their dream properties. 
            Their satisfaction is our greatest achievement.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass-effect-strong border border-construction-gold/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 opacity-20">
              <Quote className="h-16 w-16 text-construction-gold" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-construction-gold fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-white text-center leading-relaxed mb-8 font-light">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-construction-gold/30"
                />
                <div className="text-center">
                  <div className="text-lg font-semibold text-construction-gold">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-gray-300">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-xs text-gray-400">
                    {testimonials[currentIndex].property}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-construction-gold scale-125"
                  : "bg-construction-gold/30 hover:bg-construction-gold/50"
              }`}
            />
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`glass-effect-strong border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                index === currentIndex % 3
                  ? "border-construction-gold/40 shadow-2xl shadow-construction-gold/10"
                  : "border-construction-gold/20 hover:border-construction-gold/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-construction-gold fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>

              {/* Client */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border border-construction-gold/30"
                />
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
