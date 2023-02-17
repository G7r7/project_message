import { TextField } from "@fluentui/react";

export function InputField(message: any, fieldName: string) {
  const handleOnChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string | undefined
  ) => {
    message[fieldName] = newValue;
  };

  return (
    <div>
      <TextField onChange={handleOnChange} label={fieldName} />
    </div>
  );
}
