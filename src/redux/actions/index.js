import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../utils/constants";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const res = await axios.request(options);
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));
  return formatted;
});
