import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelect, useCategories } from "../hooks/";

export default function Filter() {
  const [category, setCategory] = useSelect("");
  const { isLoading, categories } = useCategories();

  return (
    <FormControl sx={{ width: 400, marginBottom: 3 }}>
      <InputLabel id="filter-label">Catégorie</InputLabel>
      <Select
        labelId="filter-label"
        value={category}
        label="Catégorie"
        onChange={setCategory}
        disabled={isLoading}
      >
        {categories?.map(({ id, name }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
