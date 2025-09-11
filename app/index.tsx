import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const router = useRouter();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>THIS IS HOME</Text>
            <TouchableOpacity onPress={() => router.navigate('/SummaryScreen')}>
                <Text>See more</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/AddScreen')}>
                <Text>AddExpense</Text>
            </TouchableOpacity>
        </View>
    );
}
