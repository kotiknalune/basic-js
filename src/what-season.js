module.exports = function getSeason(date) {

if (date == null) {
	return 'Unable to determine the time of year!';  // no input
}

if (date instanceof Date && !isNaN(date)) {
	
	let seasons = ["winter","winter","spring","spring","spring","summer","summer","summer","autumn","autumn","autumn","winter"],
	month = date.getMonth();
  	
  	return seasons[month];
}
else {
	throw Error;  // invalid input
} 
};
