'use strict';
const ObjectID = require('mongodb').ObjectID;
const should = require('chai').should();
const expect = require('chai').expect;
const iceworm_mongo = require(__dirname + '/../index.js');


describe("Patching", () => {

  describe("double patching", () => {
    it("undefined / null", () => {
      expect(iceworm_mongo.patchers.double(undefined)).to.equal(undefined);
      expect(iceworm_mongo.patchers.double(null)).to.equal(null);
    });
    it("NaN", () => {
      expect(iceworm_mongo.patchers.double("something")).to.equal(undefined);
    });
    it("a number", () => {
      let result = iceworm_mongo.patchers.double(1);
      result.should.equal(1);
      expect(result).to.be.a('number');
    });
    it("a numeric string", () => {
      let result = iceworm_mongo.patchers.double("1.8");
      result.should.equal(1.8);
      expect(result).to.be.a('number');
    });
  });

  describe("objectid patching", () => {
    it("undefined / null", () => {
      expect(iceworm_mongo.patchers.objectid(undefined)).to.equal(undefined);
      expect(iceworm_mongo.patchers.objectid(null)).to.equal(null);
    });
    it("valid hex string", () => {
      let result = iceworm_mongo.patchers.objectid("5683b9b108c91955203b0c7c");
      expect(result).to.not.equal(undefined);
      (result instanceof ObjectID).should.equal(true);
    });
    it("invalid hex string", () => {
      expect(iceworm_mongo.patchers.objectid("just something")).to.equal(undefined);
    });
  });

});
