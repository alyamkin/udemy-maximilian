import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a test", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloeWorldElement = screen.getByText("Hello World!");
    expect(helloeWorldElement).toBeInTheDocument();
  });

  test("renders 'It's good to see you!' if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("It's good to see you!");
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", async () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'It's good to see you!' if the button was clicked", async () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("It's good to see you!");
    expect(outputElement).toBeNull();
  });
});
