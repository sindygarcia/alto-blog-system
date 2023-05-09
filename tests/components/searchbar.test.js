import React from "react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import SearchBar from "../../components/searchBar";
import { getAllBlogs, getSingleBlog } from "../../utils/blogs";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mocking the getAllBlogs function
jest.mock("../../utils/blogs", () => ({
  getAllBlogs: jest.fn(() => [
    { name: "Post 1", id: 1 },
    { name: "Post 2", id: 2 },
  ]),
  getSingleBlog: jest.fn((id) => ({ id, name: `Post ${id}` })),
}));

useRouter.mockReturnValue({
  query: {},
  push: (route) => {},
});

describe("SearchBar", () => {
  it("renders", () => {
    const component = render(<SearchBar />);
    waitFor(() => expect(component).toBeInTheDocument());
  });

  it("renders a search button", () => {
    const { getByTestId } = render(<SearchBar />);
    const btn = getByTestId("search-btn");
    expect(btn).toBeInTheDocument();
  });

  it("fetches options from getAllBlogs and displays them in the autocomplete", () => {
    render(<SearchBar />);
    const input = screen.getByLabelText("Search the Site");
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "ArrowDown" });
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });

  it("navigates to the selected blog post on search button click", () => {
    useRouter.mockReturnValue({ push: jest.fn() });
    const router = useRouter();
    const routerSpy = jest.spyOn(router, "push");
    render(<SearchBar />);
    const input = screen.getByLabelText("Search the Site");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Post 2" } });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(getSingleBlog).toHaveBeenCalledWith(2);
    waitFor(() => expect(routerSpy).toHaveBeenCalledWith("/blog/view/2"));
  });
});
