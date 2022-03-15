import { useQuery } from "react-query";
import CMyBeersFetch from "../../CMyBeers";

export default function useCategories() {
  const { isLoading, error, data } = useQuery(
    "categories",
    CMyBeersFetch("/categories")
  );

  return { isLoading, error, categories: data };
}
