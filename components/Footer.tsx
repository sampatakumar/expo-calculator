import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                © Made for Calculate.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        alignItems: "center",   // centers horizontally
        justifyContent: "center", // centers vertically if you give height
        paddingVertical: 10,
    },
    footerText: {
        color: "yellow",
        paddingBottom: 0,
    },
});
