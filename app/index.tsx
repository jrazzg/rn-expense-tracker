import { ExpenseContext } from "@/context/ExpenseContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const router = useRouter();
    const expenseContext = useContext(ExpenseContext);

    if (!expenseContext) throw new Error('Context not available');
    const { totalExpense, expenseList} = expenseContext;

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={{ fontSize: 20 }}>Total Expense: {totalExpense}</Text>
            {
                expenseList.map((item, index) => 
                    <Text key={index} style={{ fontSize: 20 }}>{item.expense} | {item.category}</Text>
                )
            }

            <TouchableOpacity onPress={() => router.navigate('/SummaryScreen')}>
                <Text>See more</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.navigate('/AddScreen')}>
                <Text>AddExpense</Text>
            </TouchableOpacity>
        </View>
    );
}
