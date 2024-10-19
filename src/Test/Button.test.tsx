import { render, screen } from "@testing-library/react";
import Button from "../components/button";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom'; 

describe("Button Component", () => {
  it("renders the button with children", () => {
    render(<Button>Click Me</Button>);
    
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies the default class to the button", () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("bg-black");
  });

  it("applies passed props to the button", () => {
    render(<Button disabled>Disabled Button</Button>);
    
    const buttonElement = screen.getByText(/disabled button/i);
    expect(buttonElement).toBeDisabled();
  });

  it("renders with passed variant (fill or hollow)", () => {
    render(<Button varient="fill">Filled Button</Button>);
    
    const buttonElement = screen.getByText(/filled button/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
