type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function StatusFilter({ value, onChange }: Props) {
  return (
    <select
      className="
        px-4 py-2 
        border border-gray-200 
        rounded-lg 
        bg-white 
        text-gray-700 
        focus:outline-none 
        focus:ring-2 focus:ring-blue-500 
        focus:border-blue-500
        shadow-sm
      "
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="All">All Campaigns</option>
      <option value="Active">Active</option>
      <option value="Paused">Paused</option>
    </select>
  );
}
