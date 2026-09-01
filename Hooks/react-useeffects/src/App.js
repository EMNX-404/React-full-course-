import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Products List</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {users.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;