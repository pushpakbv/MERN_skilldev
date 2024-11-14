const TrainerModel = require('../models/trainer');
exports.getAllItems = async (req, res) => {
    try {
        const trainermodel = await TrainerModel.find();
        res.status(200).json(trainermodel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getItemById = async (req, res) => {
    try {
        const trainermodel = await TrainerModel.findById(req.params.id);
        if (!trainermodel) return res.status(404).json({ message: "Item not found" });
        res.status(200).json(trainermodel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// app.post('/upload',upload.single("profileImage"),(req,res)=>{
//     console.log(req.body); //no text field -> Null
//     console.log(req.file);

//     return res.redirect("/");
// })


exports.createItem = async (req, res) => {
    try {

        const trainermodel = new TrainerModel(req.body);
        const savedItem = await trainermodel.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await TrainerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Item not found" });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await TrainerModel.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Item not found" });
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};