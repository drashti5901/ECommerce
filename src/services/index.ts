import axios, { AxiosResponse } from 'axios';

// Base API configuration
const API_BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here
    const token = ''; // Get your auth token here
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

// Generic GET request
export const get = async <T>(url: string, params?: object): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Generic POST request
export const post = async <T>(url: string, data: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Generic PUT request
export const put = async <T>(url: string, data: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Generic DELETE request
export const del = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Generic PATCH request
export const patch = async <T>(url: string, data: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.patch(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Types for the Fake Store API
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Fake Store API Services
export const productService = {
  // Get all products
  getAllProducts: () => get<Product[]>('/products'),
  
  // Get single product by ID
  getProductById: (id: number) => get<Product>(`/products/${id}`),
  
  // Get products in a specific category
  getProductsByCategory: (category: string) => get<Product[]>(`/products/category/${category}`),
  
  // Get all categories
  getAllCategories: () => get<string[]>('/products/categories'),
  
  // Add new product
  addProduct: (product: Omit<Product, 'id'>) => post<Product>('/products', product),
  
  // Update product
  updateProduct: (id: number, product: Partial<Product>) => put<Product>(`/products/${id}`, product),
  
  // Delete product
  deleteProduct: (id: number) => del<Product>(`/products/${id}`),
  
  // Limit results
  getLimitedProducts: (limit: number) => get<Product[]>(`/products?limit=${limit}`),
  
  // Sort results - 'asc' or 'desc'
  getSortedProducts: (sort: 'asc' | 'desc') => get<Product[]>(`/products?sort=${sort}`)
};

export default api; 