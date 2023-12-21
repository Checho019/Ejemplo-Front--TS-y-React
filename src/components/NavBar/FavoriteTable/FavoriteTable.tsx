"use client";
import { Person } from '@/models';
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { IconButton } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RemoveIcon from '@mui/icons-material/Remove';

export type FavoriteTableProps = {
	// types...
}

const FavoriteTable: React.FC<FavoriteTableProps>  = () => {
  const pageSize = 5;
  const dispatch = useDispatch()
  const stateFavorite = useSelector((store: AppStore) => store.favorites)
  
	const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
	}

  const columns = [
		{
      field: "actions",
      type: "actions",
      width: 50,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => <>{
        <IconButton aria-label='Favorites' onClick={() => handleClick(params.row)}>
					<RemoveIcon color='error' />
				</IconButton>
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
