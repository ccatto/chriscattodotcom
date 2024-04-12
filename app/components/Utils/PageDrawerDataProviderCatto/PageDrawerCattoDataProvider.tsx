// PageDrawerCattoDataProvider.tsx

"use client"
import {
  ReactNode,
  createContext,
  useState,
  useContext
} from 'react';

interface IContextProps {
  state: string;
  dispatch: ({ type }: { type: string }) => void;
}
interface Props {
  children?: ReactNode
  // any props that come into the component
}

// export const PageDrawerCattoDataContext = createContext();
// export const PageDrawerCattoDataContext = createContext<any>({});
export const PageDrawerCattoDataContext = createContext<any>({
  hello: true,
});

const PageDrawerCattoDataProviderWrapper = ({ children, ...props }: Props) => {
  // const sharedData = "this is shared simple data YO";
  let [isPageDrawerOpen, setIsPageDrawerOpen] = useState(false);

  return (
    <PageDrawerCattoDataContext.Provider value={{ isPageDrawerOpen }}>
      {children}
    </PageDrawerCattoDataContext.Provider>
  )
}

export default PageDrawerCattoDataProviderWrapper;

export function usePageDrawerDataCattoContext() {
  return useContext(PageDrawerCattoDataContext);
}


