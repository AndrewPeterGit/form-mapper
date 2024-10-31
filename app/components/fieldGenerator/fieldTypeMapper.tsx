import {
  Input,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/app/components/ui";
import { FormField } from "@/app/types/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

const fieldTypeMapper = {
  text: (field: ControllerRenderProps<FieldValues, string>, name: string) => (
    <Input {...field} placeholder="Enter text" id={name} />
  ),
  longtext: (
    field: ControllerRenderProps<FieldValues, string>,
    name: string
  ) => <Input {...field} placeholder="Enter text" id={name} />,
  number: (field: ControllerRenderProps<FieldValues, string>, name: string) => (
    <Input {...field} type="number" placeholder="Enter number" id={name} />
  ),
  dropdown: (
    field: ControllerRenderProps<FieldValues, string>,
    name: string,
    formField: FormField
  ) => (
    <Select onValueChange={field.onChange} value={field.value}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        {formField.options?.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};

export default fieldTypeMapper;
