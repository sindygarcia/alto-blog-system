import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import HomePage from "../../pages/index";

describe("HomePage", () => {
  it("renders", () => {
    const component = render(<HomePage />);
    waitFor(() => expect(component).toBeInTheDocument());
  });

  it("renders the hero image", () => {
    const { getByAltText } = render(<HomePage />);
    const heroImage = getByAltText("Blog Hero Image");
    waitFor(() => expect(heroImage).toBeInTheDocument());
    // expect(heroImage).toBeDefined();
  });

  it("renders the week highlights section", () => {
    const { getByText } = render(<HomePage />);
    const weekHighlights = getByText("Week Highlights");
    waitFor(() => expect(weekHighlights).toBeInTheDocument());
    // expect(weekHighlights).toBeDefined();
  });

  it("renders the mini post component", () => {
    const { getByTestId } = render(<HomePage />);
    const miniPost = getByTestId("hp-mini-post");
    // expect(miniPost).toBeTruthy();
    waitFor(() => expect(miniPost).toBeInTheDocument());
  });
});
