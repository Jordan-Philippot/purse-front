import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import useMessage from "hooks/useMessage";
import { postLeaveRequest } from "api/leaveRequest";
import {
  EmployeeLeaveRequestType,
  LeaveRequestType,
  ManagerLeaveRequestType,
} from "api/leaveRequest.type";
import { getLeaveRequestList } from "api/leaveRequest";
import { useState } from "react";

interface LeaveRequestHook {
  leaveRequestList: LeaveRequestType[] | undefined;
  addLeaveRequest: (
    leaveRequestData: ManagerLeaveRequestType | EmployeeLeaveRequestType
  ) => void;
  isLoading: boolean;
  errors: FieldErrors | undefined;
  isActionSuccess: boolean;
}
export type FieldErrors = {
  [fieldName: string]: any;
};

export function useLeaveRequest(): LeaveRequestHook {
  const queryClient = useQueryClient();
  const { sendInformation, sendError } = useMessage();
  const [errors, setErrors] = useState<FieldErrors | undefined>();
  const [isActionSuccess, setIsActionSuccess] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ["leaveRequestList"],
    queryFn: getLeaveRequestList,
  });

  const mutationLeaveRequest = useMutation({
    mutationFn: getLeaveRequestList,
    mutationKey: ["leaveRequestList"],
    onSuccess: async () => {
      setErrors(undefined);
      setIsActionSuccess(false);

      await queryClient.invalidateQueries({ queryKey: ["leaveRequestList"] });
      const initialDataQuery = await queryClient.getQueryData([
        "leaveRequestList",
      ]);
      await queryClient.setQueryData(["leaveRequestList"], initialDataQuery);
    },
    onError: () => {
      queryClient.removeQueries({ queryKey: ["leaveRequestList"] });
    },
  });

  const handleAddLeaveRequest = async (
    leaveRequestData: ManagerLeaveRequestType | EmployeeLeaveRequestType
  ) => {
    try {
      const response = await postLeaveRequest(leaveRequestData);
      console.log(response);
      if (response.added) {
        setIsActionSuccess(true);
        if ("validationStatus" in leaveRequestData) {
          sendInformation("Traitement de la demande pris en compte");
        } else {
          sendInformation("Demande de congés ajoutée");
        }
        mutationLeaveRequest.mutate();
      } else if (response.errors) {
        setIsActionSuccess(false);
        setErrors(response.errors);
      }
    } catch (error) {
      sendError("Erreur lors de l'enregistrement");
    }
  };

  return {
    leaveRequestList: data,
    addLeaveRequest: handleAddLeaveRequest,
    isLoading: isLoading,
    errors,
    isActionSuccess: isActionSuccess,
  };
}
