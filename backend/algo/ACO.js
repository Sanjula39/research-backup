const ACO = {
  alpha: 1, // Pheromone factor
  beta: 2, // Heuristic factor
  evaporationRate: 0.5, // Rate at which pheromone evaporates
  iterations: 100, // Number of iterations

  optimize: function (data) {
    const pheromones = {};
    const materialUsability = {}; // Track the usability count for each material

    data.forEach((item) => {
      const material = item.packagingMaterial;
      pheromones[material] = 1;
      materialUsability[material] = 0; // Initialize usability count to 0
    });

    for (let i = 0; i < this.iterations; i++) {
      const solutions = data.map((item) => ({
        material: item.packagingMaterial,
        cost: this.calculateCost(item, pheromones),
      }));

      solutions.sort((a, b) => a.cost - b.cost);

      // Increment usability count for each solution in each iteration
      solutions.forEach((solution) => {
        materialUsability[solution.material]++;
      });

      this.updatePheromones(pheromones, solutions);
      this.evaporatePheromones(pheromones);
    }

    const totalUsability = Object.values(materialUsability).reduce(
      (sum, count) => sum + count,
      0
    );
    const materialPercentages = Object.entries(materialUsability).map(
      ([material, count]) => ({
        material,
        percentage: (count / totalUsability) * 100,
      })
    );

    return materialPercentages;
  },

  calculateCost: function (item, pheromones) {
    const condition = item.productCondition;
    const pheromone = pheromones[item.packagingMaterial];
    const heuristic = Math.pow(condition, this.beta);

    return pheromone * heuristic;
  },

  updatePheromones: function (pheromones, solutions) {
    solutions.forEach((solution) => {
      const material = solution.material;
      const cost = solution.cost;

      pheromones[material] += this.alpha / cost;
    });
  },

  evaporatePheromones: function (pheromones) {
    for (let material in pheromones) {
      pheromones[material] *= 1 - this.evaporationRate;
    }
  },
};

module.exports = ACO;
