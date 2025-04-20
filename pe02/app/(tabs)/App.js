import React from 'react';
import { View, Text, Image, StyleSheet, SectionList, ScrollView, TextInput, useColorScheme } from 'react-native';

const Core = () => {
    // REFERENCE: https://reactnative.dev/docs/usecolorscheme
    // Can't see text when theme is dark because text is automatically set to black
    const theme = useColorScheme();
    const textColor = theme ==='dark' ? 'white' : 'black'

    return (
        <View>
            <SectionList
                sections={[
                    {title: 'Core Requirements (24 Credits)',
                        data: [
                            'CS 504	Software Engineering',
                            'CS 506	Programming for Computing',
                            'CS 519	Cloud Computing Overview',
                            'CS 533	Computer Architecture',
                            'CS 547	Secure Systems and Programs',
                            'CS 622	Discrete Math and Algorithms for Computing',
                            'DS 510	Artificial Intelligence for Data Science',
                            'DS 620	Machine Learning & Deep Learning'
                        ]
                    },
                    {title: 'Depth of Study (6 Credits)',
                        data: [
                            'CS 624	Full-Stack Development - Mobile App',
                            'CS 628	Full-Stack Development - Web Application'
                        ]
                    },
                    {title: 'Capstone (3 Credits)', data: ['CS 687	Computer Science Capstone']}
                ]}
                renderItem={({item}) => <Text style={[styles.item, {color: textColor}]}>{item}</Text>}  //set textcolor in here
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
            />
        </View>
    );
};

const App = () => {
    // Repeat useColorScheme for texts components
    const theme = useColorScheme();
    const textColor = theme ==='dark' ? 'white' : 'black'

    return (
        <ScrollView>
            <Image source={require('../../assets/images/icon.png')} style={styles.icon}/>
            <Text style={[styles.item, {color: textColor}]}>Which one is your favorite course?</Text>
            <TextInput 
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 10,
                    color: textColor,
                }}
                placeholder='ex: CS101'
                placeholderTextColor={theme ==='dark' ? 'white' : 'black'}
            />
            <Core />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
    },
    sectionHeader: {
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'yellow',
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 40
    }
});

export default App;