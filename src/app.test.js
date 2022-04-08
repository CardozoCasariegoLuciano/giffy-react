import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Tests de la APP", () => {
  test("Render without crashing", async () => {
    render(<App />);
    const title = screen.getByText(/Lastest gifs searched/i);
    expect(title).toBeInTheDocument();
  });
});
