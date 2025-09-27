import Expense from "@/components/Expense";
import { ExpenseContext } from "@/context/ExpenseContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
    const router = useRouter();
    const expenseContext = useContext(ExpenseContext);

    if (!expenseContext) throw new Error('Context not available');
    const { totalExpense, expenseList } = expenseContext;

    return (
        <View style={styles.container}>
            <View style={styles.summary}>
                <Text style={styles.totalExpense}>Total Expense: {totalExpense}</Text>
                <TouchableOpacity onPress={() => router.navigate('/SummaryScreen')}>
                    <Text>See more</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.flatList}
                data={expenseList}
                renderItem={({ item }) =>
                    <Expense
                        expense={item.expense}
                        category={item.category}
                    />
                }
            />
            <TouchableOpacity onPress={() => router.navigate('/AddScreen')}>
                <Text>AddExpense</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffffff',
        padding: 20,
    },
    summary: {
        width: '100%',
    },
    totalExpense: {
        fontSize: 30,
        fontWeight: '700'
    },
    flatList: {
        marginTop: 20,
        width: '100%',
    }
})
