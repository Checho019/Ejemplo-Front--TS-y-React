"use client";
<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React, { useEffect, useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
>>>>>>> 36e30cba67f38233007bf6e2ad309b08102cc160
import type {} from "@mui/x-data-grid/themeAugmentation";
import { People } from "@/data/people";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { addPeople } from "@/redux/states";
import { PeopleTable } from "..";
=======
import { addFavorite, addPeople } from "@/redux/states";
import store from "@/redux/store";
>>>>>>> 36e30cba67f38233007bf6e2ad309b08102cc160

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = () => {
	
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addPeople(People));
  }, [])

<<<<<<< HEAD
  return (
    <PeopleTable/>
=======
	const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => selectedPeople.find(p => p.id !== person.id)
  
	const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
	}
  const columns = [
		{
      field: "actions",
      type: "actions",
      width: 50,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => <>{
				<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />
			}</>,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  useEffect(() => {
    dispatch(addPeople(People));
  }, [])
  

  return (
    <DataGrid
      rows={store.getState().people}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      pageSizeOptions={[pageSize, 10, 100]}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getRowId={(row: any) => row.id}
    />
>>>>>>> 36e30cba67f38233007bf6e2ad309b08102cc160
  );
};

export default Home;
