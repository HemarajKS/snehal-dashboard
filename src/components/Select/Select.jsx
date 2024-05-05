import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MuiSelect } from "@mui/material";
import Chip from "@mui/material/Chip";
import "./Select.css";

export default function Select({
  items = [],
  multiple = false,
  name,
  onChange,
}) {
  const [selected, setSelected] = React.useState(multiple ? [] : "");

  React.useEffect(() => {
    onChange(name, selected);
  }, [name, onChange, selected]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelected(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%", mt: "24px" }}>
        <InputLabel
          sx={{
            "& .Mui-focused": {
              color: "red",
            },
          }}
          shrink={false}
        >
          {name}
        </InputLabel>
        <MuiSelect
          name={name}
          multiple={multiple}
          value={selected}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </div>
  );
}
