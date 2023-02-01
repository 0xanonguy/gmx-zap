import { configureStore } from "@reduxjs/toolkit";
import { chainsReducer } from "../slices";
import { tokensReducer } from "../slices";
import { glpReducer } from "../slices";

export const store = configureStore({
	reducer: {
		chains: chainsReducer,
		tokens: tokensReducer,
		glp: glpReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
