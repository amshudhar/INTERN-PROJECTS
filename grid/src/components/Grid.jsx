import React, { useEffect, useState } from 'react'

const Grid = () => {
  const [isGridView, setIsGridView] = useState(false);
  
  const productsList = [
    { id: 1, name: "Product 1", price: "$99", image: "src/assets/pexels-anitashirmd-28488349.jpg" },
    { id: 2, name: "Product 2", price: "$89", image: "src/assets/pexels-craytive-1464625.jpg" },
    { id: 3, name: "Product 3", price: "$79", image: "src/assets/pexels-fahmi-garna-249814583-13381986.jpg" },
    { id: 4, name: "Product 4", price: "$69", image: "src/assets/pexels-jonathan-pagaoa-46448199-30759633.jpg" },
    { id: 5, name: "Product 5", price: "$59", image: "src/assets/pexels-khulood-abdulghani-195928257-12456280.jpg" },
    { id: 6, name: "Product 6", price: "$49", image: "src/assets/pexels-kseniachernaya-11112728.jpg" },
    { id: 7, name: "Product 7", price: "$39", image: "src/assets/pexels-pic-matti-450440252-30181058.jpg" },
    { id: 8, name: "Product 8", price: "$29", image: "src/assets/pexels-quang-viet-nguyen-107013384-9561297.jpg" },
    { id: 9, name: "Product 9", price: "$19", image: "src/assets/pexels-the-glorious-studio-3584518-28389455.jpg" },
    { id: 10, name: "Product 10", price: "$9", image: "src/assets/pexels-vvs-440853-8839887.jpg" },
  ];

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className='main'>
      <button id="toggleViewBtn" onClick={toggleView}>
        {isGridView ? "Switch to List View" : "Switch to Grid View"}
      </button>
      <div className={`product-container ${isGridView ? 'grid-view' : 'list-view'}`}>
        {productsList.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid