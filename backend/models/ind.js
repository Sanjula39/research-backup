const mongoose = require('mongoose');
const indSchema = new mongoose.Schema({
 date:Date,
 quantity:Number,
});
// const totSchema = new mongoose.Schema({
//  date:Date,
//  quantity:Number,
// });
const indModal = mongoose.model("inds",indSchema);
// const totModal = mongoose.model("tot",totSchema);
// module.exports= totModal;
module.exports= indModal;

