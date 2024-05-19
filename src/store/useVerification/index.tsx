import { create } from "zustand";

export interface Props {
  checked: number;
  emailVerification: string;
  setChecked: (checked: number) => void;
  setEmailVerification: (emailVerification: string) => void;
}

const useVerification = create<Props>((set) => ({
  checked: 1,
  emailVerification: "",
  setChecked: (checked) => set({ checked }),
  setEmailVerification: (emailVerification) => set({ emailVerification }),
}));

export default useVerification;
