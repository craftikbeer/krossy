function Header() {
  try {
    const handleTelegramClick = () => {
      window.open('https://t.me/del99_99', '_blank');
    };

    return (
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="icon-footprints text-2xl"></div>
              <span className="text-xl font-black tracking-tight">деревня.com</span>
            </div>
            
            <button 
              onClick={handleTelegramClick}
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full transition-colors text-sm font-medium"
            >
              <div className="icon-send text-base"></div>
              <span>Telegram</span>
            </button>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}