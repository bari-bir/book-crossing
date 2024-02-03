import React from "react"
import { BookCard } from "./BookCard"
import { Animated, StyleSheet, View, ScrollView, SafeAreaView } from "react-native"

export const BookList = ({ children }: { children: React.ReactNode }) => {
    return <View style={styles.bookWrapper}>{children}</View>
}

const styles = StyleSheet.create({
    bookWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
})
