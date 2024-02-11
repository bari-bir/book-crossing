import Button from "@ant-design/react-native/lib/button"
import { View, Text, StyleSheet, Image } from "react-native"
import BookImage from "../../assets/images/book-test.png"

export const RequestBlock = ({ isRequest, onClickReview }: { isRequest: boolean; onClickReview: (e: boolean) => void }) => {
    return (
        <View style={styles.requestBlock}>
            <Image style={styles.requestBookImg} source={BookImage} />

            <View style={styles.requestInfo}>
                <Text style={styles.requestInfoTitle}>Akbota Zhumakhanbet</Text>
                <Text style={styles.requestInfoDescr}>The standard Lorem Ipsum passage, used since "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...</Text>

                <View style={styles.requestBtn}>
                    <Button style={styles.btnWrapper} onPress={() => onClickReview(true)}>
                        <Text style={{ fontSize: 9, fontWeight: "700", color: "#222" }}>{isRequest ? "Review" : "Remove"}</Text>
                    </Button>
                    <Button type="primary" style={{ ...styles.btnWrapper, backgroundColor: "#525DDD" }}>
                        <Text style={{ fontSize: 9, fontWeight: "700", color: "#fff" }}>{isRequest ? "Accept" : "Delete"}</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    requestBlock: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        borderRadius: 5,
        height: 100,
        backgroundColor: "#F6F5F5",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 10,
        marginBottom: 20,
    },
    requestBookImg: {
        height: 85,
        width: 85,
        borderRadius: 10,
    },
    requestInfo: {
        flex: 1,
    },
    requestInfoTitle: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 7,
    },
    requestInfoDescr: {
        fontSize: 8,
        fontWeight: "300",
        marginBottom: 8,
    },
    requestBtn: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
        justifyContent: "flex-end",
    },
    btnWrapper: {
        fontSize: 9,
        fontWeight: "700",
        height: 25,
        paddingVertical: 6,
        paddingHorizontal: 0,
    },
})
