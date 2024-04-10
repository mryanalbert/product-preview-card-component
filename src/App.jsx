import ImageProductDesktop from "./assets/images/image-product-desktop.jpg";
import cartIcon from "./assets/images/icon-cart.svg";

export default function App() {
  return (
    <div className="wrapper min-h-screen bg-orange-50 flex justify-center items-center p-3">
      <div className="card w-[700px] bg-white rounded-xl grid grid-cols-1 md:grid-cols-2">
        <div className="card-img">
          <img
            src={ImageProductDesktop}
            className="w-full md:rounded-l-xl md:rounded-r-none max-[768px]:object-cover max-[768px]:h-64 rounded-t-xl"
            alt=""
          />
        </div>
        <div className="card-body p-10 max-[768px]:p-6">
          <p className="card-header font-['Montserrat'] text-gray-500 font-semibold tracking-[5px] text-sm mb-7 max-[768px]:mb-4">
            PERFUME
          </p>
          <p className="card-title font-['Fraunces'] text-4xl font-bold leading-none text-neutral-800 mb-7 max-[768px]:mb-4">
            Gabrielle Essence Eau De Parfum
          </p>
          <p className="card-text text-gray-500 font-medium mb-7 leading-relaxed max-[768px]:mb-4">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of Chanel.
          </p>
          <div className="card-price-texts flex items-center mb-7 max-[768px]:mb-4">
            <p className="current-price font-['Fraunces'] text-emerald-700 text-4xl font-bold">
              $149.99
            </p>
            <p className="before-price text-gray-500 line-through font-medium ml-5">
              $169.99
            </p>
          </div>
          <button className="bg-emerald-700 text-white py-4 w-full rounded-lg font-semibold max-[768px]:mb-4 flex justify-center items-center">
            <img src={cartIcon} alt="" />
            <span className="ml-2">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
