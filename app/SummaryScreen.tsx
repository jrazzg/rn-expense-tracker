import { ExpenseContext } from "@/context/ExpenseContext";
import { useContext } from "react";
import { Text, View } from "react-native";


const SummaryScreen = () => {
    const expenseContext = useContext(ExpenseContext);
    if (!expenseContext) throw new Error('Context not available');
    const { totalExpense } = expenseContext;
    
    return (
        <View>
            <Text>Total Expense: </Text>
            <Text>{totalExpense}</Text>
        </View>
    )
}

export default SummaryScreen;