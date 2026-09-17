import React, { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Sales Nova Assistant. How can I help you with our consulting services today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = {
    hello: "Hello! Welcome to Sales Nova. How can I assist you today?",
    hi: "Hi there! I'm here to help you learn more about our consulting services.",
    services:
      "We offer Team Building, Sales Growth Consulting, Stockist & Network Development, Sales Team Training, Product Grooming, Website Development, and Chatbot Solutions. Which service interests you?",
    "team building":
      "Our team building programs focus on creating high-performing sales teams through leadership development, communication skills, and performance optimization. Would you like to schedule a free consultation?",
    "sales growth":
      "Our sales growth consulting helps businesses accelerate revenue through proven strategies, pipeline management, and market analysis. Shall I connect you with our expert team?",
    "network development":
      "We specialize in stockist recruitment and distribution network development for FMCG, pharma, ayurvedic, and OTC product businesses across India. Want to know more?",
    "team training":
      "Our comprehensive sales training programs cover product knowledge, field sales techniques, and performance coaching. Would you like to schedule a session?",
    "product grooming":
      "We help businesses with product strategy, market positioning, and brand development to maximize market appeal. Interested in a free consultation?",
    "website development":
      "We create modern, responsive business websites and AI-powered chatbot solutions to enhance your digital presence and generate leads. Shall I share more details?",
    pricing:
      "Our pricing is customized based on your specific needs and project scope. I'd recommend scheduling a free consultation to discuss your requirements and get a tailored quote.",
    contact:
      "You can reach us at salesnova786@gmail.com or call +91 7049006789. We're based in Bhopal, Madhya Pradesh, and serve clients across India. Would you like to fill out our contact form?",
    about:
      "Sales Nova is a results-driven sales and business consultancy based in Bhopal, India. We specialize in team building, sales growth, stockist network development, and digital solutions for FMCG, pharma, and ayurvedic businesses.",
    consultation:
      "Great! I can help you schedule a free consultation with our team. You can fill out the contact form on this page, call +91 7049006789, or email salesnova786@gmail.com.",
    fmcg:
      "We provide specialized consulting for FMCG businesses including team building, sales growth strategies, stockist network development, and product grooming. Would you like to know more?",
    pharma:
      "Sales Nova has expertise in pharma sales consulting — including distribution network development, team training, and product grooming for OTC and prescription products.",
    ayurvedic:
      "We help ayurvedic and herbal product businesses expand their distribution, build sales teams, and grow their market presence across India.",
    location:
      "Sales Nova is headquartered in Bhopal, Madhya Pradesh, India, and we serve clients across the country.",
    default:
      "Thank you for your question! For detailed information about our services, I'd recommend speaking with our expert team. You can contact us at salesnova786@gmail.com, call +91 7049006789, or scroll down to fill out our contact form.",
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    for (const key in predefinedResponses) {
      if (key !== "default" && message.includes(key)) {
        return predefinedResponses[key];
      }
    }
    return predefinedResponses["default"];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(currentInput),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Our Services", value: "services" },
    { text: "Pricing", value: "pricing" },
    { text: "Contact Info", value: "contact" },
    { text: "Free Consultation", value: "consultation" },
  ];

  const handleQuickAction = (value) => {
    const userMessage = {
      id: messages.length + 1,
      text: value,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(value),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat with Sales Nova Assistant" : "Open chat with Sales Nova Assistant"}
        aria-expanded={isOpen}
        aria-controls="chatbot-panel"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 transform cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-700 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        {isOpen ? (
          <i className="ri-close-line text-2xl" aria-hidden="true"></i>
        ) : (
          <i className="ri-message-3-fill text-2xl" aria-hidden="true"></i>
        )}
        {!isOpen && (
          <div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"
            aria-hidden="true"
          ></div>
        )}
      </button>

      {/* Chatbot Panel */}
      {isOpen && (
        <div
          id="chatbot-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Sales Nova Assistant chat"
          className="fixed bottom-20 right-4 z-50 flex h-[min(500px,calc(100vh-6rem))] w-[calc(100vw-2rem)] max-w-96 flex-col rounded-2xl border border-gray-200 bg-white shadow-2xl sm:bottom-24 sm:right-6"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center" aria-hidden="true">
                <i className="ri-robot-fill text-xl"></i>
              </div>
              <div>
                <p className="font-semibold">Sales Nova Assistant</p>
                <p className="text-xs text-blue-100">
                  Online · Typically replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-close-line text-lg" aria-hidden="true"></i>
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
            role="log"
            aria-label="Chat messages"
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isUser
                      ? "bg-blue-600 text-white ml-4"
                      : "bg-white text-gray-800 shadow-sm mr-4"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isUser ? "text-blue-100" : "text-gray-500"
                    }`}
                    aria-label={`Sent at ${message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start" aria-label="Sales Nova Assistant is typing">
                <div className="bg-white text-gray-800 shadow-sm mr-4 p-3 rounded-2xl">
                  <div className="flex space-x-1" aria-hidden="true">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.value)}
                    className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full hover:bg-blue-200 transition-colors duration-300 cursor-pointer"
                    aria-label={`Ask about ${action.text}`}
                  >
                    {action.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                aria-label="Type a message to Sales Nova Assistant"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                aria-label="Send message"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <i className="ri-send-plane-fill text-sm" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
