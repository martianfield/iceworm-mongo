'use strict';
const iceworm_mongo = require(__dirname + '/../index.js');
const should = require('chai').should();

describe("Validation", () => {
  describe("Double Validator", () => {

    it("Type", () => {
      let schema = { type:"double", required:true };
      let v_double = iceworm_mongo.validators.double(13.5, schema);
      let v_int = iceworm_mongo.validators.double(8, schema);
      let v_bool = iceworm_mongo.validators.double(true, schema);
      let v_string = iceworm_mongo.validators.double("some string", schema);

      v_double.valid.should.equal(true);
      v_int.valid.should.equal(true);
      v_bool.valid.should.equal(false);
      v_string.valid.should.equal(false);
    });

    it('Required', () => {
      let schema = { type:"double", required:false };
      let validation = iceworm_mongo.validators.double(undefined, schema);
      validation.valid.should.equal(false);
      validation.errors.length.should.equal(1);
      validation.errors[0].reason.should.equal("required");
    });

    it("Min", () => {
      let schema = { type:'double', required:false, min:10 };
      let validation = iceworm_mongo.validators.double(9, schema);
      validation.valid.should.equal(false);
      validation.errors.length.should.equal(1);
      validation.errors[0].reason.should.equal("min");
    });

    it("Max", () => {
      let schema = { type:'double', required:false, max:10 };
      let validation = iceworm_mongo.validators.double(10, schema);
      validation.valid.should.equal(false);
      validation.errors.length.should.equal(1);
      validation.errors[0].reason.should.equal("max");
    });

  });
  describe("ObjectID Validator", () => {

    it('required', () => {
      let schema = { type:"objectid", required:true };
      let result = iceworm_mongo.validators.objectid(undefined, schema);
      result.valid.should.equal(false);
      result.errors.length.should.equal(1);
      result.errors[0].reason.should.equal('required');
    });

    it('format (wrong)', () => {
      let schema = { type:'objectid', required:false };
      let result = iceworm_mongo.validators.objectid('adfas', schema);
      result.valid.should.equal(false);
      result.errors.length.should.equal(1);
      result.errors[0].reason.should.equal('format');
    });

    it('format (correct)', () => {
      let schema = { type:'objectid', required:false };
      let result = iceworm_mongo.validators.objectid('5683b9b108c91955203b0c7c', schema);
      result.valid.should.equal(true);
    });

  });
});