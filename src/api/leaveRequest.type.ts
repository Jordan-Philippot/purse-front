export enum ValidationStatusType {
  pending = "pending",
  approved = "approved",
  rejected = "rejected",
}

export interface LeaveRequestType {
  id: number;
  employeeName: string;
  comment?: string;
  periodFrom: Date;
  periodTo: Date ;
  validationStatus: ValidationStatusType;
}

export interface ManagerLeaveRequestType
  extends Pick<LeaveRequestType, "comment" | "validationStatus" | 'id'> {}

export interface EmployeeLeaveRequestType
  extends Omit<LeaveRequestType, "comment" | "validationStatus" | "id"> {}
