import { FlatList, TouchableOpacity, Image, StyleSheet, Text, View } from "react-native"
import { MOVIESWATCH } from "../utils/moviesWatch"

const Language = () => {
    
    return (
        
        <View style={styles.container}>
            <Text style={styles.text} >Watch in your language</Text>
            <FlatList
             data={MOVIESWATCH}
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

    card: {
        marginRight: 10
    }
})

export default Language