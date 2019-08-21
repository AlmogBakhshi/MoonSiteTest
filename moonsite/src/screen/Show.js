import React, { Component } from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome';

class Show extends Component {
    constructor(props) {
        super(props)

        this.item = this.props.navigation.getParam('item')
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.item.name}`
    })

    HandleStars = count => {
        const starts = [];

        for (let index = 0; index < Math.floor(count); index++)
            starts.push(<Icons key={index} name="star" size={20} />)
        if (count - Math.floor(count) !== 0)
            starts.push(<Icons key={Math.floor(count)} name="star-half" size={20} />)

        return starts;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image style={styles.image} resizeMode='stretch' source={{ uri: this.item.image.medium }} />
                <View style={styles.descriptionsPosition}>
                    <View style={styles.starsAVG}>
                        <Text style={styles.starsText}>{this.item.rating.average}</Text>
                        {this.HandleStars(this.item.rating.average)}
                    </View>
                    <View style={styles.descriptions}>
                        <ScrollView>
                            <Text style={styles.descriptionsText}>{`summary: ${this.item.summary.slice(this.item.summary.indexOf('</b>') + 4, this.item.summary.indexOf('</p>'))}`}</Text>
                            <Text style={styles.descriptionsText}>{`genres: ${this.item.genres}`}</Text>
                            <Text style={styles.descriptionsText}>{`schedule: ${this.item.schedule.time}, ${this.item.schedule.days}`}</Text>
                            <Text style={styles.descriptionsText}>{`network: ${this.item.network.name}, ${this.item.network.country.name}, ${this.item.network.country.timezone}`}</Text>
                            <Text style={styles.descriptionsText}>{`language: ${this.item.language}`}</Text>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default Show;

const styles = StyleSheet.create({
    image: { flex: 0.5 },
    descriptionsPosition: { flex: 0.5, alignItems: 'center' },
    starsAVG: { flex: 0.1, width: '90%', flexDirection: 'row', justifyContent: 'center' },
    starsText: { marginRight: '5%' },
    descriptions: { flex: 0.9, width: '90%', justifyContent: 'space-evenly' },
    descriptionsText: { marginVertical: '2%' }
})