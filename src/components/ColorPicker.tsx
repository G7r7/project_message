export default function ColorPicker({ title }: { title: string }) {
  return (
    <>
      <div>{title}</div>
      <input type="color" />
    </>
  );
}
