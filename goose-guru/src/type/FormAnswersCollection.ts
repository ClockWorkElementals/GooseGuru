import { UUID } from "crypto";
import { FormAnswer } from "./FormAnswer";
import React from "react";

export interface FormAnswersCollection {
    userId: UUID;
    formId: UUID;
    answers: FormAnswer[];
  }