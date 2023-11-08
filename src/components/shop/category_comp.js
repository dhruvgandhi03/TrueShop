import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState("All");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="All">All</ToggleButton>
      <ToggleButton value="Tshirt">T-Shirt</ToggleButton>
      <ToggleButton value="shirt">Shirt</ToggleButton>
      <ToggleButton value="Bottoms">Bottoms</ToggleButton>
      <ToggleButton value="SweatShirt">Sweat Shirt</ToggleButton>
    </ToggleButtonGroup>
  );
}
