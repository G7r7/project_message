export default function Checkbox({
  editable,
  labels,
  title,
}: {
  editable: boolean;
  labels: string[];
  title: string;
}) {
  return (
    <>
      <div>{title}</div>
      {labels.map((label) => (
        <>
          <input type="checkbox" />
          {editable ? <input type="text" /> : <label defaultValue={label} />}
        </>
      ))}
    </>
  );
}
