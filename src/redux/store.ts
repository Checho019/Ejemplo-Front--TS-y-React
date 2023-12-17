import { configureStore } from "@reduxjs/toolkit"
import { Person } from "@/models";
import { favoritesSlice, peopleSlice } from "./states";

export interface AppStore {
    people: Person[],
    favorites: Person[]
}

export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoritesSlice.reducer
    }
})