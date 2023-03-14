import { Schema } from "../models/Schema";

export default function SchemaSelect({
  schemas,
  onChange,
}: {
  schemas: Schema[];
  onChange: (schema: Schema) => void;
}) {
  return (
    <>
      <select onChange={(e) => onChange(schemas[e.target.selectedIndex])}>
        {schemas.map((schema) => (
          <option key={schema.id}>{schema.name}</option>
        ))}
      </select>
    </>
  );
}
