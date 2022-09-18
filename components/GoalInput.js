import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require("../assets/favicon.png")} style={styles.image}/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button} >
                    <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
                </View>
                <View style={styles.button} >
                    <Button style={styles.button} title="Add Goal" onPress={addGoalHandler} color='#b181f0'/>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#311b6b',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#311b6b'
    },
    button: {
        width: 150,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#311b6b',
        borderRadius: 6,
        color: '#ffffff',
        width: '100%',
        padding: 6
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});