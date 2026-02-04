"use client";

import { useEffect, useState } from "react";
import { fetchCampaigns } from "@/lib/api";
import { Campaign } from "@/types/campaign";
import CampaignTable from "@/components/CampaignTable";
import StatusFilter from "@/components/StatusFilter";

export default function Home() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"All" | "Active" | "Paused">("All");

  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        setLoading(true);
        const data = await fetchCampaigns();
        setCampaigns(data);
      } catch (err) {
        setError("Failed to load campaigns. Is backend running?");
      } finally {
        setLoading(false);
      }
    };

    loadCampaigns();
  }, []);

  const filteredCampaigns =
    filter === "All"
      ? campaigns
      : campaigns.filter((c) => c.status === filter);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header Card */}
        <div className="bg-white shadow-sm rounded-xl p-6 mb-6 border border-gray-100">
          <h1 className="text-2xl font-semibold text-gray-900">
            Campaign Analytics Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            View and filter your marketing campaigns in real time.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white shadow-sm rounded-xl p-4 mb-6 border border-gray-100 flex items-center justify-between">
          <StatusFilter
            value={filter}
            onChange={(value: string) => {
              if (value === "All" || value === "Active" || value === "Paused") {
                setFilter(value);
              }
            }}
          />

          <span className="text-sm text-gray-500">
            Showing {filteredCampaigns.length} campaigns
          </span>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
          {loading && (
            <p className="text-gray-600 text-center py-4">
              Loading campaigns...
            </p>
          )}

          {error && (
            <p className="text-red-600 text-center py-4">{error}</p>
          )}

          {!loading && !error && (
            <CampaignTable campaigns={filteredCampaigns} />
          )}
        </div>
      </div>
    </main>
  );
}
