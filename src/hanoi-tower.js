module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

	const turnsPerSecond = turnsSpeed/3600;
	const turns = Math.pow(2, disksNumber) - 1;
	const seconds = turns / turnsPerSecond;

	return {
	  turns,
	  seconds
	};
}