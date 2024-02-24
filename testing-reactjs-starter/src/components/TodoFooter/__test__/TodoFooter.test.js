import { render, screen } from "@testing-library/react"
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockRouter = ({ numberOfIncompleteTasks }) => {
   return (
      <BrowserRouter>
         <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
      </BrowserRouter>
   )
}


describe("add button function", () => {
   it("should render same text passed into title props", () => {
      render(<MockRouter numberOfIncompleteTasks="5" />);
      const headerText = screen.getByText(/5 tasks left/i);
      expect(headerText).toBeInTheDocument();
   })
   // it("should render same text passed into title props", () => {
   //    render(<MockRouter numberOfIncompleteTasks="5" />);
   //    const headerText = screen.getByText(/5 tasks left/i);
   //    expect(headerText).toBeInTheDocument();
   // })

   // it("should render same text passed into title props", () => {
   //    render(<MockRouter numberOfIncompleteTasks="5" />);
   //    const headerText = screen.getByText(/5 tasks left/i);
   //    expect(headerText).toBeInTheDocument();
   // })

   // it("should render same text passed into title props", () => {
   //    render(<MockRouter numberOfIncompleteTasks="5" />);
   //    const headerText = screen.getByText(/5 tasks left/i);
   //    expect(headerText).toBeInTheDocument();
   // })
})

// it("should render same text passed into title props", () => {
//    render(<MockRouter numberOfIncompleteTasks="5" />);
//    const headerText = screen.getByText(/5 tasks left/i);
//    expect(headerText).toBeInTheDocument();
// })

// it("should render same text passed into title props", () => {
//    render(<MockRouter numberOfIncompleteTasks="5" />);
//    const headerText = screen.getByText(/5 tasks left/i);
//    expect(headerText).toBeInTheDocument();
// })

// it("should render same text passed into title props", () => {
//    render(<MockRouter numberOfIncompleteTasks="5" />);
//    const headerText = screen.getByText(/5 tasks left/i);
//    expect(headerText).toBeInTheDocument();
// })

// it("should render same text passed into title props", () => {
//    render(<MockRouter numberOfIncompleteTasks="5" />);
//    const headerText = screen.getByText(/5 tasks left/i);
//    expect(headerText).toBeInTheDocument();
// })

// it("should render same text passed into title props", () => {
//    render(<MockRouter numberOfIncompleteTasks="5" />);
//    const headerText = screen.getByText(/5 tasks left/i);
//    expect(headerText).toBeInTheDocument();
// })

// it("should render same text passed into title props", () => {
//    render(<MockRouter numberOfIncompleteTasks="5" />);
//    const headerText = screen.getByText(/5 tasks left/i);
//    expect(headerText).toBeInTheDocument();
// })


