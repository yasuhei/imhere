import { Text, View, TextInput, TouchableOpacity, NativeTouchEvent, NativeSyntheticEvent, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export  function Home() {

  const [ participant, setParticipant ] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')


    function handleParticipantAdd(event: NativeSyntheticEvent<NativeTouchEvent>) {
        event.preventDefault()
        if(participant.includes(participantName)) {
         return Alert.alert("Participante existe", "Já existe um participante")
        }
        setParticipant(prevState => [...prevState, participantName])
        setParticipantName('')
    }



    function handleParticipantRemove(name: string) {

      Alert.alert("Remover", `Remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () =>  setParticipant(prevState => prevState.filter(participant => participant !== name)),

        },
        {
          text: "Não",
          style: 'cancel'
        }
      ])
    }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}> Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 5 de Novembro de 2024</Text>

      <View style={styles.form}>
      <TextInput style={styles.input}
       placeholder='Nome do participante' 
       placeholderTextColor="#6b6b6b" 
       onChangeText={setParticipantName}
       value={participantName} />
       
      <TouchableOpacity style={styles.button}  onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>
      </View>
      <FlatList 
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
        </Text>
      )}
        data={participant}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant name={item} onRemove={() => handleParticipantRemove(item)} key={item} />
        
        )}
      
      />
    </View>
  );
}
