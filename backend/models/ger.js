const mongoose = require('mongoose');
const gerSchema = new mongoose.Schema({
 date:Date,
 quantity:Number,
});
// const totSchema = new mongoose.Schema({
//  date:Date,
//  quantity:Number,
// });
const gerModal = mongoose.model("gers",gerSchema);
// const totModal = mongoose.model("tot",totSchema);
// module.exports= totModal;
module.exports= gerModal;

