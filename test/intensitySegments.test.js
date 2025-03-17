import { IntensitySegments } from '../src/intensitySegments';


/**
 * To Run Tests Execute: npm test
 */

describe('set test 1', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {

    expect(segments.toString()).toBe("[]");
  });

  test('set segment 1.1', () => {
    segments.set(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  test('set segment 1.2', () => {
    segments.set(20, 40, 1);
    expect(segments.toString()).toBe("[[10,1],[40,0]]");
  });

  test('set segment 1.3', () => {
    segments.set(10, 40, -2);
    expect(segments.toString()).toBe("[[10,-2],[40,0]]");
  });
});


describe('set test 2', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('set segment 2.1', () => {
    segments.set(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  test('set segment 2.2', () => {
    segments.set(20, 40, 1);
    expect(segments.toString()).toBe("[[10,1],[40,0]]");
  });

  test('set segment 2.3', () => {
    segments.set(10, 40, -1);
    expect(segments.toString()).toBe("[[10,-1],[40,0]]");
  });

  test('set segment 2.4', () => {
    segments.set(10, 40, -1);
    expect(segments.toString()).toBe("[[10,-1],[40,0]]");
  });
});


describe('set test 3', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('set segment 3.1', () => {
    segments.set(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  test('set segment 3.2', () => {
    segments.set(10, 30, -1);
    expect(segments.toString()).toBe("[[10,-1],[30,0]]");
  });

});


describe('set test 4', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('set segment 4.1', () => {
    segments.set(10, 30, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0]]");
  });

  test('set segment 4.2', () => {
    segments.set(1, 2, -1);
    expect(segments.toString()).toBe("[[1,-1],[2,0],[10,1],[30,0]]");
  });

  test('set segment 4.3', () => {
    segments.set(1, 30, 0);
    expect(segments.toString()).toBe("[]");
  });

});


describe('set test 5', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('set segment 5.1', () => {
    segments.set(5, 15, 2);
    expect(segments.toString()).toBe("[[5,2],[15,0]]");
  });

  test('set segment 5.2', () => {
    segments.set(10, 20, 3);
    expect(segments.toString()).toBe("[[5,2],[10,3],[20,0]]");
  });

  test('set segment 5.3', () => {
    segments.set(25, 30, 1);
    expect(segments.toString()).toBe("[[5,2],[10,3],[20,0],[25,1],[30,0]]");
  });

  test('set segment 5.4', () => {
    segments.set(5, 30, -1);
    expect(segments.toString()).toBe("[[5,-1],[30,0]]");
  });
});

describe('set test 6', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('set segment 6.1', () => {
    segments.set(10, 20, 1);
    expect(segments.toString()).toBe("[[10,1],[20,0]]");
  });

  test('set segment 6.2', () => {
    segments.set(15, 25, 2);
    expect(segments.toString()).toBe("[[10,1],[15,2],[25,0]]");
  });

  test('set segment 6.3', () => {
    segments.set(5, 15, 3);
    expect(segments.toString()).toBe("[[5,3],[15,2],[25,0]]");
  });

  test('set segment 6.4', () => {
    segments.set(20, 30, -2);
    expect(segments.toString()).toBe("[[5,3],[15,2],[20,-2],[30,0]]");
  });
});


describe('set test 7', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('set segment 7.1', () => {
    segments.set(10, 20, 1);
    expect(segments.toString()).toBe("[[10,1],[20,0]]");
  });

  test('set segment 7.2', () => {
    segments.set(10, 20, 1);
    expect(segments.toString()).toBe("[[10,1],[20,0]]");
  });

  test('set segment 7.3', () => {
    segments.set(10, 20, -2);
    expect(segments.toString()).toBe("[[10,-2],[20,0]]");
  });
});


