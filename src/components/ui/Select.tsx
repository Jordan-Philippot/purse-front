import React from "react";
import styled from "styled-components";
import {
  COLOR_ERROR,
  COLOR_GREY_LIGHT,
  COLOR_SUCCESS,
  COLOR_WARNING,
} from "utils/colors";

type status = "default" | "error" | "success" | "warning";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  name?: string;
  value?: string | number;
  options: Option[];
  placeholder?: string | null;
  status?: status;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  style?: React.CSSProperties;
}

type StyledSelectProps = Omit<SelectProps, "placeholder">;

const handleStyle = (status?: status) => {
  switch (status) {
    case "default":
      return COLOR_GREY_LIGHT;
    case "warning":
      return COLOR_WARNING;
    case "success":
      return COLOR_SUCCESS;
    case "error":
      return COLOR_ERROR;
  }
};

const StyledSelect = styled.select<StyledSelectProps>`
  padding: 10px 15px;
  border-color: ${(props) => handleStyle(props.status)};
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  :disabled {
    opacity: 0.2;
  }
  width: 100%;
`;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      name,
      value,
      options,
      status = "default",
      placeholder,
      disabled,
      onChange,
      style,
    },
    ref
  ) => {
    let selectValue: string | number;

    if (value) {
      selectValue = value;
    } else if (options.length === 0 || placeholder !== undefined) {
      selectValue = "";
    } else {
      selectValue = options[0].value;
    }

    return (
      <StyledSelect
        ref={ref}
        name={name}
        value={selectValue}
        options={options}
        status={status}
        disabled={disabled}
        onChange={onChange}
        style={{ width: "100%", ...style }}
      >
        {placeholder && <option label={placeholder} disabled />}
        {options.map((option) => {
          return (
            <option
              key={option.value}
              label={option.label}
              value={option.value}
            />
          );
        })}
      </StyledSelect>
    );
  }
);

Select.displayName = "Select";

export default Select;
