import { DateRange, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useEffect, useState } from "react";
import { useLeaveRequest } from "hooks/useLeaveRequest";
import ContainerCentered from "components/app/ContainerCentered";
import Presentation from "components/app/Presentation";
import Card from "components/ui/Card";
import Input from "components/ui/Input";
import Button from "components/ui/Button";
import Field from "components/ui/Field";
import Label from "components/ui/Label";
import TextError from "components/ui/TextError";

interface DateRangeProps {
  startDate: Date;
  endDate: Date;
  key: "selection";
}

export default function Employee() {
  const { addLeaveRequest, errors, isActionSuccess } = useLeaveRequest();
  const today = new Date();
  const [employeeName, setEmployeeName] = useState<string>("");
  const [periodState, setPeriodState] = useState<DateRangeProps[]>([
    {
      startDate: today,
      endDate: today,
      key: "selection",
    },
  ]);
  const data = {
    periodFrom: periodState[0].startDate,
    periodTo: periodState[0].endDate,
    employeeName: employeeName,
  };

  useEffect(() => {
    if (isActionSuccess) {
      setEmployeeName("");
      setPeriodState([
        {
          startDate: today,
          endDate: today,
          key: "selection",
        },
      ]);
    }
    // eslint-disable-next-line
  }, [isActionSuccess]);

  return (
    <>
      <Presentation title="Faire une demande de congés" />
      <ContainerCentered>
        <Card>
          <Field
            label={"Nom de famille"}
            htmlFor="employeeName"
            required
            message={errors?.employeeName && errors.employeeName}
            status={errors?.employeeName ? "error" : "default"}
          >
            <Input
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Jonh Doe"
              name="employeeName"
              value={employeeName}
            />
          </Field>

          {/* Pick date */}
          <Label htmlFor="periodTo">Choix des dates </Label>
          <DateRange
            editableDateInputs={true}
            onChange={(item: RangeKeyDict) => {
              setPeriodState([item.selection] as any);
            }}
            moveRangeOnFirstSelection={false}
            ranges={periodState as any}
            minDate={today}
          />

          {/* Text errors */}
          {errors?.periodTooLong && <TextError error={errors.periodTooLon} />}
          {errors?.periodFrom && <TextError error={errors.periodFrom} />}
          {errors?.periodTo && <TextError error={errors.periodTo} />}

          <Button
            onClick={() => addLeaveRequest(data)}
            label={"Envoyer"}
            color="primary"
            style={{ marginTop: "15px" }}
          />
        </Card>
      </ContainerCentered>
    </>
  );
}
