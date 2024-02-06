import { LeaveRequestType } from "api/leaveRequest.type";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ModalContextProps {
  isModalOpen: boolean;
  openModal: (leaveRequest: LeaveRequestType) => void;
  closeModal: () => void;
  selectedLeaveRequest: LeaveRequestType | undefined;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export function ModalProvider({ children }: PropsWithChildren) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedLeaveRequest, setSelectedLeaveRequest] = useState<LeaveRequestType>();

  const openModal = (leaveRequest: LeaveRequestType) => {
    setIsModalOpen(true);
    setSelectedLeaveRequest(leaveRequest);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        selectedLeaveRequest,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
