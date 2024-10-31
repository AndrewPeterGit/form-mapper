'use client'
import DynamicForm from "@/app/components/dynamicForm/DynamicForm";
import { FormField } from '@/app/types';
import fieldsData from "../form.json";
import { useState } from "react";
import FormResults from "@/app/components/formResults/FormResults";

const fields: FormField[] = fieldsData as FormField[];

export default function Home() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  return (
    <div className="w-100 p-4 flex gap-12">
      <DynamicForm fields={fields} setFormData={setFormData} />
      <FormResults formData={formData} />
    </div>
  );
}
