import React from "react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { render, waitFor } from "@testing-library/react";
import NavBar from "../../components/navBar";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
  query: {},
  push: (route) => {},
});

describe("NavBar", () => {
  it("renders", () => {
    const component = render(<NavBar />);
    waitFor(() => expect(component).toBeInTheDocument());
  });

  it("renders the logo", () => {
    const { getByTestId } = render(<NavBar />);
    const logo = getByTestId("logo");
    // expect(weekHighlights).toBeDefined();
    waitFor(() => expect(logo).toBeInTheDocument());
  });

  it("renders menu", () => {
    const { getByTestId } = render(<NavBar />);
    const menu = getByTestId("main-menu");
    // expect(miniPost).toBeTruthy();
    waitFor(() => expect(menu).toBeInTheDocument());
  });

  it("renders search bar", () => {
    const { getByTestId } = render(<NavBar />);
    const searchbar = getByTestId("search-bar");
    // expect(miniPost).toBeTruthy();
    waitFor(() => expect(searchbar).toBeInTheDocument());
  });
});
