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
      "We offer Team Building, Sales Growth, Network Development, Team Training, Product Grooming, Website Development, and Chatbot Solutions. Which service interests you?",
    "team building":
      "Our team building programs focus on creating high-performing teams through leadership development, communication skills, and performance optimization. Would you like to schedule a consultation?",
    "sales growth":
      "Our sales growth strategies have helped clients achieve up to 150% revenue increase. We focus on sales strategy, pipeline management, and market analysis. Interested in learning more?",
    "website development":
      "We create modern, responsive websites and chatbot solutions to enhance your digital presence. Our tech team specializes in cutting-edge web technologies.",
    pricing:
      "Our pricing varies based on your specific needs and project scope. I'd recommend scheduling a free consultation to discuss your requirements and get a customized quote.",
    contact:
      "You can reach us at singshubhu786@gmail.com or call +91 98765 43210. We're available Mon-Fri 9AM-6PM IST. Would you like me to help you schedule a meeting?",
    about:
      "Sales Nova is a results-driven consultancy firm focused on empowering businesses with strategies and tools to scale effectively. We build, train, and transform businesses for long-term success.",
    consultation:
      "Great! I can help you schedule a free consultation. Please provide your name, company, and preferred time, or you can fill out our contact form on the website.",
    default:
      "Thank you for your question! For detailed information about our services, I'd recommend speaking with our expert team. You can contact us at singshubhu786@gmail.com or schedule a consultation through our website.",
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    for (const key in predefinedResponses) {
      if (message.includes(key)) {
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
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Our Services", value: "services" },
    { text: "Pricing", value: "pricing" },
    { text: "Contact Info", value: "contact" },
    { text: "Schedule Consultation", value: "consultation" },
  ];

  const handleQuickAction = (value) => {
    setInputMessage(value);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 z-50 flex items-center justify-center transform hover:scale-110 cursor-pointer"
      >
        {isOpen ? (
          <i className="ri-close-line text-2xl"></i>
        ) : (
          <i className="ri-message-3-fill text-2xl"></i>
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-robot-fill text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold">Sales Nova Assistant</h3>
                <p className="text-xs text-blue-100">
                  Online • Typically replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-close-line text-lg"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
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
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 shadow-sm mr-4 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.value)}
                    className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full hover:bg-blue-200 transition-colors duration-300 cursor-pointer"
                  >
                    {action.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <i className="ri-send-plane-fill text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
