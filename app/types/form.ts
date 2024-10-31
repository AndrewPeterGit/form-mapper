export type FormFieldOption = {
  label: string;
  value: string;
};

export type FormField = {
  default_value?: string | number;
  validation?: string;
  min_value?: number;
  max_value?: number;
  name: string;
  label?: string;
  options?: FormFieldOption[];
  type: "text" | "longtext" | "dropdown" | "number";
};