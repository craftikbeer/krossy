class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Что-то пошло не так</h1>
            <p className="text-gray-600 mb-4">Извините, произошла непредвиденная ошибка.</p>
            <button onClick={() => window.location.reload()} className="btn-telegram">
              Обновить страницу
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [selectedBrand, setSelectedBrand] = React.useState('Все');
    const [searchQuery, setSearchQuery] = React.useState('');

    const sneakers = [
      { id: 1, name: 'Air Max 270', brand: 'Nike', price: '12 990 ₽', images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500'] },
      { id: 2, name: 'Ultraboost 22', brand: 'Adidas', price: '15 490 ₽', images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500', 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500'] },
      { id: 3, name: 'Chuck Taylor', brand: 'Converse', price: '5 990 ₽', images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500', 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500'] },
      { id: 4, name: 'Classic Leather', brand: 'Reebok', price: '7 490 ₽', images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500', 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500'] },
      { id: 5, name: 'Air Jordan 1', brand: 'Nike', price: '18 990 ₽', images: ['https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500', 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500'] },
      { id: 6, name: 'NMD_R1', brand: 'Adidas', price: '13 990 ₽', images: ['https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=500', 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500'] },
      { id: 7, name: 'Air Force 1', brand: 'Nike', price: '9 990 ₽', images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'] },
      { id: 8, name: 'Stan Smith', brand: 'Adidas', price: '8 490 ₽', images: ['https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500', 'https://images.unsplash.com/photo-1599073969394-cb5c0279df1d?w=500'] },
    ];

    const brands = ['Все', ...new Set(sneakers.map(s => s.brand))];

    const filteredSneakers = sneakers.filter(sneaker => {
      const matchesBrand = selectedBrand === 'Все' || sneaker.brand === selectedBrand;
      const matchesSearch = sneaker.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesSearch;
    });

    return (
      <div className="min-h-screen" data-name="app" data-file="app.js">
        <Header />
        <Hero />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FilterBar 
            brands={brands}
            selectedBrand={selectedBrand}
            onBrandChange={setSelectedBrand}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
            {filteredSneakers.map(sneaker => (
              <SneakerCard key={sneaker.id} sneaker={sneaker} />
            ))}
          </div>
          {filteredSneakers.length === 0 && (
            <div className="text-center py-16">
              <div className="icon-search text-5xl text-gray-300 mb-4 mx-auto w-fit"></div>
              <p className="text-xl text-gray-500">Кроссовки не найдены</p>
            </div>
          )}
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);