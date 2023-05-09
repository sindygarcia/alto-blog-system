import React from "react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import PostForm from "../../components/postForm";
import { getAllBlogs, getSingleBlog } from "../../utils/blogs";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mocking the getAllBlogs function
jest.mock("../../utils/blogs", () => ({
  getAllBlogs: jest.fn(() => []),
  getSingleBlog: jest.fn((id) => ({ id, name: `Post ${id}` })),
}));

useRouter.mockReturnValue({
  query: {},
  push: (route) => {},
});

describe("PostForm", () => {
  it("renders", () => {
    const component = render(<PostForm />);
    waitFor(() => expect(component).toBeInTheDocument());
  });

  it("renders a save button", () => {
    const { getByTestId } = render(<PostForm />);
    const btn = getByTestId("save-btn");
    expect(btn).toBeInTheDocument();
  });

  it("renders a cancel button", () => {
    const { getByTestId } = render(<PostForm />);
    const btn = getByTestId("cancel-btn");
    expect(btn).toBeInTheDocument();
  });

  it("saves post the localstorage on click Save", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
    render(<PostForm />);
    const nameInput = screen.getByLabelText("Name");
    fireEvent.focus(nameInput);
    fireEvent.change(nameInput, { target: { value: "Post 1" } });
    const contentInput = screen.getByLabelText("Content");
    fireEvent.focus(contentInput);
    fireEvent.change(contentInput, { target: { value: "This is a Test!!!" } });

    fireEvent.click(screen.getByTestId("save-btn"));

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "cms_blog_posts",
      JSON.stringify({
        posts: [
          {
            id: 1,
            name: "Post 1",
            content: "This is a Test!!!",
          },
        ],
      })
    );
  });

  it("redirects to blog list page upon save", () => {
    useRouter.mockReturnValue({ push: jest.fn() });
    const router = useRouter();
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
    const routerSpy = jest.spyOn(router, "push");
    render(<PostForm />);

    const nameInput = screen.getByLabelText("Name");
    fireEvent.focus(nameInput);
    fireEvent.change(nameInput, { target: { value: "Post 1" } });
    const contentInput = screen.getByLabelText("Content");
    fireEvent.focus(contentInput);
    fireEvent.change(contentInput, { target: { value: "This is a Test!!!" } });

    fireEvent.click(screen.getByTestId("save-btn"));
    waitFor(() => expect(routerSpy).toHaveBeenCalledWith("/blog"));
  });

  it("returns to previous page upon cancel", () => {
    useRouter.mockReturnValue({ push: jest.fn(), back: jest.fn() });
    const router = useRouter();
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
    Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
    const routerSpy = jest.spyOn(router, "back");
    render(<PostForm />);
    fireEvent.click(screen.getByTestId("cancel-btn"));
    waitFor(() => expect(routerSpy).toHaveBeenCalled());
  });
});
