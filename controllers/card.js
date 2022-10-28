import { Card } from "../models/card.js";






export const list = async (_req, res) => {
  try {
    const cards = await Card.find();

    res.status(200).json(cards);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error de servidor" });
  }
};
export const create = async (req, res) => {
  try {
    console.log(req.body)
    const newCard = await Card(req.body).save();

    res.status(200).json(newCard);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error de servidor" });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await Card.findOneAndRemove({_id: req.params.id})
    res.json(deleted);
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const update = async (req, res) => {
  try {
    const update = await Card.findByIdAndUpdate(
      {_id: req.params.id},
      req.body,
      {new: true}
    );
      res.status(200).json(update)
      
    } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}


