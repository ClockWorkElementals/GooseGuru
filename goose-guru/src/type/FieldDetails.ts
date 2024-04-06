import { UUID } from "crypto";
import { FieldType } from "../enums/FieldType";

export interface FieldDetails {
  id: UUID;
  question: string;
  fieldType: FieldType;
  selectOptions?: string[];
}
