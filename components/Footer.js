function Footer() {
  try {
    const handleTelegramClick = () => {
      window.open('https://t.me/del99_99', '_blank');
    };

    return (
      <footer className="relative bg-black mt-20 overflow-hidden" data-name="footer" data-file="components/Footer.js">
        <div className="absolute top-0 left-0 right-0 h-32 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&q=80"
            alt="Footer decoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-light text-white mb-3 tracking-tight">
              Связаться с нами
            </h3>
            <p className="text-gray-400 text-sm">
              Готовы сделать заказ? Напишите нам в Telegram
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <button 
              onClick={handleTelegramClick}
              className="bg-white hover:bg-gray-200 text-black font-medium py-3 px-8 transition-all duration-300 flex items-center gap-2"
            >
              <div className="icon-send text-base"></div>
              <span>Telegram</span>
            </button>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-xs">
              © 2025 Мигуля Shop. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
