import { createContext, ReactNode, useState } from "react";

type ExpenseContextType = {
    totalExpense: number;
}

export const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

type ExpenseProviderProps = {
    children: ReactNode;
}

const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
    const [totalExpense, setTotalExpense] = useState<number>(0);

    return (
        <ExpenseContext.Provider value={{ totalExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
}

export default ExpenseProvider;