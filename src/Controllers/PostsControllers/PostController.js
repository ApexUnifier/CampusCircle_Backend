import schemas from '../../Models/index.js'; // assuming the model file is named 'index.js'
const {PostSchema} = schemas

// Create Post
export const createPost = async (req, res) => {
  const { title, userId, image, description, likes } = req.body;

  const newPost = new PostSchema({
    title,
    userId,
    // image,
    description,
    likes
  });

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Add Like
export const addPostLike = async (req, res) => {
  const { id } = req.params; // getting post ID from route parameters

  try {
    const post = await PostSchema.findById(id);
    post.likes += 1;
    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete Post
export const deletePost = async (req, res) => {
  const { id } = req.params; // getting post ID from route parameters

  try {
    const deletedPost = await PostSchema.findByIdAndRemove(id);
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get All Posts
export const getPosts = async (req, res) => {
  try {
    const posts = await PostSchema.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Post by ID
export const getPostById = async (req, res) => {
  const { id } = req.params; // getting post ID from route parameters

  try {
    const post = await PostSchema.findById(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).send('Post not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Posts by User ID
export const getPostsByUserId = async (req, res) => {
  const { userId } = req.params; // getting user ID from route parameters

  try {
    const posts = await PostSchema.find({ userId: userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};