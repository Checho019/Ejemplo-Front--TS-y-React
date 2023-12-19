"use client";
import { Person } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type FavoriteTableProps = {
	// types...
}

const FavoriteTable: React.FC<FavoriteTableProps>  = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const pageSize = 5;
  const dispatch = useDispatch()
  const stateFavorite = useSelector((store: AppStore) => store.favorites)
	const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => selectedPeople.find(p => p.id !== person.id)
  
	const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) 
    ? filterPerson(person) 
    : [...selectedPeople, person];
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
    }
  ];
	
	return (
			<DataGrid
      rows={stateFavorite}
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

export default FavoriteTable;
