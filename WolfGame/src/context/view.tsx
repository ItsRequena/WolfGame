import { createContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";

// 👉 Definimos la forma de los valores que tendrá el contexto
interface OptionContextType {
  option: string;
  setOption: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

// 👉 Creamos el contexto tipado (inicialmente undefined hasta que el Provider lo setee)
export const OptionContext = createContext<OptionContextType | undefined>(undefined);

// 👉 Tipamos las props del Provider
interface OptionProviderProps {
  children: ReactNode;
}

export function OptionProvider({ children }: OptionProviderProps) {
  const [option, setOption] = useState<string>("start");
  const [username, setUsername] = useState<string>("");

  return (
    <OptionContext.Provider
      value={{
        option,
        setOption,
        username,
        setUsername
      }}
    >
      {children}
    </OptionContext.Provider>
  );
}
