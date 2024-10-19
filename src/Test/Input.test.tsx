import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Input from "../components/input";
import '@testing-library/jest-dom';

describe("Input Component", () => {
  it("renders the input with label", () => {
    render(<Input label="Password" type="password" error="" />);
    
    // Check if the label is rendered correctly
    const labelElement = screen.getByText(/password/i);
    expect(labelElement).toBeInTheDocument();
    
    // Check if the input element is present
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("toggles password visibility", () => {
    render(<Input label="Password" type="password" error="" />);
    
    // Initially, the input should be of type 'password'
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("type", "password");
    
    // Click to reveal the password
    const toggleIcon = screen.getByRole("button");
    fireEvent.click(toggleIcon);
    expect(inputElement).toHaveAttribute("type", "text");
    
    // Click again to hide the password
    fireEvent.click(toggleIcon);
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it("displays an error message when error prop is passed", () => {
    const errorMessage = "This field is required";
    render(<Input label="Password" type="password" error={errorMessage} />);
    
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it("forwards the ref to the input element", () => {
    const ref = { current: null };
    render(<Input label="Password" type="password" error="" ref={ref} />);
    
    // Check if ref.current is the input element
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
