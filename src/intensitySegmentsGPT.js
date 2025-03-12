export class IntensitySegments {
  constructor() {
    this.changes = new Map();
  }

  add(from, to, amount) {
    if (amount === 0) return;

    this.changes.set(from, (this.changes.get(from) || 0) + amount);
    this.changes.set(to, (this.changes.get(to) || 0) - amount);
  }

  toString() {
    let result = [];
    let intensity = 0;

    // Convert Map to sorted array
    const sortedKeys = [...this.changes.keys()].sort((a, b) => a - b);

    for (const key of sortedKeys) {
      intensity += this.changes.get(key);
      
      // 避免存入无意义的 [x, 0] 作为开头
      if (result.length === 0 && intensity === 0) continue;

      // 避免存入连续相同值
      if (result.length && result[result.length - 1][1] === intensity) continue;

      result.push([key, intensity]);
    }

    return JSON.stringify(result);
  }
}