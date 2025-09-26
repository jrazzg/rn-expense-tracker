
import { ExpenseContext } from '@/context/ExpenseContext';
import { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddScreen = () => {
    const expenseContext = useContext(ExpenseContext);
    if (!expenseContext) throw new Error('Context not available')
    const { totalExpense, addExpense, expenseList } = expenseContext;
    const [expense, setExpense] = useState<number>(0);

    type ExpenseCategory = 'Alpha' | 'Beta' | 'Sigma';
    const myCategory: ExpenseCategory[] = ['Alpha', 'Beta', 'Sigma'];
    const [selectedCategory, setSelectedCategory] = useState<ExpenseCategory>('Sigma');

    const updateTryArray = (exp: number, cat: string) => {
        addExpense(exp, cat)
        setSelectedCategory('Sigma')
        setExpense(0)
    };

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
                myCategory.map((item, index) =>
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedCategory(item)}
                        // key={item}
                        style={{
                            backgroundColor: selectedCategory == item ? 'rgba(80, 156, 231, 1)' : 'white'
                        }}
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )
            }
            {/* <TouchableOpacity onPress={() => addExpense(expense)}><Text>Add</Text></TouchableOpacity> */}
            <TouchableOpacity onPress={() => updateTryArray(expense, selectedCategory)}><Text>Add</Text></TouchableOpacity>            
            {
                expenseList.map((item, index) => (
                    <Text key={index} style={[styles.title, { color: 'red' }]}>{item.expense} | {item.category}</Text>
                ))
            }
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