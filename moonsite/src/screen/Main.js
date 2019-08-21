import React, { Component } from 'react'
import { FlatList, View, TextInput, StyleSheet } from 'react-native'
import ShowsListItem from '../components/ShowsListItem'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allData: [],
            filterData: [],
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Shows'
    })

    _renderItem = item => ShowsListItem(item, this.props);

    componentDidMount() {
        fetch('http://api.tvmaze.com/shows', {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json;charset=utf-8"
            })
        })
            .then(res => res.json())
            .then(res => this.setState(({ allData: res, filterData: res })))
            .catch(err => console.log("err post=", err));
    }

    HandleSearch = txt => {
        this.setState(prev => ({
            filterData: prev.allData.filter(show =>
                show.name.toLowerCase().includes(txt.toLowerCase())
            )
        }))
    }

    render() {
        return (
            <View style={styles.page}>
                <TextInput
                    style={styles.search}
                    onChangeText={this.HandleSearch}
                    placeholder='Search show by name'
                />
                <FlatList
                    style={styles.flatList}
                    data={this.state.filterData}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                // extraData={this.state.filterData}
                />
            </View>
        );
    }
}

export default Main;

const styles = StyleSheet.create({
    page: { flex: 1 },
    search: { flex: 0.1, textAlign: 'center' },
    flatList: { flex: 0.9 }
})