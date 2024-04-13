# Resources API Documentation

## Create Resource

**Endpoint:** `/resources`  
**Method:** `POST`  
**Body Parameters:**

- `title`: String (required)
- `userId`: ObjectId (required, reference to User)
- `link`: String
- `description`: String (required)
- `likes`: Number (required)

**Description:** Creates a new resource with the provided title, user ID, link, description, and likes count.

## Add Like to a Resource

**Endpoint:** `/resources/:id/like`  
**Method:** `PUT`  
**URL Parameters:**

- `id`: ObjectId (required)

**Description:** Increments the likes count of the resource with the provided ID.

## Delete a Resource

**Endpoint:** `/resources/:id`  
**Method:** `DELETE`  
**URL Parameters:**

- `id`: ObjectId (required)

**Description:** Deletes the resource with the provided ID.

## Get All Resources

**Endpoint:** `/resources`  
**Method:** `GET`  

**Description:** Retrieves all resources from the database.

## Get a Resource by ID

**Endpoint:** `/resources/:id`  
**Method:** `GET`  
**URL Parameters:**

- `id`: ObjectId (required)

**Description:** Retrieves the resource with the provided ID.

## Get Resources by User ID

**Endpoint:** `/resources/user/:userId`  
**Method:** `GET`  
**URL Parameters:**

- `userId`: ObjectId (required)

**Description:** Retrieves all resources associated with the provided user ID.
