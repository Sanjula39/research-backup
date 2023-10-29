const mongoose = require('mongoose');
const chnSchema = new mongoose.Schema({
 date:Date,
 quantity:Number,
});
// const totSchema = new mongoose.Schema({
//  date:Date,
//  quantity:Number,
// });
const chnModal = mongoose.model("chns",chnSchema);
// const totModal = mongoose.model("tot",totSchema);
// module.exports= totModal;
module.exports= chnModal;

