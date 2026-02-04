import { Campaign } from "@/types/campaign";

type Props = {
  campaigns: Campaign[];
};

export default function CampaignTable({ campaigns }: Props) {
  if (campaigns.length === 0) {
    return (
      <p className="text-gray-500 text-center py-4">
        No campaigns found for this filter.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-100 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm">
            <th className="p-3 text-left font-semibold">Campaign Name</th>
            <th className="p-3 text-left font-semibold">Status</th>
            <th className="p-3 text-left font-semibold">Clicks</th>
            <th className="p-3 text-left font-semibold">Cost</th>
            <th className="p-3 text-left font-semibold">Impressions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c, index) => (
            <tr
              key={c.id}
              className={`border-t ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-blue-50 transition`}
            >
              <td className="p-3 font-medium text-gray-900">{c.name}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    c.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="p-3 text-gray-700">{c.clicks}</td>
              <td className="p-3 text-gray-700">
                ${c.cost.toFixed(2)}
              </td>
              <td className="p-3 text-gray-700">
                {c.impressions.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
