import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders example react project text", () => {
  render(<App />);
  const textElement = screen.getByText(/example react project/i);
  expect(textElement).toBeInTheDocument();
});
