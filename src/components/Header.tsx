import { Image, StyleSheet, Text, View } from "react-native"
import BackImg from "../../assets/images/back.png"

export const Header = ({ title, isBack }: { title: string; isBack: boolean }) => {
    return (
        <View style={styles.header}>
            {isBack ? <Image source={BackImg} /> : null}
            <View style={styles.titleBlock}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginTop: 22,
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
    titleBlock: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
    },
    titleText: {
        fontSize: 24,
        fontWeight: "500",
        lineHeight: 29,
    },
})
