function SneakerCard({ sneaker }) {
  try {
    const [currentImage, setCurrentImage] = React.useState(0);

    const handleClick = () => {
      window.location.href = `product.html?id=${sneaker.id}`;
    };

    return (
      <div className="group cursor-pointer" data-name="sneaker-card" data-file="components/SneakerCard.js">
        <div 
          className="relative overflow-hidden bg-gray-50 aspect-square mb-4 border border-gray-200 group-hover:border-black transition-all duration-300"
          onClick={handleClick}
          onMouseEnter={() => setCurrentImage(1)}
          onMouseLeave={() => setCurrentImage(0)}
        >
          <img 
            src={sneaker.images[currentImage]} 
            alt={sneaker.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2 tracking-wider">{sneaker.brand}</p>
          <h3 className="text-sm font-light text-black mb-3">
            {sneaker.name}
          </h3>
          <p className="text-base font-normal text-black mb-4">{sneaker.price}</p>
          <button 
            onClick={handleClick}
            className="w-full btn-primary text-sm py-2.5"
          >
            Подробнее
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('SneakerCard component error:', error);
    return null;
  }
}
