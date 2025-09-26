
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
    const [selectedCategory, setSelectedCategory] = useState<ExpenseCategory>('Sigma');

    type myArray = {
        expense: number,
        category: string,
    }
    const [tryArray, setTryArray] = useState<myArray[]>([]);

    const updateTryArray = () => {
        setTryArray(prev => [...prev, { expense: 200, category: 'food' }]);
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
            <Text style={styles.title}>{selectedCategory}</Text>
            {/* <TouchableOpacity onPress={() => addExpense(expense)}><Text>Add</Text></TouchableOpacity> */}
            <TouchableOpacity onPress={updateTryArray}><Text>Add</Text></TouchableOpacity>            
            {
                tryArray.map((item, index) => (
                    <Text key={index} style={[styles.title, { color: 'red' }]}>{item.category} | {item.expense}</Text>
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