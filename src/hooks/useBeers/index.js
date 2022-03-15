import { useQuery } from "react-query";
import CMyBeersFetch from "../../CMyBeers";

export default function useBeers() {
  const { isLoading, error, data } = useQuery("beers", CMyBeersFetch("/beers"));

  return { isLoading, error, beers: data };
}
