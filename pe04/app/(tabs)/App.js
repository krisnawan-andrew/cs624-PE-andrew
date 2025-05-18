import update from 'immutability-helper';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const userImage = require('../../assets/images/user.png');

// more data
const data = Array(6).fill().map(() => ({
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great JavaScript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
}));

const ProfileCard = (props) => {
    const { image, name, occupation, description, onPress, showThumbnail } = props;
    let containerStyles = [styles.cardContainer];

    if (showThumbnail) {
        containerStyles.push(styles.cardThumbnail);
    }

    return (
        <TouchableHighlight onPress={onPress}>
            <View style={[containerStyles]}>
                <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage} source={image}/>
                </View>
                <View>
                    <Text style={styles.cardName}>
                        {name}
                    </Text>
                </View>
                <View style={styles.cardOccupationContainer}>
                    <Text style={styles.cardOccupation}>
                        {occupation}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>
                        {description}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    )
};
        
ProfileCard.PropTypes = {
    image: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    showThumbnail: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
};

export default class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: data
        }
    }

    handleProfileCardPress = (index) => {
        const showThumbnail = !this.state.data[index].showThumbnail;
        this.setState({
            data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
        });
    };

    render() {
        const list = this.state.data.map(function(item, index) {
            const { image, name, occupation, description, showThumbnail } = item;
            return <ProfileCard key={'card-' + index} 
                        image={image}
                        name={name}
                        occupation={occupation}
                        description={description}
                        onPress={this.handleProfileCardPress.bind(this, index)}
                        showThumbnail={showThumbnail}/>
        }, this);

        return (
            <View style={styles.container}>
                {list}
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',       // flex into row
        flexWrap: 'wrap',           // allows wrapping
        padding: 10                 // add padding
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        backgroundColor: profileCardColor,
        width: 150,
        height: 200,
        margin: 5,     // add margin for spacing
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    height: 5
                },
                shadowOpacity: 1
            },
            android: {
                elevation: 5
            }
        })
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 30,
        marginTop: 5,
        paddingTop: 5,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    height: 5
                },
                shadowOpacity: 1
            },
            android: {
                borderWidth: 1,
                borderColor: 'black',
                elevation: 5
            }
        })
    },
    cardImage: {
        width: 15,
        height: 15
    },
    cardName: {
        color: 'white',
        marginTop: 5,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 2,
            width: 2
        },
        textShadowRadius: 1.5
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 1.5
    },
    cardOccupation: {
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
        fontSize: 10
    },
    cardDescription: {
        fontStyle: 'italic',
        fontSize: 10,
        marginTop: 5,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 5
    },
    cardThumbnail: {
        transform: [{scale: 0.2}]
    }
})