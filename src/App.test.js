import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Example React project text", () => {
  render(<App />);
  const textElement = screen.getByText(/Example react project/);
  expect(textElement).toBeInTheDocument();
});
