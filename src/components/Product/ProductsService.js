export const listProducts = async () => {
  const response = await fetch(`http://localhost:5000/api/products`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Something went wrong");
};

export const retrieveProduct = async (id) => {
  const response = await fetch(`http://localhost:5000/api/products/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Something went wrong");
};


export const createProduct = async (payload) => {
  const response = await fetch(`http://localhost:5000/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error('Something went wrong');
};

export const updateProduct = async (payload) => {
  const response = await fetch(`http://localhost:5000/api/products/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error('Something went wrong');
};

export const deleteProduct = async (id) => {
  const response = fetch(`http://localhost:5000/api/products/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error('Something went wrong');
};