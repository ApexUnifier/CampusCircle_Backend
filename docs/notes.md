### Notes

#### Create Note

- **Endpoint:** `/notes`
- **Method:** `POST`
- **Body Parameters:**
  - `title`: String (required)
  - `userId`: ObjectId (required)
  - `description`: String (required)
  - `likes`: Number (required)
- **Description:** Creates a new note with the provided title, user ID, description, and likes count.

#### Add Like to a Note

- **Endpoint:** `/notes/:id/like`
- **Method:** `PUT`
- **URL Parameters:**
  - `id`: ObjectId (required)
- **Description:** Increments the likes count of the note with the provided ID.

#### Delete a Note

- **Endpoint:** `/notes/:id`
- **Method:** `DELETE`
- **URL Parameters:**
  - `id`: ObjectId (required)
- **Description:** Deletes the note with the provided ID.

#### Get All Notes

- **Endpoint:** `/notes`
- **Method:** `GET`
- **Description:** Retrieves all notes from the database.

#### Get a Note by ID

- **Endpoint:** `/notes/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id`: ObjectId (required)
- **Description:** Retrieves the note with the provided ID.

#### Get Notes by User ID

- **Endpoint:** `/notes/user/:userId`
- **Method:** `GET`
- **URL Parameters:**
  - `userId`: ObjectId (required)
- **Description:** Retrieves all notes associated with the provided user ID.

---