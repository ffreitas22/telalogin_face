import React from 'react';
import {
View,
Text,
Image,
TextInput,
TouchableOpacity,
StyleSheet,
} from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<Image style={styles.logo} source={require('./face.png')} />
<View style={styles.inputContainer}>

<TextInput
       style={styles.input}
       placeholder="E-mail ou telefone"
       placeholderTextColor="#A4A4A4"
     />
<TextInput
       style={styles.input}
       placeholder="Senha"
       placeholderTextColor="#A4A4A4"
       secureTextEntry={true}
     />
     
</View>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Entrar</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
</TouchableOpacity>
<View style={styles.separator} />
<TouchableOpacity style={styles.createAccount}>
<Text style={styles.createAccountText}>Criar nova conta</Text>
</TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5F5F5',
},

logo: {
width: 200,
height: 200,
resizeMode: 'contain',
marginBottom: 30,
},

inputContainer: {
marginTop: 20,
marginBottom: 30,
},

input: {
borderWidth: 1,
borderColor: '#D9D9D9',
borderRadius: 5,
paddingVertical: 12,
paddingHorizontal: 15,
marginBottom: 15,
width: 300,
fontSize: 16,
},

button: {
backgroundColor: '#1877F2',
borderRadius: 5,
paddingVertical: 12,
paddingHorizontal: 15,
marginBottom: 15,
width: 300,
},

buttonText: {
color: '#FFFFFF',
textAlign: 'center',
fontSize: 16,
fontWeight: 'bold',
},

forgotPassword: {
color: '#1877F2',
textAlign: 'center',
fontSize: 16,
marginBottom: 20,
},

separator: {
height: 1,
width: 300,
backgroundColor: '#D9D9D9',
marginBottom: 20,
},

createAccount: {
marginBottom: 20,
},

createAccountText: {
color: '#1877F2',
textAlign: 'center',
fontSize: 16,
fontWeight: 'bold',
},
});