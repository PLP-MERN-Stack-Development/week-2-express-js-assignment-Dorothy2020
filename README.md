
![ApiProducts](https://github.com/user-attachments/assets/7a335192-4b28-44d5-9e95-24284ceaca08)

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19868115&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product



## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products (with optional filtering and pagination)
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product (requires `x-api-key` header)
- `PUT /api/products/:id`: Update a product (requires `x-api-key` header)
- `DELETE /api/products/:id`: Delete a product (requires `x-api-key` header)
- `GET /api/products/search?q=term`: Search products by name
- `GET /api/products/stats`: Get product count by category

---

### 🔐 Authentication
Some routes require an API key header:

x-api-key: mysecretkey



---

### 📌 Example Endpoints to Test

- **GET all products:**  
  `GET http://localhost:3000/api/products`

- **GET filtered + paginated:**  
  `GET http://localhost:3000/api/products?category=electronics&page=1&limit=1`

- **Search products:**  
  `GET http://localhost:3000/api/products/search?q=laptop`

- **Get stats:**  
  `GET http://localhost:3000/api/products/stats`

- **Create a product:**  
  `POST http://localhost:3000/api/products`  
  (Headers: `x-api-key`, Body in JSON)

- **Update a product:**  
  `PUT http://localhost:3000/api/products/:id`  
  (Headers: `x-api-key`, Body in JSON)

- **Delete a product:**  
  `DELETE http://localhost:3000/api/products/:id`  
  (Header: `x-api-key`)

---

### 📚 Example Request & Response

#### `POST /api/products`

**Request Headers:**
x-api-key: mysecretkey
Content-Type: application/json



**Request Body:**
```json
{
  "name": "Blender",
  "description": "Powerful kitchen blender",
  "price": 150,
  "category": "kitchen",
  "inStock": true
}
Response:


{
  "id": "generated-uuid",
  "name": "Blender",
  "description": "Powerful kitchen blender",
  "price": 150,
  "category": "kitchen",
  "inStock": true
}
GET /api/products/stats
Response:


{
  "electronics": 2,
  "kitchen": 1
}
GET /api/products/search?q=laptop
Response:


[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  }
]



## Submission




Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 


