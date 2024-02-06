import { FieldErrors } from "hooks/useLeaveRequest";
import { getDefaultConfig } from "./app";
import {
  LeaveRequestType,
  ManagerLeaveRequestType,
  EmployeeLeaveRequestType,
} from "./leaveRequest.type";

const BASE_URL = process.env.REACT_APP_API_URL_SYMFONY;

export const getLeaveRequestList = async (): Promise<LeaveRequestType[]> => {
  const response = await fetch(
    `${BASE_URL}leaverequest/list`,
    getDefaultConfig()
  );
  const data = await response.json();
  return data.list;
};

export const postLeaveRequest = async (
  leaveRequestData: ManagerLeaveRequestType | EmployeeLeaveRequestType
): Promise<{ added: boolean; errors: FieldErrors | undefined }> => {
  const response = await fetch(`${BASE_URL}leaverequest/add`, {
    ...getDefaultConfig(),
    method: "POST",
    body: JSON.stringify(leaveRequestData),
  });
  const data = await response.json();
  return data;
};
