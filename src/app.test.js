import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

describe("Tests de la APP", () => {
  test("Render without crashing", async () => {
    const title = screen.getByText(/Lastest gifs searched/i);
    expect(title).toBeInTheDocument();
  });
});
