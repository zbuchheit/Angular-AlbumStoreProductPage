let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('ProductService getAlbum Method', function() {
  it(`should type response.json() to Album @product-service-types-getalbum-responsejson-to-album`, function () {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../../app/product.service.ts').toString();
    } catch (e) {
      assert(false, "The ProductService hasn't been created yet.")
    }
  });
});
