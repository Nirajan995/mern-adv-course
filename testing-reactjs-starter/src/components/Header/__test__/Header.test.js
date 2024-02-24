//render
import { render, screen } from "@testing-library/react"
import Header from "../Header"
//screen -> interact
//expect

//test,it

// it("should render same text passed into title props", () => {
//    render(<Header title="Test Title" />);
//    const headerText = screen.getByText("here i am");
//    expect(headerText).toBeInTheDocument();
// })

it("should render same text passed into title props", () => {
   render(<Header title="Test Title" />);
   const headerText = screen.getByRole("heading");
   expect(headerText).toBeInTheDocument();
})

it("should render same text passed into title props", () => {
   render(<Header title="Test Title" />);
   const headerText = screen.getByTestId("heading-1");
   expect(headerText).toBeInTheDocument();
})


