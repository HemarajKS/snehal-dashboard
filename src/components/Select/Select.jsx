import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MuiSelect } from "@mui/material";
import Chip from "@mui/material/Chip";
import "./Select.css";
import { ExpandMore } from "@mui/icons-material";

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
      <FormControl sx={{ minWidth: "200px", mt: "24px" }}>
        <InputLabel
          shrink={false}
          sx={{
            transform: "translate(0px, 2px);",
            padding: "8px 32px 8px 8px",
            fontSize: "14px",
          }}
        >
          {name}
        </InputLabel>
        <MuiSelect
          name={name}
          multiple={multiple}
          value={selected}
          onChange={handleChange}
          IconComponent={ExpandMore}
          sx={{
            "& .MuiSelect-select": {
              py: "8px !important",
              pl: "8px",
            },

            "& .MuiSvgIcon-root": {
              borderLeft: "1px solid rgb(204, 204, 204)",
            },
          }}
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
