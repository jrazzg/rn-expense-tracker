
import { ExpenseContext } from '@/context/ExpenseContext';
import { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddScreen = () => {
    const expenseContext = useContext(ExpenseContext);
    if (!expenseContext) throw new Error('Context not available')
    const { totalExpense, addExpense } = expenseContext;

    const [expense, setExpense] = useState<number>(0);
    return (
        <View>
            <Text>Total Expense: {totalExpense}</Text>
            <TextInput
                style={styles.textInput}
                value={expense.toString()}
                onChangeText={val => setExpense(Number(val))}
                keyboardType='numeric'
                inputMode='numeric' />
            <TouchableOpacity onPress={() => addExpense(expense)}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddScreen;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#adadadff'
    }
})