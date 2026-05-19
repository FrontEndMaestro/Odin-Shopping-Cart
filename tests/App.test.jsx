import { afterEach, describe, it, expect, vi, test } from "vitest";
import App from "../src/App";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";

afterEach(() => {
  vi.resetAllMocks();
});
describe("Testing App component", () => {
  test("Loading is rendered while waiting for api response", async () => {
    const mockData = [
      {
        id: 1,
        img: "",
        title: "jacket",
        price: 22,
        cartCount: 0,
      },
    ];
    //mocking fetch request
    const mockFetch = vi.fn(() => {
      Promise.resolve({ json: Promise.resolve(mockData) });
    });
    vi.stubGlobal("fetch", mockFetch);

    render(<App />);
    screen.debug();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    //const homeScreen = await screen.findByText(/Urban Threads./i);

    //expect(homeScreen).toBeInTheDocument();
  });
});
