import axios from "axios";
import { Campaign } from "@/types/campaign";

const API_BASE_URL =
  process.env.API_URL || "http://127.0.0.1:8000";

export const fetchCampaigns = async (): Promise<Campaign[]> => {
  const response = await axios.get<Campaign[]>(`${API_BASE_URL}/campaigns`);
  return response.data;
};
