import { createSlice } from '@reduxjs/toolkit';

// medical_practitioner
const initialData = {data:[{
    content: "",
    context: "",
    date_recorded: "",
    get_absolute_url: '', id: 0,
    patient: 4, record_format: "",
    record_id: "",
    record_type: "",
    timestamp: "",
    image:'',audio:'',video:''
  }]}

export const whatsappMessageSlice = createSlice({
  name: 'whatsappMessage',
  initialState:initialData,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addwhatsappMessage: (state, action) => {
      state.data = [...action.payload]  
    },
    clearwhatsappMessage :state=>{
      state = initialData
    }
   
  },
 
});

export const { addwhatsappMessage,clearwhatsappMessage} = whatsappMessageSlice.actions;

export default whatsappMessageSlice.reducer;
