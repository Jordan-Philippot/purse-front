import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LeaveRequestType } from "api/leaveRequest.type";

interface VideoStateProps {
//   searchResult: VideoDataType[] | [];
  isLoading: boolean;
  search: string;
}

const initialState = {
  searchResult: [],
  isLoading: false,
  search: "",
} as VideoStateProps;

const videoSlice = createSlice({
  name: "leaveRequest",
  initialState,
  reducers: {
    setLeaveRequest(state, action: PayloadAction<LeaveRequestType[] | []>) {
      state.isLoading = true;
    //   state.searchResult = action.payload;
      state.isLoading = false;
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setLeaveRequest,setSearchText } = videoSlice.actions;
export default videoSlice.reducer;
