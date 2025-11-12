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
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Ошибка</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Обновить
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function ProductApp() {
  try {
    return (
      <div className="min-h-screen" data-name="product-app" data-file="product-app.js">
        <ProductDetail />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ProductApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ProductApp />
  </ErrorBoundary>
);