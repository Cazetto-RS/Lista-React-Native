import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(54 58 67);", // Um fundo levemente acinzentado para destacar os cards
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    lista: {
        width: "100%",
    },
    item: {
        backgroundColor: "#2A2D33",
        padding: 20,
        marginVertical: 8,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
    },
    title: {
        color: "#fff",
        fontSize: 24,
        marginBottom: 30
    }
})

export default styles