const mongoose = require('mongoose');
const pakSchema = new mongoose.Schema({
 date:Date,
 quantity:Number,
});
// const totSchema = new mongoose.Schema({
//  date:Date,
//  quantity:Number,
// });
const pakModal = mongoose.model("paks",pakSchema);
// const totModal = mongoose.model("tot",totSchema);
// module.exports= totModal;
module.exports= pakModal;

