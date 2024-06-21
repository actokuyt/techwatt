"use client"

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useMuiAutoCompleteContext } from "@/contexts/mui-autocomplete-context";

interface PropTypes {
  options: string[];
  label: string;
}

function getOptionKey(option:string) {
  option = option + Math.random()
  return option
}

export default function MuiAutoComplete({ options, label }: PropTypes) {
  const { searchInputValue, handleChange } = useMuiAutoCompleteContext();

  return (
    <Autocomplete
      autoComplete
      autoHighlight
      selectOnFocus
      sx={{ width: 300 }}
      // className="border border-gray-300 rounded-lg p-2"
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      value={searchInputValue}
      onChange={(_, newValue) => handleChange(newValue)}
      getOptionKey={getOptionKey}
    />
  );
}
