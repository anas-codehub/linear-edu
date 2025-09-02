import { create } from 'zustand'

interface CounterState {
classes:string;
group?:string;
subject:string;
chapter?:string;
setSelectedQuestion:()=>void;
deselectQuestion:()=>void;
}

export const useExamCreateStore = create<CounterState>((set) => ({
    classes:'',
    group:'',
    subject:'',
   
    setSelectedQuestion:()=> {
         set((state)=> ({classes:'hsc',group:'science',subject:'',chapter:''}))
    },
     deselectQuestion:()=>{
        set((state)=> ({classes:'hsc',group:'science',subject:'',chapter:''}))

    },

}));
