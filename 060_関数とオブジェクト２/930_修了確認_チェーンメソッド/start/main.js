/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 *
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 *
 *
 * 例１）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 *
 * 例２）
 * const calc = new Calculator();
 *
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

class Calculator {
  constructor() {
    this.val = null;
    this.__operator = "";
  }

  set(val) {
    if (this.val === null) {
      this.val = val;
    }
    if (this._operator === "plus") {
      this.val += val;
    }
    if (this._operator === "minus") {
      this.val -= val;
    }
    if (this._operator === "multiply") {
      this.val *= val;
    }
    if (this._operator === "divide") {
      this.val /= val;
    }
    console.log(this.val);
    return this;
  }
  plus() {
    this._operator = "plus";
    return this;
  }
  minus() {
    this._operator = "minus";
    return this;
  }
  multiply() {
    this._operator = "multiply";
    return this;
  }
  divide() {
    this._operator = "divide";
    return this;
  }
}

const calc = new Calculator();

calc.set(10).minus().set(3).multiply().set(6).divide().set(2).plus().set(2);

// class Calculator {
//   constructor() {
//     this.val = null;
//     this.__operator;
//   }

//   set(val) {
//     if (this.val === null) {
//       this.val = val;
//     } else {
//       this.__operator(this.val, val);
//     }
//     return this;
//   }

//   plus() {
//     this.__operator = function (val1, val2) {
//       const result = val1 + val2;
//       this._equal(result);
//     };
//     return this;
//   }

//   minus() {
//     this.__operator = function (val1, val2) {
//       const result = val1 - val2;
//       this._equal(result);
//     };
//     return this;
//   }

//   multiply() {
//     this.__operator = function (val1, val2) {
//       const result = val1 * val2;
//       this._equal(result);
//     };
//     return this;
//   }

//   divide() {
//     this.__operator = function (val1, val2) {
//       const result = val1 / val2;
//       this._equal(result);
//     };
//     return this;
//   }

//   _equal(result) {
//     this.val = result;
//     console.log(result);
//   }
// }
