export default function DatePicker({ title }: { title: string }) {
  return (
    <>
      <div>{title}</div>
      <input type="date" />
    </>
  );
}
