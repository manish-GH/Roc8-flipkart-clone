import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Products } from "./Products";

function App() {
  return (
    <div className="App">
      <div className="sticky">
        <Navbar />
      </div>

      <div className="container">
        <div className="item-1">
          <Sidebar />
        </div>
        <div className="item-2">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
