"use client";
import React, { useEffect, useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import type {} from "@mui/x-data-grid/themeAugmentation";
import { People } from "@/data/people";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { addFavorite, addPeople } from "@/redux/states";
import store from "@/redux/store";

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const pageSize = 5;
  const dispatch = useDispatch()

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
  );
};

export default Home;
