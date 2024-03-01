import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";
import { render, screen } from "@testing-library/react"


const MockRouter = () => {
   return (
      <BrowserRouter>
         <FollowersList />
      </BrowserRouter>
   )
}



describe("Followers list", () => {

   //beforeEach, beforeAll, afterEach, afterAll


   beforeAll(() => {
      jest.mock("../../../__mocks__/axios");
   })


   it("should render followers list", async () => {
      render(<MockRouter />);
      const value = await screen.findByTestId(/follower-list-0/i);
      expect(value).toBeInTheDocument();

   })

   it("should render total followers list not to be 5 on first load", async () => {
      render(<MockRouter />);
      const value = await screen.findAllByTestId(/follower-list/i);
      expect(value.length).not.toBe(5);

   })

   it("should render total followers list  to be 10 on first load", async () => {
      render(<MockRouter />);
      const value = await screen.findAllByTestId(/follower-list/i);
      screen.debug();
      expect(value.length).toBe(10);

   })
})