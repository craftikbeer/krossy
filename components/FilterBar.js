function FilterBar({ brands, selectedBrand, onBrandChange, searchQuery, onSearchChange }) {
  try {
    return (
      <div className="bg-white border border-gray-200 p-6 mb-8" data-name="filter-bar" data-file="components/FilterBar.js">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-xs text-gray-600 mb-3 tracking-wide">
              Поиск
            </label>
            <div className="relative">
              <div className="icon-search absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400"></div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Название модели"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors text-sm"
              />
            </div>
          </div>
          <div className="lg:w-64">
            <label className="block text-xs text-gray-600 mb-3 tracking-wide">
              Бренд
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => onBrandChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 bg-white text-black focus:outline-none focus:border-black transition-colors text-sm"
            >
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('FilterBar component error:', error);
    return null;
  }
}
