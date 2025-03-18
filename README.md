# API Documentation

## Base URL
http://localhost:3000/api/items


## Endpoints

### GET /api/items
- **Description:** Retrieve all items.
- **Response:**  
  - **Status 200:** An array of item objects.
  - **Status 500:** Server error message.

### GET /api/items/:id
- **Description:** Retrieve a single item by its ID.
- **Response:**  
  - **Status 200:** The requested item.
  - **Status 404:** Item not found.
  - **Status 500:** Server error message.

### POST /api/items
- **Description:** Create a new item.
- **Request Body:**  
  ```json
  {
    "name": "Item Name",
    "description": "Item Description",
    "price": 10.99,
    "category": "Item Category",
    "quantity": 5,
    "inStock": true
  }


Response:
Status 201: The created item.
Status 400: Missing or invalid data.
Status 500: Server error message.

PUT /api/items/:id
Description: Update an existing item.
Request Body:
(Include any fields you wish to update; at least one must be provided.)
Response:
Status 200: The updated item.
Status 400: No update data provided or invalid data.
Status 404: Item not found.
Status 500: Server error message.

DELETE /api/items/:id
Description: Delete an item.
Response:
Status 200: Confirmation of deletion.
Status 404: Item not found.
Status 500: Server error message.


---

## 3. Testing the Update and Delete Functionality

### a. Using Postman (or Similar API Tool)

1. **Testing PUT (Update):**
   - **Step 1:** Create or select an item. Use your POST endpoint to add a new item.
   - **Step 2:** Copy the ID of the created item.
   - **Step 3:** Open Postman and send a PUT request to `http://localhost:3000/api/items/{id}` (replace `{id}` with the actual item id).
   - **Step 4:** In the body, send a JSON object with one or more fields to update. For example:
     ```json
     {
       "price": 19.99,
       "quantity": 8
     }
     ```
   - **Step 5:** Check that the response status is 200 and that the item data reflects the updates.
   - **Step 6:** Test validation by sending an empty JSON object. You should receive a 400 response.

2. **Testing DELETE:**
   - **Step 1:** Use an existing item's ID.
   - **Step 2:** Open Postman and send a DELETE request to `http://localhost:3000/api/items/{id}`.
   - **Step 3:** Verify that you receive a confirmation message (status 200) and that the item is removed from your database (check via MongoDB Compass or similar).
   - **Step 4:** Test deleting an item with an invalid ID to ensure you receive a 404 error.

---

## 4. Prepare for Submission

### a. Push to GitHub
1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Completed CRUD operations with update and delete functionality, added validation and error handling"
