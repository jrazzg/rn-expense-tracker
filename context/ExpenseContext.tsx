import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useState } from "react";

type ExpenseListType = {
    expense: number,
    category: string,
}

type ExpenseContextType = {
    totalExpense: number;
    expenseList: ExpenseListType[];
    addExpense: (val: number, category: string) => void;
    getData: () => void;
}

export const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

type ExpenseProviderProps = {
    children: ReactNode;
}

const ExpenseProvider = ({ children }: ExpenseProviderProps) => {
    const [totalExpense, setTotalExpense] = useState<number>(0);
    const [expenseList, setExpenseList] = useState<ExpenseListType[]>([]);

    const addExpense = (val: number, cat: string) => {
        const newList = [...expenseList, { expense: val, category: cat}]
        // setExpenseList(prev => [...prev, { expense: val, category: cat }]);
        setExpenseList(newList);
        setTotalExpense(prev => prev + val);
        storeData(newList);
    }

    const storeData = async (value: ExpenseListType[]) => {
        try {
            await AsyncStorage.setItem('expense_list', JSON.stringify(value));
            console.log(value)
        } catch (e) {
            console.log(e)
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('expense_list');
            // jsonValue != null ? setExpenseList(JSON.parse(jsonValue)) : null;
            if (jsonValue != null){
                const parsedJSON = JSON.parse(jsonValue)
                setExpenseList(parsedJSON)
                
                const total = parsedJSON.reduce((acc: number, item: ExpenseListType) => acc + item.expense, 0);
                setTotalExpense(total)
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <ExpenseContext.Provider value={{ totalExpense, expenseList, addExpense, getData }}>
            {children}
        </ExpenseContext.Provider>
    );
}

export default ExpenseProvider;