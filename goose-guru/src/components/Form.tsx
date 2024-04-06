import React from "react";
import { useForm } from "react-hook-form";
import { FieldDetails } from "../type/FieldDetails";
import { FormAnswersCollection } from "../type/FormAnswersCollection";
import { Stack } from "@mui/material";
import { CustomFieldInput } from "./CustomFieldInput";
import { UUID } from "crypto";

interface FormProps {
  onSubmit: (answers: FormAnswersCollection) => void;
  questions: FieldDetails[];
  formId: UUID;
}

export function Form(props: FormProps): React.ReactElement {
  const { control, handleSubmit } = useForm<FormAnswersCollection>();

  return (
    <form id={props.formId} onSubmit={handleSubmit(props.onSubmit)}>
      <Stack spacing={2}>
        {props.questions.map((field) => {
          return (
            <CustomFieldInput
              name={"userId"}
              control={control}
              details={field}
            />
          );
        })}
      </Stack>
    </form>
  );
}
