const deleteActivity = require("../controllers/deleteActivity");

const deleteActivity = async (req, res) => {
    const { idActivity } = req.params;
    try {
      const activity = await deleteActivity(idActivity);
      res
        .status(200)
        .json({ message: "La actividad se ha borrado con exito", activity });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = deleteActivity;