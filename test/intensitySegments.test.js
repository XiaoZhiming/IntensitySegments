import { IntensitySegments } from '../src/intensitySegments';


/**
 * To Run Tests Execute: npm test
 */



describe('add test 1', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {

    expect(segments.toString()).toBe("[]");
  });

  test('add segment 1.1', () => {
    segments.add(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  test('add segment 1.2', () => {
    segments.add(20, 40, 1);
    expect(segments.toString()).toBe("[[10,1],[20,2],[30,1],[40,0]]");
  });

  test('add segment 1.3', () => {
    segments.add(10, 40, -2);
    expect(segments.toString()).toBe("[[10,-1],[20,0],[30,-1],[40,0]]");
  });
});


describe('add test 2', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('add segment 2.1', () => {
    segments.add(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  test('add segment 2.2', () => {
    segments.add(20, 40, 1);
    expect(segments.toString()).toBe("[[10,1],[20,2],[30,1],[40,0]]");
  });

  test('add segment 2.3', () => {
    segments.add(10, 40, -1);
    expect(segments.toString()).toBe("[[20,1],[30,0]]");
  });

  test('add segment 2.4', () => {
    segments.add(10, 40, -1);
    expect(segments.toString()).toBe("[[10,-1],[20,0],[30,-1],[40,0]]");
  });
});


describe('add test 3', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('add segment 3.1', () => {
    segments.add(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  test('add segment 3.2', () => {
    segments.add(10, 30, -1);
    expect(segments.toString()).toBe("[]");
  });

});


// Test Suite 4
describe('IntensitySegments4', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('add segment 4.1', () => {
    segments.add(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  test('add segment 4.2', () => {
    segments.add(1, 2, -1);
    expect(segments.toString()).toBe("[[1,-1],[2,0],[10,1],[30,0]]");
  });

});
