import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./Card";

// Smoke Test

it("renders without crashing", function() {
    render(<App />);
  });


// Snapshot Test:

it ("matches Snapshot", function() {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });