import { SetStateAction, useEffect, useState } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }: any) => {
  const [search, setSearch] = useState<SetStateAction<string>>("");
  const [bodyParts, setBodyParts] = useState<SetStateAction<string[]>>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          "https://exercisesdb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
        setBodyParts(["all", ...bodyPartsData]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(
          "https://exercisesdb.p.rapidapi.com/exercises",
          exerciseOptions
        );
        const searchedExercises = exercisesData.filter(
          (exercise: any) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search)
        );
        setSearch("");
        setExercises(searchedExercises);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight={700}
        mb='50px'
        textAlign='center'
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Awesome Exercises <br />
        You Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder='Search Exercises'
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "12px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
