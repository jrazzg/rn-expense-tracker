import { StyleSheet, Text, View } from "react-native";

type ExpenseType = {
    expense: number
    category: string
}

const Expense = ({expense, category}: ExpenseType) => {
    return (
        <View style={styles.container}>
            <Text style={styles.expense}>Php {expense}</Text>
            <Text style={styles.category}>{category}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'rgba(230, 230, 230, 1)',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderRadius: 10,
    },
    expense: {
        fontSize: 20,
        fontWeight: '700',
    },
    category: {
        fontSize: 15,
        textTransform: 'uppercase',
        textAlign: 'right',
    },
})

export default Expense;