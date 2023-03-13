export default function Radio({
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
          <input type="radio" />
          {editable ? <input type="text" /> : <label defaultValue={label} />}
        </>
      ))}
    </>
  );
}
