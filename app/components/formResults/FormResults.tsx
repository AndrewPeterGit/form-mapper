type FormResultsProps = {
  formData: Record<string, any>;
};

export default function FormResults({ formData }: FormResultsProps) {
  return (
    <div className="flex w-1/3 border p-4 rounded-[16px] flex-col gap-4">
      {Object.entries(formData).map(([key, value]) => (
        <div className="flex items-center gap-2" key={key}>
          <div className="font-bold capitalize">{key}:</div>
          <div>{value}</div>
        </div>
      ))}
    </div>
  );
}
