import { create } from 'zustand';
import { Match, RequestType } from './model';
import { getMatches } from '@/shared';

const API_URL = "https://app.ftoyd.com/fronttemp-service/fronttemp"; 

interface MatchStore {
  matches: Match[];
  loading: boolean;
  error: string | null;
  fetchMatches: () => Promise<void>;
}

export const useMatchStore = create<MatchStore>((set) => ({
  matches: null,
  loading: false,
  error: null,

  fetchMatches: async () => {
    set({ loading: true, error: null });
    try {
      const matches: Match[] = await getMatches();
      set({ matches: matches, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));