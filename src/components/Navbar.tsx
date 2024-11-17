
const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-[#E91E63] text-2xl font-bold">attyre</div>
        <div className="flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">Explore</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Color Analysis</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Curations</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Find the Fit</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Marketplace</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;