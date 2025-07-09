"use client";

import { Send, MessageCircle, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export const AIContact = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your AI construction assistant. How can I help you with your project today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "I want to build a duplex",
    "Looking for property consultation",
    "Need a construction quote",
    "Timeline for new project"
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("duplex")) {
      return "Great choice! Duplexes are excellent investments. For a standard duplex, we typically complete construction in 4-6 months. Our duplex packages start from $150,000 and include modern finishes, energy-efficient systems, and 2-year warranty. Would you like to schedule a consultation to discuss your specific requirements?";
    }
    
    if (lowerMessage.includes("consultation") || lowerMessage.includes("meeting")) {
      return "I'd be happy to arrange a consultation! Our senior project managers are available for free consultations Monday-Friday 9AM-6PM. During the consultation, we'll discuss your vision, budget, timeline, and provide preliminary estimates. Would you prefer an in-person meeting at our office or a virtual consultation?";
    }
    
    if (lowerMessage.includes("quote") || lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return "For accurate pricing, I'll need a few details about your project. Our residential construction typically ranges: Bungalows: $80,000-$120,000 | Duplexes: $150,000-$250,000 | Custom Homes: $200,000+. Factors affecting cost include size, finishes, location, and special features. Can you tell me more about what type of property you're considering?";
    }
    
    if (lowerMessage.includes("timeline") || lowerMessage.includes("time") || lowerMessage.includes("when")) {
      return "Our typical construction timelines are: Bungalows (3-4 months), Duplexes (4-6 months), Custom Homes (6-8 months). Timeline depends on design complexity, permits, weather, and material availability. We provide detailed project schedules and regular updates throughout construction. What type of project are you planning?";
    }
    
    if (lowerMessage.includes("materials") || lowerMessage.includes("quality")) {
      return "We use only premium materials from trusted suppliers. Our standard includes: engineered lumber framing, energy-efficient windows, quality roofing materials, modern electrical/plumbing systems, and designer finishes. All materials come with manufacturer warranties, and we provide a comprehensive 2-year warranty on workmanship. Would you like details about our material upgrade options?";
    }
    
    return "Thank you for your question! For detailed information about your specific needs, I recommend speaking with one of our project specialists. They can provide personalized guidance on construction options, timelines, and pricing. Would you like me to schedule a free consultation for you?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Instant{" "}
              <span className="gradient-text">Answers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI construction assistant is here 24/7 to answer your questions and help plan your project.
            </p>
          </div>

          {/* Chat Interface */}
          <div className="construction-card max-w-3xl mx-auto">
            {/* Chat Header */}
            <div className="flex items-center space-x-3 pb-4 border-b border-border">
              <div className="w-10 h-10 bg-construction-gold/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-construction-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Construction Assistant</h3>
                <p className="text-sm text-muted-foreground">Online • Responds instantly</p>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 py-6 max-h-96 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex space-x-3 ${message.isBot ? "" : "justify-end"}`}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 bg-construction-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-construction-gold" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.isBot
                        ? "bg-muted text-foreground"
                        : "bg-construction-gold text-construction-dark ml-auto"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                  
                  {!message.isBot && (
                    <div className="w-8 h-8 bg-construction-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-construction-gold" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-construction-gold/20 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-construction-gold" />
                  </div>
                  <div className="bg-muted px-4 py-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-construction-gold rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-construction-gold rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-construction-gold rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-sm px-3 py-2 bg-muted hover:bg-construction-gold/20 rounded-full transition-colors duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="flex space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about construction services, pricing, timelines..."
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="btn-gold px-4">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
