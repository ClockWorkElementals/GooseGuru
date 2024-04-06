import { FieldType } from "../enums/FieldType";

export interface FieldDetails {
  id: string;
  question: string;
  fieldType: FieldType;
  selectOptions?: string[];
}
