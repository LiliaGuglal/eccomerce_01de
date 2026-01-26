'use client'
import React, { useState } from 'react'

const MinimalistChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
      
      {/* Floating Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-white hover:bg-gray-50 text-gray-800 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 ${isOpen ? 'scale-0' : 'scale-100'}`}
          style={{ width: '70px', height: '70px' }}
        >
          <div className="w-10 h-6 mx-auto relative">
            <img 
              src="/bot_1.png" 
              alt="Dark bot" 
              className="absolute top-0 left-0 w-6 h-6 object-contain animate-bounce"
              style={{ animationDelay: '0s' }}
            />
            <img 
              src="/bot_2.png" 
              alt="Light bot" 
              className="absolute top-0 right-0 w-6 h-6 object-contain animate-bounce"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
        </button>
      </div>

      {/* Full Screen Chat Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false)
            }
          }}
        >
          {/* Chat Panel - Slides in from right */}
          <div 
            className="w-full md:max-w-md h-full bg-gray-100 shadow-2xl flex flex-col"
            style={{ 
              animation: 'slideInRight 0.5s ease-out forwards'
            }}
          >
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-100 relative" style={{ backgroundColor: '#EFEFEF' }}>
            <div className="flex items-center justify-between">
              
              {/* 1. Кнопка закриття (Зліва) */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* 2. Заголовок (По центру) */}
              <div className="text-center flex-1">
                <h2 className="text-lg font-semibold text-gray-800">Chatbot AI</h2>
              </div>

              {/* 3. Іконка чату (Справа) */}
              <div className="p-2 text-gray-500">
                  <button className="text-gray-500 hover:text-gray-700 transition-colors p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
              </div>

            </div>
          </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: '#EFEFEF' }}>
              {/* Welcome Section */}
              <div className="text-center mb-8">
                <div className="w-42 h-42 mx-auto mt-40 mb-4 bg-none rounded-full flex items-center justify-center">
                  <img 
                    src="/say-hi.png" 
                    alt="Say Hi" 
                    className="w-42 h-42 object-contain"
                  />
                </div>
              </div>

              {/* Sample Messages */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm max-w-sm">
                    <div className="flex items-start space-x-2">
                      <img 
                        src="/sparkles-sharp.png" 
                        alt="Sparkles" 
                        className="w-4 h-4 object-contain mt-0.5 flex-shrink-0"
                      />
                      <p className="text-gray-600">Привіт!👋 Чим Вам допомогти?</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  {/* Збільшена ширина max-w-[420px] для кнопок */}
                  <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm max-w-[420px]">
                    <div className="flex items-start space-x-2 mb-3">
                      <img 
                        src="/sparkles-sharp.png" 
                        alt="Sparkles" 
                        className="w-4 h-4 object-contain mt-0.5 flex-shrink-0"
                      />
                      <p className="text-gray-600">Пропоную Вам кілька пристроїв, про які Ви можете мене запитати...</p>
                    </div>
                    
                    {/* Кнопки в одному контейнері з flex-wrap */}
                    <div className="flex flex-wrap gap-2">
                      {['Телефон', 'Ноутбук', 'Навушники', 'Стіл', 'Геймерське крісло', 'Клавіатура'].map((item) => (
                        <button 
                          key={item}
                          className="bg-white hover:bg-gray-50 text-gray-600 px-3 py-2 rounded-full border border-black transition-colors text-sm whitespace-nowrap"
                          onClick={() => setMessage(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input Area */}
            <div className="p-4" style={{ backgroundColor: '#EFEFEF' }}>
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative flex items-center">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && message.trim()) {
                        console.log('Sending message:', message)
                        setMessage('')
                      }
                    }}
                    placeholder="Введіть ваше повідомлення..."
                    className="w-full px-4 py-3 bg-white border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-800 placeholder-gray-500 shadow-sm"
                  />
                  {/* Voice Input Button */}
                  <button className="p-3 text-gray-500 hover:text-gray-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                </div>                
                
                <button 
                  className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-2xl transition-all duration-200 shadow-lg"
                  onClick={() => {
                    if (message.trim()) {
                      console.log('Sending message:', message)
                      setMessage('')
                    }
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MinimalistChat