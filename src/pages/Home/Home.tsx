"use client";
import React, { useEffect } from "react";
import type {} from "@mui/x-data-grid/themeAugmentation";
import { People } from "@/data/people";
import { useDispatch } from "react-redux";
import { addPeople } from "@/redux/states";
import { PeopleTable } from "..";

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = () => {
	
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addPeople(People));
  }, [])

  return (
    <PeopleTable/>
  );
};

export default Home;
