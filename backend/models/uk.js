const mongoose = require('mongoose');
const ukSchema = new mongoose.Schema({
 date:Date,
 quantity:Number,
});
// const totSchema = new mongoose.Schema({
//  date:Date,
//  quantity:Number,
// });
const ukModal = mongoose.model("uks",ukSchema);
// const totModal = mongoose.model("tot",totSchema);
// module.exports= totModal;
module.exports= ukModal;
