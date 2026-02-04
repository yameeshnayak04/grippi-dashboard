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

  const handleChange = (value: string) => {
    // Optionally validate value here
    setFilter(value as "All" | "Active" | "Paused");
  };

  const filteredCampaigns =
    filter === "All"
      ? campaigns
      : campaigns.filter((c) => c.status === filter);

  if (loading) {
    return <p className="p-8">Loading campaigns...</p>;
  }

  if (error) {
    return <p className="p-8 text-red-600">{error}</p>;
  }

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Campaign Analytics Dashboard
      </h1>

      <StatusFilter value={filter} onChange={handleChange} />

      <CampaignTable campaigns={filteredCampaigns} />
    </main>
  );
}
