import React from "react";
import { render, screen } from "@testing-library/react";
import CreatePost from "../../../pages/blog/create";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

useRouter.mockReturnValue({
  query: {},
  push: () => {},
});

describe("CreatePost", () => {
  it("renders the 'Create Post' heading", () => {
    render(<CreatePost />);
    const heading = screen.getByRole("heading", { name: "Create Post" });
    expect(heading).toBeInTheDocument();
  });

  it("renders the PostForm component with a null post prop", () => {
    const { getByTestId } = render(<CreatePost />);
    const postForm = getByTestId("post-form");
    expect(postForm).toBeTruthy();
  });
});
