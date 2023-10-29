const express = require("express");
const router = express.Router();
const HistoricalData = require("../models/HistoricalData");
const ACO = require("../algo/ACO");

// API endpoint for optimizing packaging material
router.post("/optimize", async (req, res) => {
  const { productName, productWeight, fragility } = req.body;

  console.log("Para 1:", productName);
  console.log("Para 2:", productWeight);
  console.log("Para 3:", fragility);

  const productName1 = productName?.toString() ?? "";
  const productWeight1 = productWeight?.toString() ?? "";
  const fragility1 = fragility?.toString() ?? "";

  console.log("Received optimize request:", req.body);
  console.log("Para 1:", productName1);
  console.log("Para 2:", productWeight1);
  console.log("Para 3:", fragility1);
  HistoricalData.find({
    productName: productName1,
    productWeight: productWeight1,
    fragility: fragility1,

    // $or: [
    //   { productName: productName1 },
    //   { productWeight: productWeight1 },
    //   { fragility: fragility1 },
    // ],
  })
    .exec() // Execute the query and get the results as an array
    .then((data) => {
      console.log("Array length:", data.length);

      // Perform ACO optimization on the retrieved data
      const result = ACO.optimize(data);

      // Scenario 1: Return two arrays (materialNames and percentages)
      const { materials, percentages } = result;

      // Scenario 2: Return one array with strings in the format "<packing material name> - <percentage score>"

      // const formattedResult = materials.map(
      //   (material, index) => `${material} - ${percentages[index]}`
      // );
      const formattedResult = result.map(
        ({ material, percentage }) => `${material} - ${percentage.toFixed(2)}%`
      );

      res.json(formattedResult);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "An error occurred" });
    });
});

module.exports = router;