import { Text, View, TextInput, TouchableOpacity, NativeTouchEvent, NativeSyntheticEvent } from 'react-native';
import { styles } from './styles';

export  function Home() {
    function handleParticipantAdd(event: NativeSyntheticEvent<NativeTouchEvent>) {
        event.preventDefault()

        console.log('vc adicionou um novo participante')

    }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}> Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <View style={styles.form}>
      <TextInput style={styles.input} placeholder='Nome do participante' placeholderTextColor="#6b6b6b" onPress={handleParticipantAdd}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}
