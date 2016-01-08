const validators = {
	'double': require(__dirname + '/src/validators/double.js'),
	//'objectid': require(__dirname + '/src/validators/objectid'),
	//'date': require(__dirname + '/src/validators/date')
};
const patchers = {

};

module.exports = {
	validators: validators,
	patchers: patchers
}