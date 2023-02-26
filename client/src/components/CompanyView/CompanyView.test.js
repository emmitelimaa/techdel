import { render, screen } from "@testing-library/react";
import CompanyView from "./CompanyView";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<CompanyView />);

  // ACT
  await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Hello World");
});
