import { render, screen, fireEvent } from "@testing-library/react"
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";


const MockRouter = () => {
   return (
      <BrowserRouter>
         <Todo />
      </BrowserRouter>
   )
}

function addTask(tasks) {
   const inputEle = screen.getByPlaceholderText(/Add a new task here../i);

   const button = screen.getByRole("button", { name: /Add/i });
   tasks.map(task => {
      fireEvent.change(inputEle, { target: { value: task } });
      fireEvent.click(button);
   })

}

it("should not be able to type into input", () => {
   render(<MockRouter />);
   addTask(["MERN", "test"])

   const value = screen.queryByText(/mern/i);

   expect(value).not.toBeInTheDocument()

})

it("should be able to type into input", () => {
   render(<MockRouter />);
   addTask(["MERN", "SHOPPING", "test"])

   const value = screen.getByText(/mern/i);

   expect(value).toBeInTheDocument();

})