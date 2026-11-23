import { createSlice } from "@reduxjs/toolkit";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const initialState = {
    data: {}
}

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        addInvoice: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { addInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
