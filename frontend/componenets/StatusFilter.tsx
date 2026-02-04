type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function StatusFilter({ value, onChange }: Props) {
  return (
    <select
      className="mb-4 p-2 border rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Active">Active</option>
      <option value="Paused">Paused</option>
    </select>
  );
}
