import React from "react";
import { Controller } from "react-hook-form";
import { FormField } from "@/app/types";
import { Label } from "@/app/components/ui";
import fieldTypeMapper from "./fieldTypeMapper";

type FieldGeneratorProps = {
  formField: FormField;
  name: string;
  control: any;
};

export default function FieldGenerator({
  formField,
  name,
  control,
}: FieldGeneratorProps) {
  return (
    <>
      {formField.label && <Label>{formField.label}</Label>}
      <Controller
        control={control}
        name={name}
        defaultValue={formField.default_value}
        render={({ field }) =>
          formField.type in fieldTypeMapper ? (
            fieldTypeMapper[formField.type](field, name, formField)
          ) : (
            <></>
          )
        }
      />
    </>
  );
}
