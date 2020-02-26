module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

let turnCount = Math.pow(2,disksNumber) - 1,
	 minSeconds = turnCount/(turnsSpeed/3600);

let answer = {
  turns: turnCount,
  seconds: minSeconds
};

return answer;
}