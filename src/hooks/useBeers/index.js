import { useQuery } from "react-query";
import cMyBeersFetch from "../../cMyBeersFetch";
import queryString from "query-string";
import { Category } from "@mui/icons-material";

export default function useBeers({ categoryId } = {}) {
  const cleanCategory =
    Category === "0" || categoryId === "0" ? undefined : categoryId;

  const beersUrl = queryString.stringifyUrl({
    url: "/beers",
    query: { categoryId: cleanCategory },
  });

  const { isLoading, error, data } = useQuery(
    ["beers", categoryId],
    cMyBeersFetch(beersUrl)
  );

  return { isLoading, error, beers: data };
}
