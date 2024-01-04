import { StyleSheet, Text, View } from 'react-native';
import { 
  Container,
} from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {

  const [groups, setGroups] = useState<string[]>(['Galera da Rocketseat']);

  return (
    <Container>
      <Header/>
      
      <Highlight
          title='Turmas'
          subtitle='Jogue com sua turma!'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) =>  (
          <GroupCard
            title={item}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Que tal cadastrar a primeira turma?"
          />
        )}
      />

    </Container>
  );
}