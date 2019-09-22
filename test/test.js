const intersect = require("rectangles-intersect");
const overlap = require("rectangle-overlap");
var assert = require('assert');

describe('Intersect', function() {
    it('should test if rectangles intersect', function() {
        rect1 = [[0,10], [10,0], [20,10], [10,20]]
        rect2 = [[10,10], [20,0], [30,10], [20,20]]
        assert.equal(intersect(rect1, rect2), true);
  });
});

describe('Doesn\'t Intersect', function() {
    it('should test if rectangles don\'t intersect', function() {
        rect1 = [[0,0], [10,0], [10,10], [0,10]]
        rect2 = [[20,0], [30,0], [30,10], [20,10]]
        assert.equal(intersect(rect1, rect2), false);
  });
});

describe('Overlap', function() {
    it('should test if rectangles overlap', function() {
        let rect1 = {x: 0, y: 0, width: 10, height: 10};
        let rect2 = {x: 2, y: 3, width: 42, height: 42};
        assert.equal(Object.keys(overlap(rect1, rect2)).length > 0, true)
  });
});

describe('Doesn\'t Overlap', function() {
    it('should test if rectangles don\'t overlap', function() {
        let rect1 = {x: 0, y: 0, width: 10, height: 10};
        let rect2 = {x: 20, y: 20, width: 42, height: 42};
        assert.equal(overlap(rect1, rect2), null);
  });
});
