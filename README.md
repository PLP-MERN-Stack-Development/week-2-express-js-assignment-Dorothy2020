🛠️ Express.js RESTful API Assignment
This project demonstrates building a RESTful API using Express.js, with full CRUD operations, middleware, error handling, filtering, pagination, and search capabilities.

📋 Assignment Overview
In this assignment, you will:

Set up an Express.js server

Create RESTful API routes for a product resource

Implement custom middleware (logging, authentication, validation)

Add error handling for various scenarios

Implement advanced features (filtering, pagination, search, stats)

🚀 Getting Started
Accept the GitHub Classroom assignment invitation

Clone your personal repository:


git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
Install dependencies:


npm install
Run the server:


npm start
📁 Project Files
server.js – Main server with all API routes and middleware

.env.example – Example environment variables

README.md – Project documentation

Week2-Assignment.md – Assignment instructions

🔧 Requirements
Node.js v18+

Postman, Insomnia, or curl for API testing

📌 API Endpoints
Method	Endpoint	Description	Auth Required
GET	/api/products	Get all products (supports filtering/paging)	❌
GET	/api/products/:id	Get product by ID	❌
POST	/api/products	Create new product	✅
PUT	/api/products/:id	Update product by ID	✅
DELETE	/api/products/:id	Delete product by ID	✅
GET	/api/products/search?q=term	Search products by name	❌
GET	/api/products/stats	Get count of products by category	❌

🔐 Authentication
For POST, PUT, and DELETE requests, you must include the following header:


x-api-key: mysecretkey
📦 Example Requests & Responses
✅ Create Product – POST /api/products
Headers:


Content-Type: application/json
x-api-key: mysecretkey
Body:


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
📊 Get Product Stats – GET /api/products/stats
Response:


{
  "electronics": 2,
  "kitchen": 1
}
🔍 Search Products – GET /api/products/search?q=laptop
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
📬 Example Endpoints to Test
GET http://localhost:3000/api/products

GET http://localhost:3000/api/products?category=electronics&page=1&limit=1

GET http://localhost:3000/api/products/search?q=laptop

GET http://localhost:3000/api/products/stats

POST http://localhost:3000/api/products (with x-api-key header)

PUT http://localhost:3000/api/products/:id (with x-api-key header)

DELETE http://localhost:3000/api/products/:id (with x-api-key header)

✅ Submission Checklist
Before pushing your final submission to GitHub:

 All API endpoints are implemented

 Middleware (logger, authentication, validation) is working

 Error handling is included

 README includes instructions, endpoint docs, and examples

 .env.example file is provided

 Push your final changes:

git add .
git commit -m "Final submission - Express.js assignment"
git push origin main
📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 

