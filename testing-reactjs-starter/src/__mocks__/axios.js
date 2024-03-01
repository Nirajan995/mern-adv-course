import { mockedResponse } from "../constants/followerList";

export default {
   get: jest.fn().mockResolvedValue(mockedResponse)
}