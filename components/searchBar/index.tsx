import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

export default function SearchBar() {
  return (
    <div className="search-bar-wrapper">
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={[]}
          sx={{ width: 300, marginRight: 0.5 }}
          renderInput={(params) => (
            <TextField {...params} label="Search the Site" />
          )}
        />
      </div>
      <Button
        variant="contained"
        sx={{ textTransform: "uppercase", height: "56px" }}
      >
        Search
      </Button>
    </div>
  );
}
