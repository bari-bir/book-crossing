import { Image, StyleSheet, Text, View } from "react-native"
import BackImg from "../../assets/back.png"

export const Header = ({ title, isBack }: { title: string; isBack: boolean }) => {
    return (
        <View style={styles.header}>
            {isBack ? <Image source={BackImg} /> : null}
            <View style={styles.titleBlock}>
                <Text>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 22,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
    titleBlock: {
        flex: 1,
        textAlign: "center",
        fontSize: 24,
    },
})
