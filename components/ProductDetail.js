function ProductDetail() {
  try {
    const [selectedSize, setSelectedSize] = React.useState(null);
    const [currentImage, setCurrentImage] = React.useState(0);

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;

    const products = [
      { 
        id: 1, 
        name: 'Air Max 270', 
        brand: 'Nike', 
        price: '12 990 ₽',
        images: [
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
          'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'
        ],
        sizes: ['40', '41', '42', '43', '44', '45'],
        material: 'Текстиль, синтетика, резина',
        description: 'Классические спортивные кроссовки с воздушной подушкой Max Air для максимального комфорта и поддержки.',
        features: ['Дышащий верх', 'Амортизация Air Max', 'Прочная резиновая подошва']
      },
      { 
        id: 2, 
        name: 'Ultraboost 22', 
        brand: 'Adidas', 
        price: '15 490 ₽',
        images: [
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800',
          'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800'
        ],
        sizes: ['39', '40', '41', '42', '43', '44'],
        material: 'Primeknit, Boost, резина Continental',
        description: 'Беговые кроссовки с революционной технологией Boost для возврата энергии при каждом шаге.',
        features: ['Технология Boost', 'Верх Primeknit', 'Подошва Continental']
      }
    ];

    const product = products.find(p => p.id === productId) || products[0];

    const handleTelegramClick = () => {
      const sizeText = selectedSize ? ` размер ${selectedSize}` : '';
      const productUrl = window.location.href;
      const message = encodeURIComponent(`Здравствуйте! Интересует модель: ${product.name} (${product.brand})${sizeText}\n\nСсылка: ${productUrl}`);
      window.open(`https://t.me/del99_99?text=${message}`, '_blank');
    };

    return (
      <div className="min-h-screen py-8" data-name="product-detail" data-file="components/ProductDetail.js">
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => window.location.href = 'index.html'}
            className="flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <div className="icon-arrow-left text-lg"></div>
            <span className="tracking-wide">Назад</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-50 aspect-square mb-4 border border-gray-200">
                <img src={product.images[currentImage]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {product.images.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`bg-gray-50 aspect-square cursor-pointer border transition-all ${
                      currentImage === idx ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 tracking-wider mb-2">{product.brand}</p>
              <h1 className="text-4xl font-light mb-6">{product.name}</h1>
              <p className="text-2xl font-normal text-black mb-8">{product.price}</p>
              
              <div className="mb-8">
                <h3 className="text-sm text-gray-600 mb-4 tracking-wide">Размеры</h3>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 font-light border transition-all ${
                        selectedSize === size 
                          ? 'bg-black border-black text-white' 
                          : 'border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={handleTelegramClick} className="w-full btn-telegram mb-12">
                <div className="icon-send text-lg"></div>
                Заказать в Telegram
              </button>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h3 className="text-base font-light mb-4">Описание</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h3 className="text-base font-light mb-4">Материалы</h3>
                <p className="text-gray-600 text-sm">{product.material}</p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-base font-light mb-4">Особенности</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600 text-sm">
                      <div className="icon-check text-black"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductDetail component error:', error);
    return null;
  }
}