//toThrow
import { divide, ZeroDivisorError } from "./divide";

it("0で割るとエラーが発生する", () => {
  //関数の例外処理においては、関数を無名関数でラップする必要がある。
  //理由：テスト対象の関数でエラーが発生すると、toThrowが呼ばれる前に関数の実行が停止してしまい、Jestがエラーを検証できなくるため、
  expect(() => divide(10, 0)).toThrow();
  expect(() => divide(10, 0)).toThrow("0で割ることはできません");
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});
