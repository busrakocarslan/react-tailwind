import Approuter from "./router/Approuter";
import AuthProvider from "./context/AuthProvider";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
          <Approuter />
          {/* chilren prop burada */}
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
