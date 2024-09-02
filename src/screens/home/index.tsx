import { Text, View, TextInput, TouchableOpacity, NativeTouchEvent, NativeSyntheticEvent, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export  function Home() {

  const [ name, setName ] = useState('')
  const participants = ['yasuhei', 'samara', 'pedro','ana', 'isa', 'felipe', 'lucas', 'andre', 'joao']
    function handleParticipantAdd(event: NativeSyntheticEvent<NativeTouchEvent>) {
        event.preventDefault()
        // setName(event)
    }

    function handleParticipantRemove(name: string) {
      console.log('clicou em remover')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}> Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <View style={styles.form}>
      <TextInput style={styles.input} placeholder='Nome do participante' placeholderTextColor="#6b6b6b"  />
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
        data={[]}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant name={item} onRemove={() => handleParticipantRemove(name)} key={item} />
        
        )}
      
      />
    </View>
  );
}
