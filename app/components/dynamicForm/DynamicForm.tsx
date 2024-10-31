"use client";
import React, { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateValidationSchema } from "@/app/utils";
import { FormField } from "@/app/types";
import FieldGenerator from "@/app/components/fieldGenerator/FieldGenerator";
import { Button } from "@/app/components/ui";

type DynamicFormProps = {
  fields: FormField[];
  setFormData: Dispatch<SetStateAction<Record<string, any>>>;
};

export default function DynamicForm({ fields, setFormData }: DynamicFormProps) {
  const validationSchema = generateValidationSchema(fields);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
    setFormData(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-1/3"
    >
      {fields.map((field, index) => (
        <div key={index}>
          <FieldGenerator
            formField={field}
            name={field.name}
            control={control}
          />
          {errors[field.name]?.message && (
            <p className="block sm:inline text-red-700 text-sm">
              {errors[field.name]?.message as string}
            </p>
          )}
        </div>
      ))}
      <Button type="submit" className="w-1/3">
        Submit
      </Button>
    </form>
  );
}
