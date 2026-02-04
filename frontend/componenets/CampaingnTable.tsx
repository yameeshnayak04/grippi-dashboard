import { Campaign } from "@/types/campaign";

type Props = {
  campaigns: Campaign[];
};

export default function CampaignTable({ campaigns }: Props) {
  if (campaigns.length === 0) {
    return <p className="text-gray-500">No campaigns found.</p>;
  }

  return (
    <table className="min-w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2 text-left">Campaign Name</th>
          <th className="border p-2 text-left">Status</th>
          <th className="border p-2 text-left">Clicks</th>
          <th className="border p-2 text-left">Cost</th>
          <th className="border p-2 text-left">Impressions</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((c) => (
          <tr key={c.id} className="hover:bg-gray-50">
            <td className="border p-2">{c.name}</td>
            <td className="border p-2">
              <span
                className={`px-2 py-1 rounded text-sm ${
                  c.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {c.status}
              </span>
            </td>
            <td className="border p-2">{c.clicks}</td>
            <td className="border p-2">${c.cost.toFixed(2)}</td>
            <td className="border p-2">{c.impressions.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
