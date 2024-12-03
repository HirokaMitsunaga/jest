import fs from "fs";
import { readFile } from "./mock_module";

//これだけだとコンパイラがモックとして認識できない
jest.mock("fs");
//この宣言によりfs型のオブジェクトが定義されたとして認識してもらえる
const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("dummy data");

it("readFileがデータを返却する", () => {
  const result = readFile("path/dummy");
  expect(result).toBe("dummy data");
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});
