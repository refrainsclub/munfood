export function Sandwich({
  description,
  funFact,
  color,
}: {
  description: string;
  funFact?: string;
  color: string;
}) {
  return (
    <div
      className="flex flex-col p-8 rounded-lg max-w-2xl mx-auto gap-6"
      style={{ backgroundColor: color }}
    >
      <div>
        <h3 className="mb-2 font-bold text-xl">Description</h3>
        <p className="text-lg text-black/80">{description}</p>
      </div>
      <div>
        <h3 className="mb-2 font-bold text-xl">Fun Fact</h3>
        <p className="text-lg text-black/80">{funFact}</p>
      </div>
    </div>
  );
}
