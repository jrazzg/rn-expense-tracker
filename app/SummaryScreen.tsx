import { ExpenseContext } from "@/context/ExpenseContext";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const SummaryScreen = () => {
    const expenseContext = useContext(ExpenseContext);
    if (!expenseContext) throw new Error('Context not available');
    const { totalExpense, expenseList } = expenseContext;

    console.log(expenseList)

    const barData = [
        { value: 250, label: 'M' },
        { value: 500, label: 'T', frontColor: '#177AD5' },
        { value: 745, label: 'W', frontColor: '#177AD5' },
        { value: 320, label: 'T' },
        { value: 600, label: 'F', frontColor: '#177AD5' },
        { value: 256, label: 'S' },
        { value: 300, label: 'S' },
        { value: 300, label: 'S' },
        { value: 300, label: 'S' },
        { value: 300, label: 'S' },
    ];

    [{ "category": "Beta", "expense": 192 }, { "category": "Alpha", "expense": 50 }, { "category": "Alpha", "expense": 2 }, { "category": "Beta", "expense": 3 }, { "category": "Sigma", "expense": 34 }, { "category": "Beta", "expense": 12 }, { "category": "Sigma", "expense": 343 }, { "category": "Alpha", "expense": 23 }, { "category": "Beta", "expense": 343 }, { "category": "Beta", "expense": 2345 }, { "category": "Sigma", "expense": 11 }, { "category": "Sigma", "expense": 10 }]

    return (
        <View>
            <Text>Total Expense: </Text>
            <Text>{totalExpense}</Text>
            <View style={styles.barChart}>
                <BarChart
                    barWidth={22}
                    noOfSections={3}
                    barBorderRadius={4}
                    frontColor="lightgray"
                    data={barData}
                    yAxisThickness={0}
                    xAxisThickness={0}
                />
            </View>
        </View>
    )
}

export default SummaryScreen;

const styles = StyleSheet.create({
    barChart: {
        backgroundColor: '#ffffffff',
        borderRadius: 20,
        alignSelf: 'center',
        padding: 20,
    },
})