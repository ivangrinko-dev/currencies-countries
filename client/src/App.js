import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import axios from "axios";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function App() {
  const [data, setData] = useState([]);

  async function send() {
    const result = await axios.get(
      "https://www.nbrb.by/API/ExRates/Currencies"
    );
    setData(result.data);
    console.log(result.data);
  }

  useEffect(() => {
    send();
  }, []);

  return (
    <div className="">
      <Box sx={{ maxWidth: 500 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            {data.map((elem, index) => {
              return <MenuItem key = {index}>{elem.Cur_Name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
