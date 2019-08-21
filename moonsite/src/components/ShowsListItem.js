import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome';

const { height } = Dimensions.get('screen')

const ShowsListItem = ({ item }, props) => {

    const HandleStars = count => {
        const starts = [];

        for (let index = 0; index < Math.floor(count); index++)
            starts.push(<Icons key={index} name="star" size={20} />)
        if (count - Math.floor(count) !== 0)
            starts.push(<Icons key={Math.floor(count)} name="star-half" size={20} />)

        return starts;
    }

    return (
        <TouchableOpacity style={styles.itemClick} onPress={() => props.navigation.navigate('Show', { item: item })}>
            <View style={styles.itemChildPosition} >
                <Image style={styles.image} resizeMode='stretch' source={{ uri: item.image.medium }} />
                <Text >{item.name}</Text>
                <View style={styles.stars}>
                    <Text style={styles.startsText}>{item.rating.average}</Text>
                    {HandleStars(item.rating.average)}
                </View>

            </View>
        </TouchableOpacity>
    );
}

export default ShowsListItem

const styles = StyleSheet.create({
    itemClick: {
        height: height / 2.5,
        marginVertical: '2%',
        marginHorizontal: '5%',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        shadowOpacity: 1,
        shadowColor: "rgba(0,0,0,0.15)",
        shadowRadius: 5,
        elevation: 15
    },
    itemChildPosition: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly' },
    image: { flex: 0.8, width: '80%' },
    stars: { flexDirection: 'row' },
    startsText: { marginRight: '5%' }
})