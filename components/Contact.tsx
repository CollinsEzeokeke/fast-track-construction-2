"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Construction Avenue", "Metro City, MC 12345"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us Today",
      details: ["(555) 123-4567", "Mon-Fri: 8AM-6PM"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@fasttrackconstructions.com", "Response within 2 hours"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM"],
      action: "Schedule Visit"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-construction-gold/5 via-transparent to-construction-gold/10"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="glass-effect-strong inline-block px-6 py-2 rounded-full border border-construction-gold/30 mb-6">
            <span className="text-construction-gold font-medium text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your{" "}
            <span className="gradient-text">Dream Project</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to build your dream property? Get in touch with our expert team for a free consultation. 
            We're here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect-strong border border-construction-gold/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass-effect border-construction-gold/30 focus:border-construction-gold bg-transparent text-white"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass-effect border-construction-gold/30 focus:border-construction-gold bg-transparent text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="glass-effect border-construction-gold/30 focus:border-construction-gold bg-transparent text-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full glass-effect border border-construction-gold/30 focus:border-construction-gold bg-transparent text-white rounded-md px-3 py-2"
                  >
                    <option value="">Select project type</option>
                    <option value="duplex">Duplex</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="custom">Custom Home</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="glass-effect border-construction-gold/30 focus:border-construction-gold bg-transparent text-white min-h-[120px]"
                  placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-gold">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-effect-strong border border-construction-gold/20 hover:border-construction-gold/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-construction-gold/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-construction-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-construction-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3 text-construction-gold hover:text-construction-dark hover:bg-construction-gold/20 p-0 h-auto"
                    >
                      {info.action} →
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="glass-effect-strong border border-construction-gold/20 rounded-2xl p-6 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-construction-gold mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Interactive Map</h4>
                <p className="text-gray-300 text-sm">
                  Click to view our location and get directions
                </p>
                <Button variant="outline" size="sm" className="mt-4 border-construction-gold/30 text-construction-gold hover:bg-construction-gold/10">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
