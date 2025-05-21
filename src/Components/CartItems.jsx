import { useContext } from "react";
import { AppContext } from "../Context/Context";

const CartItems = () => {
  const { cart, clearCart } = useContext(AppContext);

  const netTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const netQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6 text-green-700">Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="text-lg text-red-500">No items in cart.</div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">₹ {item.price}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: <span className="font-medium">{item.quantity}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-md font-semibold text-gray-800">
                      Total: ₹ {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center border-t pt-4">
              <p className="text-xl font-semibold text-green-700">
                Net Total: ₹ {netTotal}
              </p>
              <button
                onClick={clearCart}
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartItems;
