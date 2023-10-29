const mongoose = require('mongoose');
const totSchema = new mongoose.Schema({
 date:Date,
 quantity:Number,
});
// const totSchema = new mongoose.Schema({
//  date:Date,
//  quantity:Number,
// });
const totModal = mongoose.model("tots",totSchema);
// const totModal = mongoose.model("tot",totSchema);
// module.exports= totModal;
module.exports= totModal;

