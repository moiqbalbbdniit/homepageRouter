import React, { useState } from "react";

const Order = () => {
  const [orderedItems, setOrderedItems] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showH4, setShowH4] = useState(false); // State for controlling the visibility of the <h4> element

  const handleAddProduct = () => {
    if (productName && quantity) {
      const newItem = {
        productName,
        quantity
      };
      setOrderedItems(prevItems => [...prevItems, newItem]);
      setProductName("");
      setQuantity("");
      setShowH4(true); // Show the <h4> element when both productName and quantity are provided
    } else {
      setShowAlert(true);
    }
  };

  const handleDeleteProduct = (index) => {
    const updatedItems = [...orderedItems];
    updatedItems.splice(index, 1);
    setOrderedItems(updatedItems);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md px-8 py-6 mx-2 my-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div>
          <h1 className="text-2xl text-center text-orange-800">Order Form</h1>
          <p className="text-center m-2">
            Please Enter the Product name and Quantity
          </p>
        </div>
        <div className="space-y-8 mt-10">
          <div className="space-y-8">
            <label htmlFor="Label">Enter Product Name</label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-md dark:bg-gray-700 dark:text-gray-300"
              id="product"
              placeholder="Aciloc 150mg Tablet"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              type="text"
            />
            <div className="space-y-2">
              <label htmlFor="password">Quantity</label>
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded-md dark:bg-gray-700 dark:text-gray-300"
                id="quantity"
                placeholder="5pcs OR 5 Box"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                type="text"
              />
            </div>
          </div>
          {/* card content end here  */}
          <div className="flex flex-row flex-wrap">
            <button
              onClick={handleAddProduct}
              className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
            >
              Add Product
            </button>
            {/* Show the <h4> element if showH4 is true */}
            {showH4 && (
              <h4 className="text-bolder text-green-600 text-center ml-4 mt-3 md:mt-0">
                You can see and send your data by submitting the form below.
              </h4>
            )}
          </div>
        </div>
      </div>
      {/* Display ordered items */}
      <div className="w-full max-w-md px-8 py-6 bg-white rounded-lg shadow-md mt-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold mb-2 text-orange-800">Ordered Items:</h2>
        {orderedItems.length > 0 ? (
          <ul className="space-y-2">
            {orderedItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span className="font-semibold">{item.productName}</span>  {item.quantity}
                <button onClick={() => handleDeleteProduct(index)} className="text-red-600 hover:text-red-800 focus:outline-none ml-2">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No items ordered yet.</p>
        )}
        {/* Add "Send the Order" button */}
        {orderedItems.length > 0 && (
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send the Order
          </button>
        )}
      </div>
      {/* Alert Popup */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-center text-red-500 mb-4">Please enter product name and quantity.</p>
            <button onClick={closeAlert} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
