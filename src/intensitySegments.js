/**
 * @author zhiming.xiao
 * Created at 2025/3/12 23:08
 */
export class IntensitySegments {
  constructor() {
    this.segments = [];
  }

  /**
   * 
   * @param {integer} from 区间开始
   * @param {integer} to 区间结束
   * @param {number} amount 变化值
   * @throws {Error} from must be less than to
   * @returns {void}
   */
  add(from, to, amount) {
    // 特殊情况处理
    if (amount === 0) {
      return;
    }
    this.change(from, to, amount, 0)
  }

  /**
   * 
   * @param {integer} from 区间开始
   * @param {integer} to 区间结束
   * @param {number} amount 变化值
   * @throws {Error} from must be less than to
   * @returns {void}
   */
  set(from, to, amount) {
    // 特殊情况处理
    if (amount === 0 && this.segments.length === 0) {
      return;
    }
    this.change(from, to, amount, 1)
  }

  // 转换为字符串
  toString() {
    return JSON.stringify(this.segments);
  }

  /**
   * 
   * @param {integer} from 区间开始
   * @param {integer} to 区间结束
   * @param {number} amount 变化值
   * @param {integer} mode  0:add模式, 1:set模式
   * @throws {Error} from must be less than to
   * @returns {void}
   */
  change(from, to, amount, mode) {
    // 入参检查
    if (from >= to) {
      throw new Error("from must be less than to");
    }

    if (this.segments.length === 0) {
      this.segments.push([from, amount])
      this.segments.push([to, 0])
      return
    }

    let hasFrom = false;
    let hasTo = false;
    for (let i = 0; i < this.segments.length; i++) {
      let [m, n] = this.segments[i];
      if (m === from) {
        hasFrom = true;
      } else if (m === to) {
        hasTo = true;
        break;
      }
    }

    if (!hasFrom) {
      this.segments.push([from, 0])
    }
    if (!hasTo) {
      this.segments.push([to, 0])
    }

    //segments 按k排序
    this.segments.sort((a, b) => a[0] - b[0]);

    let segments = [];
    //k是否在from\to的覆盖区间中
    let match = false;
    let lastValue = 0;
    for (let j = 0; j < this.segments.length; j++) {
      let [k, v] = this.segments[j];
      if (k === from) {
        if (!hasFrom && j > 0) {
          v = this.segments[j - 1][1];
        }
        match = true;
      } else if (k === to) {
        match = false;
      }

      if (match) {
        let newValue = 0;
        if (mode === 0) {
          newValue = v + amount;
        } else if (mode === 1) {
          newValue = amount;
        }
        if (lastValue !== newValue) {
          segments.push([k, newValue])
          lastValue = newValue;
        }
      } else {
        if (lastValue !== v) {
          segments.push([k, v])
          lastValue = v;
        }
      }
    }

    this.segments = segments
  }
}