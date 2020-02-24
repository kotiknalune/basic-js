const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

    let activityNumber = parseFloat(sampleActivity);

    if (typeof sampleActivity != "string" ||
        typeof activityNumber != "number" ||
        MODERN_ACTIVITY == null ||
        HALF_LIFE_PERIOD == null ||
        activityNumber > HALF_LIFE_PERIOD ||
        activityNumber <= 0 ||
        activityNumber > MODERN_ACTIVITY ||
        isNaN(activityNumber)) {

        return false;

    } else {

        age = (Math.log(MODERN_ACTIVITY / activityNumber) / -0.693) * HALF_LIFE_PERIOD;
        age = Math.ceil(Math.abs(age));
        return age;
    }
};