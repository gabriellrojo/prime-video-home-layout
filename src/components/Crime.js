import { FlatList, TouchableOpacity, Image, StyleSheet, Text, View } from "react-native"
import { MOVIESCRIME } from "../utils/moviesCrimes"

const Crime = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Crime Movies</Text>
            <FlatList
            data={MOVIESCRIME}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => 
                <TouchableOpacity>
                    <Image source={item.moviesURL} style={styles.card}/>
                </TouchableOpacity>}
            horizontal
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
    contentList: {
        minWidth: "100%"
    },

    card: {
        marginRight: 10
    }
})

export default Crime