// src/services/apiService.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000/products';

// Fetches details for a single product by its ID
export const getProductDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Fetches a list of all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Searches for products by query string
export const searchProducts = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search?q=${query}`);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Edits an existing product by ID
// Edits an existing product by ID
export const editProduct = async (id, product) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, JSON.stringify(product));
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Deletes a product by its ID
export const removeProduct = async (id) => {
    return axios.delete(`${BASE_URL}/add`, JSON.stringify(product), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
};

export const addProduct = (product) => {
    return axios.post(`${BASE_URL}/add`, JSON.stringify(product), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };