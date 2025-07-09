"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, Bot, User, X, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

interface AnimatedChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnimatedChatbot = ({ isOpen, onClose }: AnimatedChatbotProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    "I want to build a duplex",
    "Looking for property consultation",
    "Need a construction quote",
    "Timeline for new project"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] animate-slide-up">
      <div className="glass-effect-light border border-construction-gold/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl transform transition-all duration-300 ease-out">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-construction-gold/20 bg-gradient-to-r from-construction-gold/10 to-transparent">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-construction-gold/30 rounded-full flex items-center justify-center animate-pulse">
              <Bot className="h-5 w-5 text-construction-gold" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">AI Construction Assistant</h3>
              <p className="text-xs text-muted-foreground flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Online • Ready to help
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 hover:bg-construction-gold/10 transition-colors"
            >
              <Minimize2 className="h-4 w-4 text-muted-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 hover:bg-destructive/10 transition-colors"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* Chat Content */}
        <div className={`transition-all duration-300 ease-in-out ${isMinimized ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-transparent to-construction-gold/5 scrollbar-thin scrollbar-thumb-construction-gold/30">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex space-x-3 animate-fade-in ${message.isBot ? "" : "justify-end"}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {message.isBot && (
                      <div className="w-8 h-8 bg-construction-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-construction-gold" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
                        message.isBot
                          ? "glass-effect-light border border-construction-gold/20 text-foreground"
                          : "bg-construction-gold text-construction-dark ml-auto shadow-construction-gold/20"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    
                    {!message.isBot && (
                      <div className="w-8 h-8 bg-construction-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-construction-gold" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex space-x-3 animate-fade-in">
                    <div className="w-8 h-8 bg-construction-gold/30 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-construction-gold" />
                    </div>
                    <div className="glass-effect-light border border-construction-gold/20 px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-construction-gold rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-construction-gold rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-construction-gold rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="p-3 border-t border-construction-gold/20 bg-gradient-to-r from-transparent to-construction-gold/5">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs px-3 py-1.5 glass-effect-light border border-construction-gold/20 hover:border-construction-gold/40 rounded-full transition-all duration-200 hover:shadow-sm hover:scale-105"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-construction-gold/20 bg-gradient-to-r from-construction-gold/5 to-transparent">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about construction services..."
                    className="flex-1 glass-effect-light border-construction-gold/30 focus:border-construction-gold bg-transparent transition-all duration-200 focus:shadow-md"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    className="bg-construction-gold hover:bg-construction-gold-dark text-construction-dark px-4 shadow-construction-gold/20 transition-all duration-200 hover:shadow-lg hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
