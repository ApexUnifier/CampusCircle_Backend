import schemas from '../../Models/index.js'; // assuming the model file is named 'index.js'
const {ResourceSchema} = schemas

// Create Resource
export const createResource = async (req, res) => {
  const { title, userId, link, description } = req.body;
  const newResource = new ResourceSchema({
    title,
    userId,
    link, 
    description,
  });

  try {
    const savedResource = await newResource.save();
    res.status(200).json(savedResource);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Add Like to a Resource
export const addResourceLike = async (req, res) => {
  const { id } = req.params; // getting resource ID from route parameters

  try {
    const resource = await ResourceSchema.findById(id);
    resource.likes += 1;
    const updatedResource = await resource.save();
    res.status(200).json(updatedResource);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete Resource
export const deleteResource = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedResource = await ResourceSchema.findByIdAndRemove(id);
    res.status(200).json(deletedResource);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get All Resources
export const getResources = async (req, res) => {
  try {
    const resources = await ResourceSchema.find().populate('userId');
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Resource by ID
export const getResourceById = async (req, res) => {
  const { id } = req.params; // getting resource ID from route parameters

  try {
    const resource = await ResourceSchema.findById(id).populate('userId');
    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(404).send('Resource not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Resources by User ID
export const getResourceByUserId = async (req, res) => {
  const { userId } = req.params; // getting user ID from route parameters

  try {
    const resources = await ResourceSchema.find({ userId: userId }).populate('userId');
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).send(error);
  }
};
