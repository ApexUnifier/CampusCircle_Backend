import schemas from '../../Models/index.js'; // assuming the model file is named 'NotesModel.js'
const {NotesSchema} = schemas

// Create Note
export const createNote = async (req, res) => {
  const { title, userId, description, likes } = req.body;
//   const file = req.file; // assuming you're using something like multer for file handling

//   if (!file) return res.status(400).send('No file uploaded.');

  const newNote = new NotesSchema({
    title,
    userId,
    // docs: file.path, 
    description,
    likes
  });

  try {
    const savedNote = await newNote.save();
    res.status(200).json(savedNote);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Add Like
export const addLike = async (req, res) => {
  const { id } = req.params; // getting note ID from route parameters

  try {
    const note = await NotesSchema.findById(id);
    note.likes += 1;
    const updatedNote = await note.save();
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete Note
export const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNote = await NotesSchema.findByIdAndRemove(id);
    res.status(200).json(deletedNote);
  } catch (error) {
    res.status(500).send(error);
  }
};
