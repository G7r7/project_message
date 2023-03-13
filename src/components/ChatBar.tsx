export default function ChatBar({
  onEnter,
}: {
  onEnter: (text: string) => void;
}) {
  return (
    <input
      type="text"
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          onEnter(e.currentTarget.value);
        }
      }}
    />
  );
}
