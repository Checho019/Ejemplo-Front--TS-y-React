import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = []

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES)  as string ) : initialState,
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, state)
            return action.payload
        }
    }
})

export const { addFavorite } = favoritesSlice.actions;
