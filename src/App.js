import Approuter from "./router/Approuter";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
      <Approuter />{/* chilren prop burada */}
      </AuthProvider>
      
    </div>
  );
}

export default App;
