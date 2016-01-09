const validators = {
	'double': require(__dirname + '/src/validators/double-validator.js'),
	'objectid': require(__dirname + '/src/validators/objectid-validator.js')
};
const patchers = {
  'double': require(__dirname + '/src/patchers/double-patcher.js'),
  'objectid': require(__dirname + '/src/patchers/objectid-patcher.js')
};

module.exports = {
	validators: validators,
	patchers: patchers
}