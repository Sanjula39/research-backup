
const mongoose = require('mongoose');
const banSchema = new mongoose.Schema({
 date:Date,
 quantity:Number,
});
// const totSchema = new mongoose.Schema({
//  date:Date,
//  quantity:Number,
// });

const banModal = mongoose.model("bans",banSchema);
// const totModal = mongoose.model("tot",totSchema);

// module.exports= totModal;
module.exports= banModal;

