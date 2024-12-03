import axios from "axios";
import Users from "./practice";

// jest.mock("axios");
// const mockResult = {
//   data: [
//     {
//       id: 1,
//       name: "田中太郎",
//       email: "tanaka@example.com",
//     },
//     {
//       id: 2,
//       name: "山田花子",
//       email: "yamada@example.com",
//     },
//   ],
// };
// const mockAxios = jest.mocked(axios);
// mockAxios.get.mockResolvedValue(mockResult);

// it("mockResultがデータを返却する", async () => {
//   const result = await Users.all();
//   expect(result).toBe(mockResult.data);
//   expect(axios.get).toHaveBeenCalledTimes(1);
// });

jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("Users", () => {
  beforeEach(() => {
    mockAxios.get.mockClear;
  });

  it("ユーザを取得できる", async () => {
    const users = [{ name: "Taro" }, { name: "Hanako" }];
    const resp = { data: users };
    mockAxios.get.mockResolvedValue(resp);

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockAxios.get).toHaveBeenCalledWith("/users.json");
  });
});
