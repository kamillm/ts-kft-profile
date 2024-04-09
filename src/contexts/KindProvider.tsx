import { createContext, useContext, useMemo, useState } from "react";

export const KindContext = createContext({
  kind: false,
  setKind: (value: boolean) => {
    value;
  }
});

export function KindProvider({ children }: any) {
  const [kind, setKind] = useState<boolean>(false);

  const kindTypePackage = useMemo(
    () => ({
      kind,
      setKind
    }),
    [setKind]
  );

  return <KindContext.Provider value={{ ...kindTypePackage }}>{children}</KindContext.Provider>;
}

export const useKind = () => {
  return useContext(KindContext);
};

export default KindProvider;
