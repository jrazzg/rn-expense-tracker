import { ExpenseContext } from "@/context/ExpenseContext";
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const SummaryScreen = () => {
    const expenseContext = useContext(ExpenseContext);
    if (!expenseContext) throw new Error('Context not available');
    const { totalExpense, expenseList, clearData } = expenseContext;

    // Group by category and sum expenses
    const grouped = expenseList.reduce((acc: Record<string, number>, item) => {
        acc[item.category] = (acc[item.category] || 0) + item.expense;
        return acc;
    }, {})

    /*  
    convert object from: 
        [{ category: Beta, expense: 10}, 
         { category: Sigma, expense: 20}]
    into: 
        { Alpha: 123, Beta: 123, Sigma: 123}
    */

    // Convert into chart format
    const barData = Object.entries(grouped).map(([category, total]) => ({
        value: total,
        label: category,
        frontColor: '#177AD5'
    }));

    /*  
    convert object from: 
        { Alpha: 123, Beta: 123, Sigma: 123}
    into: 
        [{ value: 123, label: 'Beta', frontColor: '#177AD5' }, 
         { value: 123, label: 'Sigma', frontColor: '#177AD5' }]  
    */


    return (
        <View style={styles.container}>
            <Text style={styles.totalExpense}> Total Expense: {totalExpense}</Text>
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
            <TouchableOpacity onPress={clearData}><Text style={styles.button}>Clear Records</Text></TouchableOpacity>
        </View>
    )
}

export default SummaryScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    barChart: {
        backgroundColor: '#ffffffff',
        borderRadius: 20,
        alignSelf: 'center',
        padding: 20,
    },
    totalExpense: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 20,
    },
    button: {
        marginVertical: 20,
        padding: 10,
        paddingHorizontal: 30,
        backgroundColor: '#e75050ff',
        alignItems: 'center',
        borderRadius: 5,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: '800',
        color: 'white',
    },
});