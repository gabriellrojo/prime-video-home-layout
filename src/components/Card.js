import { FlatList, TouchableOpacity, Image, StyleSheet, Text, View } from "react-native"
import { MOVIESWATCHING } from "../utils/moviesWatching"

const Card = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Continue Watching</Text>
            <FlatList
            data={MOVIESWATCHING}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => 
                <TouchableOpacity>
                    <Image source={item.moviesURL} style={styles.card} />
                </TouchableOpacity>}
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 10
    },

    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10
    },

    card: {
        marginRight: 10
    }
})

export default Card