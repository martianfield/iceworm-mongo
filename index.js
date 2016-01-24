const validators = {
	'double': require(__dirname + '/src/validators/double-validator.js'),
	'objectid': require(__dirname + '/src/validators/objectid-validator.js')
};
const projectors = {
  'double': require(__dirname + '/src/projectors/double-projector.js'),
  'objectid': require(__dirname + '/src/projectors/objectid-projector.js')
};

module.exports = {
	validators: validators,
	projectors: projectors
}