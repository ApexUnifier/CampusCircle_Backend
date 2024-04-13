
### Posts

#### Create Post

- **Endpoint:** `/posts`
- **Method:** `POST`
- **Body Parameters:**
  - `title`: String (required)
  - `userId`: ObjectId (required)
  - `image`: String
  - `description`: String (required)
  - `likes`: Number (required)
- **Description:** Creates a new post with the provided title, user ID, image URL, description, and likes count.

#### Add Like to a Post

- **Endpoint:** `/posts/:id/like`
- **Method:** `PUT`
- **URL Parameters:**
  - `id`: ObjectId (required)
- **Description:** Increments the likes count of the post with the provided ID.

#### Delete a Post

- **Endpoint:** `/posts/:id`
- **Method:** `DELETE`
- **URL Parameters:**
  - `id`: ObjectId (required)
- **Description:** Deletes the post with the provided ID.

#### Get All Posts

- **Endpoint:** `/posts`
- **Method:** `GET`
- **Description:** Retrieves all posts from the database.

#### Get a Post by ID

- **Endpoint:** `/posts/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id`: ObjectId (required)
- **Description:** Retrieves the post with the provided ID.

#### Get Posts by User ID

- **Endpoint:** `/posts/user/:userId`
- **Method:** `GET`
- **URL Parameters:**
  - `userId`: ObjectId (required)
- **Description:** Retrieves all posts associated with the provided user ID.