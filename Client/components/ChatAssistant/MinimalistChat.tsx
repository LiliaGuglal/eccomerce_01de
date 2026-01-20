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
        
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
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
            {/* Bot illustrations with animation */}
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
            className="w-full md:max-w-md h-full bg-white shadow-2xl transform transition-all duration-500 ease-out"
            style={{ 
              animation: 'slideInRight 0.5s ease-out forwards'
            }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <img 
                      src="/bot_1.png" 
                      alt="Chat bot" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">AI Assistant</h2>
                    <p className="text-blue-100 text-sm">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-200 transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-6 bg-gray-50 overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
              {/* Welcome Section */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <img 
                    src="/say-hi.png" 
                    alt="Say Hi" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Привіт! 👋</h3>
                <p className="text-gray-600">Я ваш AI помічник. Чим можу допомогти?</p>
              </div>

              {/* Sample Messages */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <img 
                      src="/bot_2.png" 
                      alt="Bot" 
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm max-w-xs">
                    <p className="text-gray-800">Привіт! Чим Вам допомогти?</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <img 
                      src="/bot_2.png" 
                      alt="Bot" 
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm max-w-xs">
                    <p className="text-gray-800">Пропоную Вам кілька категорій товарів:</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white hover:bg-blue-50 text-gray-700 p-4 rounded-xl border border-gray-200 transition-colors text-left">
                    <div className="font-medium">📱 Телефони</div>
                    <div className="text-sm text-gray-500">Смартфони та аксесуари</div>
                  </button>
                  <button className="bg-white hover:bg-blue-50 text-gray-700 p-4 rounded-xl border border-gray-200 transition-colors text-left">
                    <div className="font-medium">💻 Ноутбуки</div>
                    <div className="text-sm text-gray-500">Комп'ютери та ноутбуки</div>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white hover:bg-blue-50 text-gray-700 p-4 rounded-xl border border-gray-200 transition-colors text-left">
                    <div className="font-medium">🎧 Навушники</div>
                    <div className="text-sm text-gray-500">Аудіо пристрої</div>
                  </button>
                  <button className="bg-white hover:bg-blue-50 text-gray-700 p-4 rounded-xl border border-gray-200 transition-colors text-left">
                    <div className="font-medium">🪑 Меблі</div>
                    <div className="text-sm text-gray-500">Столи та крісла</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Введіть ваше повідомлення..."
                    className="w-full px-4 py-3 bg-gray-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                  />
                </div>
                
                {/* Voice Input Button */}
                <button className="p-3 text-gray-500 hover:text-blue-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                
                {/* Send Button */}
                <button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-2xl transition-all duration-200 shadow-lg"
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