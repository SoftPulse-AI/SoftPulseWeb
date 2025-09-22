import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Mail, Calendar, Globe, Briefcase, Stethoscope, Code, Smartphone } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isQuickAction?: boolean;
}

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  response: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Pulse Bot, your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [showMainMenu, setShowMainMenu] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions: QuickAction[] = [
    {
      id: 'services',
      label: 'Services',
      icon: <Briefcase size={14} />,
      response: "We offer:\n• Custom Software Development\n• AI Solutions & Automation\n• Healthcare Technology\n• Mobile App Development\n• Web Development\n• Digital Marketing\n• IT Outsourcing & Support"
    },
    {
      id: 'products',
      label: 'Products',
      icon: <Stethoscope size={14} />,
      response: "Our healthcare products:\n• MedPulse (CMS) - Clinic management\n• SoftPulse (HIS) - Hospital system\n• DocPulse - Doctor scheduling\n• PatientPulse - Patient app\n• AI Healthcare Tools"
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <Phone size={14} />,
      response: "Contact us:\n📧 info@softpulseai.in\n📞 +91-9289425934\n🌐 www.softpulseai.in\n📅 Book: https://calendly.com/softpulseai/30min"
    },
    {
      id: 'demo',
      label: 'Book Demo',
      icon: <Calendar size={14} />,
      response: "Book a demo:\n📅 https://calendly.com/softpulseai/30min\n📧 info@softpulseai.in\n\nWe'll show you our solutions!"
    },
    {
      id: 'pricing',
      label: 'Pricing',
      icon: <Code size={14} />,
      response: "Transparent pricing for all projects. Contact us for a detailed quote:\n📧 info@softpulseai.in\n📅 https://calendly.com/softpulseai/30min"
    },
    {
      id: 'portfolio',
      label: 'Our Work',
      icon: <Globe size={14} />,
      response: "50+ projects delivered across healthcare, e-commerce, real estate. Currently working with 5 hospitals across India."
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Rule-based responses
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to SoftpulseAI Technologies. How can I assist you today?";
    }
    
    // Company information
    if (message.includes('company') || message.includes('about') || message.includes('who are you')) {
      return "SoftpulseAI Technologies is a forward-thinking solutions partner fueled by innovation, integrity, and excellence. We specialize in custom software development, AI solutions, healthcare technology, and digital transformation services.";
    }
    
    // Services
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
      return "We offer:\n• Custom Software Development\n• AI Solutions & Automation\n• Healthcare Technology\n• Mobile App Development\n• Web Development\n• Digital Marketing\n• IT Outsourcing & Support";
    }
    
    // Healthcare products
    if (message.includes('healthcare') || message.includes('hospital') || message.includes('clinic') || message.includes('medical')) {
      return "Our healthcare products include:\n• MedPulse (CMS) - End-to-end clinic management\n• SoftPulse (HIS) - Hospital information system\n• DocPulse - Doctor scheduling & communication\n• PatientPulse - App for patient engagement\n• AI Healthcare Tools - Diagnostics, predictions, analytics";
    }
    
    // Pricing
    if (message.includes('price') || message.includes('cost') || message.includes('how much') || message.includes('budget')) {
      return "We offer transparent pricing tailored to your project needs. For a detailed quote, please contact us at info@softpulseai.in or schedule a consultation at https://calendly.com/softpulseai/30min";
    }
    
    // Contact information
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
      return "You can reach us at:\n📧 Email: info@softpulseai.in\n📞 Phone: +91-9289425934\n🌐 Website: www.softpulseai.in\n📅 Schedule a call: https://calendly.com/softpulseai/30min";
    }
    
    // Portfolio/Projects
    if (message.includes('portfolio') || message.includes('project') || message.includes('work') || message.includes('experience')) {
      return "We have successfully delivered 50+ projects across various industries including healthcare, e-commerce, real estate, and service sectors. We're currently working with 5 hospitals across India and numerous other firms.";
    }
    
    // Technology stack
    if (message.includes('technology') || message.includes('tech stack') || message.includes('tools') || message.includes('platform')) {
      return "We use cutting-edge technologies including AI/ML, modern web frameworks, mobile development platforms, cloud solutions, and automation tools to deliver scalable, future-ready systems.";
    }
    
    // Team
    if (message.includes('team') || message.includes('developer') || message.includes('expert')) {
      return "Our team consists of 10+ experts including developers, AI/ML specialists, UI/UX designers, and DevOps engineers. We follow Scrum and Agile methodologies and are passionate about delivering excellence.";
    }
    
    // Industries
    if (message.includes('industry') || message.includes('sector') || message.includes('client')) {
      return "We serve various industries including:\n• Healthcare & Diagnostics\n• Automotive & Service Centers\n• Retail & E-commerce\n• Real Estate\n• Education & EdTech\n• Manufacturing\n• Finance & FinTech\n• Logistics & Supply Chain";
    }
    
    // Process
    if (message.includes('process') || message.includes('how do you work') || message.includes('methodology')) {
      return "Our engagement process includes:\n1. Discovery & Ideation\n2. Design & Planning\n3. Agile Development & QA\n4. Deployment & Training\n5. Monitoring & 24×7 Support";
    }
    
    // Default response
    return "I understand you're interested in our services. For more specific information, please contact us at info@softpulseai.in or visit our website at www.softpulseai.in. You can also schedule a consultation at https://calendly.com/softpulseai/30min";
  };

  const handleQuickAction = (action: QuickAction) => {
    const userMessage: Message = {
      id: Date.now(),
      text: action.label,
      isUser: true,
      timestamp: new Date(),
      isQuickAction: true
    };

    const botResponse: Message = {
      id: Date.now() + 1,
      text: action.response,
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setShowQuickActions(false);
    setShowMainMenu(false);
  };

  const handleBackToMenu = () => {
    setShowQuickActions(true);
    setShowMainMenu(true);
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: "What else can I help you with?",
      isUser: false,
      timestamp: new Date()
    }]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: Date.now() + 1,
      text: getBotResponse(inputValue),
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue('');
    setShowQuickActions(false);
    setShowMainMenu(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessageWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline break-all"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-30 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Open Pulse Bot"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 z-40 w-80 h-[360px] bg-background/95 backdrop-blur-xl border border-primary/20 rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white p-3 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={14} />
              </div>
              <div>
                <span className="font-bold text-sm">Pulse Bot</span>
                <div className="text-xs text-white/80">AI Assistant</div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {!showMainMenu && (
                <button
                  onClick={handleBackToMenu}
                  className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded text-xs"
                >
                  Menu
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded-lg ${
                    message.isUser
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'bg-muted/50 text-foreground border border-primary/10'
                  } ${message.isQuickAction ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30' : ''}`}
                >
                  <div className="flex items-start space-x-1">
                    {!message.isUser && <Bot size={12} className="mt-0.5 flex-shrink-0 text-cyan-600" />}
                    {message.isUser && <User size={12} className="mt-0.5 flex-shrink-0" />}
                    <div className="text-xs whitespace-pre-line leading-relaxed break-words overflow-wrap-anywhere">
                      {renderMessageWithLinks(message.text)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Quick Actions */}
            {showQuickActions && (
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground font-medium px-1">Quick Actions:</div>
                <div className="grid grid-cols-2 gap-1.5">
                  {quickActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleQuickAction(action)}
                      className="flex items-center space-x-1.5 p-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/20 rounded-lg transition-all duration-200 hover:scale-105 text-left"
                    >
                      <div className="text-cyan-600">{action.icon}</div>
                      <span className="text-xs font-medium text-foreground">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Action Buttons */}
          <div className="p-3 border-t border-primary/10 bg-background/50">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleQuickAction(quickActions[0])} // Services
                className="flex items-center justify-center space-x-1 p-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/20 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Briefcase size={12} />
                <span className="text-xs font-medium">Services</span>
              </button>
              <button
                onClick={() => handleQuickAction(quickActions[1])} // Products
                className="flex items-center justify-center space-x-1 p-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/20 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Stethoscope size={12} />
                <span className="text-xs font-medium">Products</span>
              </button>
              <button
                onClick={() => handleQuickAction(quickActions[2])} // Contact
                className="flex items-center justify-center space-x-1 p-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/20 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Phone size={12} />
                <span className="text-xs font-medium">Contact</span>
              </button>
              <button
                onClick={() => handleQuickAction(quickActions[3])} // Demo
                className="flex items-center justify-center space-x-1 p-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/20 hover:from-cyan-500/20 hover:to-purple-500/30 border border-cyan-500/30 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Calendar size={12} />
                <span className="text-xs font-medium">Book Demo</span>
              </button>
            </div>
            <div className="text-xs text-muted-foreground mt-2 text-center">
              Click buttons for instant responses
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
