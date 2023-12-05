import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native"
import PrimeVideoLogo from "../../assets/prime_video.png"
import AmazonLogo from "../../assets/amazon_logo.png"
import Banner from "../../assets/movies/the_wheel_of_time.png"
import Card from "../../components/Card"
import Crime from "../../components/Crime"
import Language from "../../components/Language"

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={PrimeVideoLogo}/>
                <Image style={styles.arrow} source={AmazonLogo}/>
            </View>
            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.catText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.catText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.catText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.catText}>Kids</Text>
                </TouchableOpacity>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>

                <TouchableOpacity>
                    <Image source={Banner} />
                </TouchableOpacity>

                <Card />

                <Crime />

                <Language />

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
    },

    header: {
        width: "100%",
        height: "25%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    arrow: {
        marginTop: -30
    },

    category: {
        width: "100%",
        height: "7%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: -10
    },

    catText: {
        color: "white",
        fontWeight: "bold"
    }
})