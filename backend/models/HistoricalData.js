const mongoose = require("mongoose");

const historicalDataSchema = new mongoose.Schema({
  productName: String,
  productWeight: String,
  fragility: String,
  shippingFrom: String,
  destinationCountry: String,
  shippingMethod: String,
  packagingMaterial: String,
  shippingCost: Number,
  packagingMaterialCost: Number,
  productCondition: String,
});

const HistoricalData = mongoose.model("HistoricalData", historicalDataSchema);

module.exports = HistoricalData;
