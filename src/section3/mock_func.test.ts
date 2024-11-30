it("はじめてのmock", () => {
  //jest.fn()
  const mockFunk = jest.fn(() => "Hello mock");
  expect(mockFunk()).toBe("Hello mock");
});

it("mockImplementation", () => {
  const mockFunk = jest.fn();
  mockFunk.mockImplementation(() => "Hello mock2");
  expect(mockFunk()).toBe("Hello mock2");
});
