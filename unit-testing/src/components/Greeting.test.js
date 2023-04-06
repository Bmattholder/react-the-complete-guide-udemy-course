import { render, screen } from "@testing-library/react";

import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
describe("Greeting component", () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "It\'s" good to see you! if the button was NOT clicked', () => {
    render(<Greeting />);

    const greetingElement = screen.getByText("It's good to see you!");
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked.', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("doesn't render 'It's good to see you!' if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
