import { FormAnswer } from "./FormAnswer";

export interface FormAnswersCollection {
  userId: string;
  formId: string;
  answers: FormAnswer[];
}
