import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Hello />);

  // ACT
  await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Hello World");
});
