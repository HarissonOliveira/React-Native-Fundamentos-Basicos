import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Guilherme', nota: 8.9 },
    { id: 3, nome: 'Harisson', nota: 9.9 },
    { id: 4, nome: 'Teogenes', nota: 5.4 },
    { id: 5, nome: 'Marcos', nota: 6 },
    { id: 6, nome: 'Isaac', nota: 7.5 },
    { id: 7, nome: 'Henrique', nota: 8 },
    { id: 8, nome: 'Fabio', nota: 9.5 },
    { id: 9, nome: 'Serginho', nota: 8.3 },

    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Guilherme', nota: 8.9 },
    { id: 13, nome: 'Harisson', nota: 9.9 },
    { id: 14, nome: 'Teogenes', nota: 5.4 },
    { id: 15, nome: 'Marcos', nota: 6 },
    { id: 16, nome: 'Isaac', nota: 7.5 },
    { id: 17, nome: 'Henrique', nota: 8 },
    { id: 18, nome: 'Fabio', nota: 9.5 },
    { id: 19, nome: 'Serginho', nota: 8.3 }

];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    /* Flex */
    
    // alignItems: 'flex-start',
    // justifyContent: 'center',

    flexDirection: 'row', // Muda orientação do FLEX
    alignItems: 'center',
    justifyContent: 'space-between'
}

export const Aluno = props => {
    return (
        <View style={itemEstilo}>
            <Text>Nome: {props.nome}</Text>
            <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
        </View>
    )
}

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}