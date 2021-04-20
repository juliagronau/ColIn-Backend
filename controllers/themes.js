import Theme from "../models/Theme.js";

export const getSingleTheme = async (req, res) => {
  try {
    const { id } = req.params;
    const theme = await Theme.findById(id);
    res.json(theme);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewTheme = async (req, res) => {
  try {
    const { title, colors, author } = req.body;
    const newTheme = await Theme.create({
      title,
      colors,
      author,
    });
    res.status(201).json(newTheme);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
