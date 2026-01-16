'use client'
import React, { useState } from 'react'

const MinimalistChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      
      <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200"
        style={{ width: '60px', height: '60px' }}
      >
        {isOpen ? (
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window - Minimalist Design */}
      {isOpen && (
        <div 
          className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 ease-out opacity-100 scale-100"
          style={{ 
            width: '380px', 
            height: '580px',
            animation: 'slideUp 0.3s ease-out'
          }}
        >
          {/* Simple Header */}
          <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800">Chatbot AI</h3>
            <div className="flex items-center space-x-3">
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-6 bg-white" style={{ height: '420px', overflowY: 'auto' }}>
            {/* Robot Character */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Robot illustration matching the design */}
                <div className="relative w-24 h-32">
                  {/* Location pin */}
                  <div className="absolute -top-2 right-2 w-4 h-6 bg-orange-400 rounded-t-full relative">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-3 border-transparent border-t-orange-400"></div>
                  </div>
                  
                  {/* Robot head */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-14 h-12 bg-blue-500 rounded-xl">
                    {/* Eyes */}
                    <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-white rounded-full"></div>
                    <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-white rounded-full"></div>
                    {/* Mouth */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Robot body */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-2xl">
                    {/* Chest panel */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-blue-400 rounded-lg"></div>
                    {/* Buttons */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Left arm */}
                  <div className="absolute top-14 left-1 w-5 h-2.5 bg-blue-500 rounded-full"></div>
                  {/* Right arm */}
                  <div className="absolute top-14 right-1 w-5 h-2.5 bg-blue-500 rounded-full"></div>
                  
                  {/* Legs */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="w-3 h-6 bg-blue-500 rounded-b-lg"></div>
                    <div className="w-3 h-6 bg-blue-500 rounded-b-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Welcome Messages */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
                  </svg>
                </div>
                <div className="bg-gray-50 rounded-2xl rounded-tl-md p-3 max-w-xs">
                  <p className="text-sm text-gray-700">Привіт, чим Вам допомогти?</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
                  </svg>
                </div>
                <div className="bg-gray-50 rounded-2xl rounded-tl-md p-3 max-w-xs">
                  <p className="text-sm text-gray-700">Пропоную Вам кілька пристроїв, про які Ви можете мене запитати...</p>
                </div>
              </div>
            </div>

            {/* Category Buttons */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm rounded-full border border-gray-200 transition-colors">
                  Телефони
                </button>
                <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm rounded-full border border-gray-200 transition-colors">
                  Ноутбуки
                </button>
                <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm rounded-full border border-gray-200 transition-colors">
                  Навушники
                </button>
                <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm rounded-full border border-gray-200 transition-colors">
                  Столи
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm rounded-full border border-gray-200 transition-colors">
                  Геймерське крісло
                </button>
                <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm rounded-full border border-gray-200 transition-colors">
                  Клавіатура
                </button>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Введіть запит..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-700 placeholder-gray-400"
                />
              </div>
              
              {/* Microphone button */}
              <button className="p-3 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              
              {/* Send button */}
              <button 
                className="bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-colors"
                onClick={() => {
                  if (message.trim()) {
                    console.log('Sending message:', message)
                    setMessage('')
                  }
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default MinimalistChat