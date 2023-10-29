const mongoose = require('mongoose');
const itlSchema = new mongoose.Schema({
 date:Date,
 quantity:Number,
});
// const totSchema = new mongoose.Schema({
//  date:Date,
//  quantity:Number,
// });
const itlModal = mongoose.model("itls",itlSchema);
// const totModal = mongoose.model("tot",totSchema);
// module.exports= totModal;
module.exports= itlModal;

