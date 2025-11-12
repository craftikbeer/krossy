function Hero() {
  try {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const slides = [
      {
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1920&q=80',
        title: 'PREMIUM SNEAKERS',
        subtitle: 'Эксклюзивные модели 2025'
      },
      {
        image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&q=80',
        title: 'НОВАЯ КОЛЛЕКЦИЯ',
        subtitle: 'Стиль без компромиссов'
      },
      {
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1920&q=80',
        title: 'ОГРАНИЧЕННЫЙ ВЫПУСК',
        subtitle: 'Успей первым'
      }
    ];

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(timer);
    }, []);

    return (
      <section className="relative h-[400px] overflow-hidden" data-name="hero" data-file="components/Hero.js">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-200 font-light">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
