
import { ExpenseContext } from '@/context/ExpenseContext';
import { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddScreen = () => {
    const expenseContext = useContext(ExpenseContext);
    if (!expenseContext) throw new Error('Context not available')
    const { totalExpense, addExpense } = expenseContext;
    const [expense, setExpense] = useState<number>(0);

    type ExpenseCategory = 'Alpha' | 'Beta' | 'Sigma';
    const myCategory: ExpenseCategory[] = ['Alpha', 'Beta', 'Sigma'];
    const [selectedCat, setSelectedCat] = useState<ExpenseCategory>('Sigma');

    return (
        <View>
            <Text>Total Expense: {totalExpense}</Text>
            <Text style={styles.title}>Amount</Text>
            <TextInput
                style={styles.textInput}
                value={expense.toString()}
                onChangeText={val => setExpense(Number(val))}
                keyboardType='numeric'
                inputMode='numeric' />

            <Text style={styles.title}>Category</Text>
            {
                myCategory.map((item) =>
                    <TouchableOpacity
                        onPress={() => setSelectedCat(item)}
                        // key={item}
                        style={{
                            backgroundColor: selectedCat == item ? 'rgba(80, 156, 231, 1)' : 'white'
                        }}
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )
            }
            <TouchableOpacity onPress={() => addExpense(expense)}><Text>Add</Text></TouchableOpacity>
        </View>
    );
};

export default AddScreen;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#adadadff'
    },
    title: {
        fontSize: 20,
        marginTop: 20,
    }
})