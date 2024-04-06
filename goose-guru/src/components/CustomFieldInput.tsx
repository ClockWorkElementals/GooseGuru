import React from "react";
import { FieldDetails } from "../type/FieldDetails";
import { FieldType } from "../enums/FieldType";
import { TextField, Select, MenuItem } from "@mui/material";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

export interface CustomFieldInputProps<T extends FieldValues> {
  details: FieldDetails;
  name: Path<T>;
  control: Control<T>;
}

export function CustomFieldInput<T extends FieldValues>(
  props: CustomFieldInputProps<T>,
): React.ReactElement | undefined {
  switch (props.details.fieldType) {
    case FieldType.LONG_ANSWER:
      return (
        <Controller
          name={props.name}
          control={props.control}
          render={({ field }) => (
            <TextField
              label={props.details.question}
              value={field.value}
              onChange={field.onChange}
              id={props.details.id}
              multiline
              minRows={3}
              maxRows={3}
            />
          )}
        />
      );
    case FieldType.SHORT_ANSWER:
      return (
        <Controller
          name={props.name}
          control={props.control}
          render={({ field }) => (
            <TextField
              label={props.details.question}
              value={field.value}
              onChange={field.onChange}
              id={props.details.id}
            />
          )}
        />
      );
    case FieldType.SELECT:
      return (
        <Controller
          name={props.name}
          control={props.control}
          render={({ field }) => (
            <Select
              label={props.details.question}
              id={props.details.id}
              value={field.value}
              onChange={field.onChange}
            >
              {props.details.selectOptions?.map((value) => (
                <MenuItem value={value}>value</MenuItem>
              ))}
            </Select>
          )}
        />
      );
    default:
      return undefined;
  }
}
