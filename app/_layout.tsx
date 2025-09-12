import ExpenseProvider from "@/context/ExpenseContext";
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <ExpenseProvider>
            <Stack />
        </ExpenseProvider>
    );
}
