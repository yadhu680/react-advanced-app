import React from 'react';
import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const gotoAboutPage = () => {
    navigate('/about');
  };

  if (id === '3') return <Navigate to="/" />;

  return (
    <div>
      {id ? (
        <div>
          <h1>Product Detail Page {id}</h1>
          <Link to="/product">Back</Link>
        </div>
      ) : (
        <div>
          <h1>Product Page</h1>
          <button onClick={gotoAboutPage}>Go to About page</button>
          <ul>
            <li>
              <Link to="/product/1">Product 1</Link>
            </li>
            <li>
              <Link to="/product/2">Product 2</Link>
            </li>
            <li>
              <Link to="/product/3">Product 3</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
