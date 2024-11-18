import { useSupabaseClient, type Database } from "#imports";

export const useTypedSupabaseClient = () => {
  return useSupabaseClient<Database>();
};
