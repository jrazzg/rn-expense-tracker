import { createContext, ReactNode, useState } from "react";

type ExpenseListType = {
        expense: number,
        category: string,
    }

type ExpenseContextType = {
    totalExpense: number;
    expenseList: ExpenseListType[];
    addExpense: (val: number, category: string) => void;
}

export const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

type ExpenseProviderProps = {
    children: ReactNode;
}

const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
    const [totalExpense, setTotalExpense] = useState<number>(0);

    const [expenseList, setExpenseList] = useState<ExpenseListType[]>([]);

    const addExpense = (val: number, cat: string) => {
        setTotalExpense(prev => prev + val);
        setExpenseList(prev => [...prev, { expense: val, category: cat }]);
    }

    return (
        <ExpenseContext.Provider value={{ totalExpense, expenseList, addExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
}

export default ExpenseProvider;