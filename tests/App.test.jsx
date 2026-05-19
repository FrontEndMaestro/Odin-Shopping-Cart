import { afterEach, describe, it, expect, vi, test, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import route from "../src/route.jsx";
import { RouterProvider } from "react-router";
import { createMemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import Card from "../src/components/Card.jsx";

vi.mock("../src/components/Card.jsx", () => ({
  default: ({ title, editCartCount }) => {
    return (
      <>
        <h1>{title}</h1>
        <button onClick={() => editCartCount(1, 1)}>Add to Cart</button>
      </>
    );
  },
}));

afterEach(() => {
  vi.resetAllMocks();
  vi.unstubAllGlobals();
});

describe("Testing App component", () => {
  beforeEach(() => {
    const mockData = [
      {
        id: 1,
        image: "",
        title: "jacket",
        price: 22,
      },
    ];
    const mockFetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(mockData) }),
    );
    vi.stubGlobal("fetch", mockFetch);
  });

  test("Content is loaded after Loading is rendered while waiting for api response", async () => {
    const router = createMemoryRouter(route);

    render(<RouterProvider router={router} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    const navHeading = await screen.findByText(/Urban Threads./i);
    const heroBannerHeading = await screen.findByText(
      /Upgrade Your Wardrobe with Immaculate Quality/i,
    );

    expect(navHeading).toBeInTheDocument();
    expect(heroBannerHeading).toBeInTheDocument();
  });

  test("Clicking View All products navigates to Shop Page", async () => {
    const router = createMemoryRouter(route);

    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    const link = await screen.findByText(/View All Products/i);

    await user.click(link);
    const heroBannerHeading = screen.queryByText(
      /Upgrade Your Wardrobe with Immaculate Quality/i,
    );
    expect(heroBannerHeading).not.toBeInTheDocument();
  });

  test("Error appears if fetch fails", async () => {
    const mockFetch = vi.fn().mockRejectedValue(new Error("error"));
    vi.stubGlobal("fetch", mockFetch);
    const router = createMemoryRouter(route);
    render(<RouterProvider router={router} />);

    expect(await screen.findByText(/error occured error/i)).toBeInTheDocument();
  });

  test("Cart quantity correctly Updates", async () => {
    const router = createMemoryRouter(route);
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    const navHeading = await screen.findByText(/Urban Threads./i);
    expect(navHeading).toBeInTheDocument();

    let cartCount = screen.queryByText("1");
    expect(cartCount).not.toBeInTheDocument();

    await user.click(await screen.findByText(/View All Products/i));

    await user.click(screen.getByText(/Add to Cart/i));
    

    expect(screen.queryByText("1")).toBeInTheDocument();
  });
});