describe('set test 8', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('set segment 8.1', () => {
    segments.set(10, 30, 2);
    expect(segments.toString()).toBe("[[10,2],[30,0]]");
  });

  test('set segment 8.2', () => {
    segments.set(20, 40, -1);
    expect(segments.toString()).toBe("[[10,2],[20,-1],[40,0]]");
  });

  test('set segment 8.3', () => {
    segments.set(30, 50, 3);
    expect(segments.toString()).toBe("[[10,2],[20,-1],[30,3],[50,0]]");
  });

  test('set segment 8.4', () => {
    segments.set(15, 45, -2);
    expect(segments.toString()).toBe("[[10,2],[15,-2],[45,0]]");
  });
});


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
    segments.add(0, 40, -1);
    expect(segments.toString()).toBe("[[0,-1],[10,0],[30,-1],[40,0]]");
  });

  test('add segment 1.3', () => {
    segments.add(0, 50, 1);
    expect(segments.toString()).toBe("[[10,1],[30,0],[40,1],[50,0]]");
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


describe('add test 4', () => {
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


describe('add test 5', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('add segment 5.1', () => {
    segments.add(5, 15, 2);
    expect(segments.toString()).toBe("[[5,2],[15,0]]");
  });

  test('add segment 5.2', () => {
    segments.add(10, 20, 3);
    expect(segments.toString()).toBe("[[5,2],[10,5],[15,3],[20,0]]");
  });

  test('add segment 5.3', () => {
    segments.add(25, 30, 1);
    expect(segments.toString()).toBe("[[5,2],[10,5],[15,3],[20,0],[25,1],[30,0]]");
  });

  test('add segment 5.4', () => {
    segments.add(5, 30, -1);
    expect(segments.toString()).toBe("[[5,1],[10,4],[15,2],[20,-1],[25,0]]");
  });
});

describe('add test 6', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('add segment 6.1', () => {
    segments.add(10, 20, 1);
    expect(segments.toString()).toBe("[[10,1],[20,0]]");
  });

  test('add segment 6.2', () => {
    segments.add(15, 25, 2);
    expect(segments.toString()).toBe("[[10,1],[15,3],[20,2],[25,0]]");
  });

  test('add segment 6.3', () => {
    segments.add(5, 15, 3);
    expect(segments.toString()).toBe("[[5,3],[10,4],[15,3],[20,2],[25,0]]");
  });

  test('add segment 6.4', () => {
    segments.add(20, 30, -2);
    expect(segments.toString()).toBe("[[5,3],[10,4],[15,3],[20,0],[25,-2],[30,0]]");
  });
});


describe('add test 7', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('add segment 7.1', () => {
    segments.add(10, 20, 1);
    expect(segments.toString()).toBe("[[10,1],[20,0]]");
  });

  test('add segment 7.2', () => {
    segments.add(10, 20, 1);
    expect(segments.toString()).toBe("[[10,2],[20,0]]");
  });

  test('add segment 7.3', () => {
    segments.add(10, 20, -2);
    expect(segments.toString()).toBe("[]");
  });
});


describe('add test 8', () => {
  let segments;
  segments = new IntensitySegments();

  test('initialize with an empty segments array', () => {
    expect(segments.toString()).toBe("[]");
  });

  test('add segment 8.1', () => {
    segments.add(10, 30, 2);
    expect(segments.toString()).toBe("[[10,2],[30,0]]");
  });

  test('add segment 8.2', () => {
    segments.add(20, 40, -1);
    expect(segments.toString()).toBe("[[10,2],[20,1],[30,-1],[40,0]]");
  });

  test('add segment 8.3', () => {
    segments.add(30, 50, 3);
    expect(segments.toString()).toBe("[[10,2],[20,1],[30,2],[40,3],[50,0]]");
  });

  test('add segment 8.4', () => {
    segments.add(15, 45, -2);
    expect(segments.toString()).toBe("[[10,2],[15,0],[20,-1],[30,0],[40,1],[45,0]]");
  });
});
