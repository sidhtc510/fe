import { create } from "zustand"


const useGlobalStore = create((set, get) => ({
    obj1: 1111,
    obj2: 1111,
    increase: () => {
        if (get().obj1 < 1114) {
            set((state) => ({ obj1: ++state.obj1, obj2: ++state.obj2 }))
        }
    }

}))
export default useGlobalStore