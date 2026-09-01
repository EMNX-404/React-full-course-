import "./App.css";
import Home from "./Home";

function App() {
  return (
    <main className="cards">
      <Home
        image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
        title="Ferrari"
        content="Protect your vehicle against accidents, theft, fire and natural disasters."
      />

      <Home
        image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200"
        title="Porsche"
        content="Fast claims and complete vehicle protection."
      />

      <Home
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200"
        title="BMW"
        content="Premium roadside assistance available 24/7."
      />
    </main>
  );
}

export default App;