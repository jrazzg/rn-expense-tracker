
import { ExpenseContext } from '@/context/ExpenseContext';
import { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddScreen = () => {
    const expenseContext = useContext(ExpenseContext);
    if (!expenseContext) throw new Error('Context not available')
    const { totalExpense, addExpense, expenseList } = expenseContext;
    const [expense, setExpense] = useState<number>(0);

    type ExpenseCategory = 'Food' | 'Transport' | 'Bills';
    const myCategory: ExpenseCategory[] = ['Food', 'Transport', 'Bills'];
    const [selectedCategory, setSelectedCategory] = useState<ExpenseCategory>('Food');

    const updateTryArray = (exp: number, cat: string) => {
        addExpense(exp, cat)
        setSelectedCategory('Food')
        setExpense(0)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Amount</Text>
            <TextInput
                style={styles.textInput}
                value={expense.toString()}
                onChangeText={val => setExpense(Number(val))}
                keyboardType='numeric'
                inputMode='numeric' />

            <Text style={styles.title}>Category</Text>
            <View style={styles.categoryContainer}>
            {
                myCategory.map((item, index) =>
                    <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedCategory(item)}
                        // key={item}
                        style={[
                            styles.category,
                            { backgroundColor: selectedCategory === item ? '#509ce7ff' : '#e6e6e6ff' }
                        ]}
                    >
                        <Text style={styles.categoryText}>{item}</Text>
                    </TouchableOpacity>
                )
            }
            </View>
            <TouchableOpacity onPress={() => updateTryArray(expense, selectedCategory)}><Text style={styles.button}>Add</Text></TouchableOpacity>            
        </View>
    );
};

export default AddScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#ffffffff',
        flex: 1,
    },
    textInput: {
        backgroundColor: '#e6e6e6ff',
        borderRadius: 5,
        paddingLeft: 10,
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
    },
    categoryContainer: {
        flexDirection: 'row',
    },
    category: {
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    categoryText: {
        textTransform: 'uppercase',
    },
    button: {
        marginTop: 20,
        padding: 10,
        paddingHorizontal: 30,
        backgroundColor: '#509ce7ff',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'flex-end',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: '800',
        color: 'white',
    },
})