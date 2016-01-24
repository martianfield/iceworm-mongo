# iceworm-mongo

MongoDB plugin for [Iceworm](https://github.com/martianfield/iceworm).

## Supported Types

- `'double'`
- `'objectid'` - a mongodb.js ObjectID

## Example use

```javascript
const iceworm = require('iceworm');
const iceworm_mongo = require('iceworm-mongo');

iceworm.extend('mongo', iceworm_mongo);

let schema = {
    title: '*string',
    height: 'mongo.double',
    city_id: 'mongo.objectid'
};

let obj = {
    title: 'something',
    height: 23.4,
    city_id: '5690dc7a6327e02d5129973a'
};

var result = iceworm.evaluate(obj, schema);
if(result.valid) {
    console.log(result.obj); // output the projected object
} else {
    console.log(result.errors);
}
```


## Validation

- validation of `objectid` expects a valid 24 byte hex string.

## Projection

- projecting `objectid` expects a valid 24 byte hex string as the passed object. If this value is not valid, the projected value is set to `undefined`