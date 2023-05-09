import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { getAllBlogs, getSingleBlog } from "@/utils/blogs";
import { useRouter } from "next/router";

interface IOption {
  label: string;
  id: number;
}

export default function SearchBar() {
  const router = useRouter();
  const [options, setOptions] = useState<IOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<IOption | null>(
    options[0]
  );
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const options: IOption[] = getAllBlogs().map((post) => {
      return { label: post.name, id: post.id! };
    });
    setOptions(options);
  }, [setOptions]);

  const inputChange = (newInputValue: string) => {
    setInputValue(newInputValue);
  };

  const autocompleteValueChange = (newValue: IOption | null) => {
    setSelectedOption(newValue);
  };

  useEffect(() => {
    if (selectedOption && selectedOption.id) {
      const singlePost = getSingleBlog(selectedOption.id);
      if (singlePost) {
        router.push(`/blog/view/${singlePost.id}`);
      }
    }
  }, [selectedOption, router]);

  return (
    <div className="search-bar-wrapper" data-testid="search-bar">
      <div>
        <Autocomplete
          data-testid="search-autocomplete"
          options={options}
          sx={{ width: 300, marginRight: 0.5 }}
          renderInput={(params) => (
            <TextField {...params} label="Search the Site" variant="standard" />
          )}
          inputValue={inputValue}
          onChange={(event: any, newValue: IOption | null) =>
            autocompleteValueChange(newValue)
          }
          onInputChange={(event, newInputValue) => inputChange(newInputValue)}
        />
      </div>
      <Button
        data-testid="search-btn"
        variant="contained"
        sx={{ textTransform: "uppercase", height: "36px" }}
      >
        Search
      </Button>
    </div>
  );
}
