const mongoose = require('mongoose');
const usaSchema = new mongoose.Schema({
 date:Date,
 quantity:Number,
});
// const totSchema = new mongoose.Schema({
//  date:Date,
//  quantity:Number,
// });
const usaModal = mongoose.model("usas",usaSchema);
// const totModal = mongoose.model("tot",totSchema);
// module.exports= totModal;
module.exports= usaModal;

