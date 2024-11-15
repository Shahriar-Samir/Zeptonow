import { SuggestionsType } from "@/types";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req:Request, { params }:{params:{location:string}}) => {
   const { location } = params;
   const apiKey = process.env.API_KEY;
   console.log(location)

  if(location.length<3 || location === '0'){
   return NextResponse.json({suggestions:[]});
  }

   try {
      const response = await axios.get(
         `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${apiKey}&limit=5`
      );


      const suggestions = response.data.results.map((result:SuggestionsType) => ({
         city: result.components._normalized_city,
         formatted: result.formatted, 
         latitude: result.geometry.lat, 
         longitude: result.geometry.lng, 
      }));


      return NextResponse.json({ suggestions });
   } catch (err) {
      console.error("Error fetching location suggestions:", err);
      return NextResponse.json({ error: "Failed to fetch location suggestions" }, { status: 500 });
   }
  
};
