import { pingPong } from './../src/ping-pong.js';

describe('pingPong', function() {

  it('should test whether pingPong function works up to 3', function() {
    var testArray = pingPong(3);
    expect(testArray[0]).toEqual(1);
    expect(testArray[1]).toEqual(2);
    expect(testArray[2]).toEqual("ping");
  });
  it('should test whether pingPong function works up to 5', function() {
    var testArray = pingPong(5);
    expect(testArray[0]).toEqual(1);
    expect(testArray[1]).toEqual(2);
    expect(testArray[2]).toEqual("ping");
    expect(testArray[3]).toEqual(4);
    expect(testArray[4]).toEqual("pong");
  });
  it('should test whether pingPong function works up to 15', function() {
    var testArray = pingPong(15);
    expect(testArray[0]).toEqual(1);
    expect(testArray[1]).toEqual(2);
    expect(testArray[2]).toEqual("ping");
    expect(testArray[3]).toEqual(4);
    expect(testArray[4]).toEqual("pong");
    expect(testArray[5]).toEqual("ping");
    expect(testArray[6]).toEqual(7);
    expect(testArray[7]).toEqual(8);
    expect(testArray[8]).toEqual("ping");
    expect(testArray[9]).toEqual("pong");
    expect(testArray[10]).toEqual(11);
    expect(testArray[11]).toEqual("ping");
    expect(testArray[12]).toEqual(13);
    expect(testArray[13]).toEqual(14);
    expect(testArray[14]).toEqual("ping-pong");
  });
});
