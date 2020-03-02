module.exports = class DepthCalculator {
    calculateDepth(array) {
 
        let depth = 0;
        if (typeof (array) != "object") return depth;

        array.forEach(level => depth = Math.max(this.calculateDepth(level), depth));

        return depth + 1;
    }
};
    