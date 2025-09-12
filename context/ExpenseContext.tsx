import { createContext, ReactNode, useState } from "react";

type ExpenseContextType = {
    totalExpense: number;
    addExpense: (val: number) => void;
}

export const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

type ExpenseProviderProps = {
    children: ReactNode;
}

const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
    const [totalExpense, setTotalExpense] = useState<number>(0);
    const addExpense = (val: number) => {
        setTotalExpense(prev => prev + val);
    }

    return (
        <ExpenseContext.Provider value={{ totalExpense, addExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
}

export default ExpenseProvider;