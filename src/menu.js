import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/simples';
import ParImpar from './componentes/parImpar';
import { Inverter, MegaSena } from './componentes/multi';
import Contador from './componentes/contador';
import Plataformas from './componentes/plataformas';
import ValidarProps from './componentes/validarProps';
import Evento from './componentes/evento';
import { Avo } from './componentes/comunicacaoDireta';
import TextoSincronizado from './componentes/comunicacaoIndireta';
import ListaFlex from './componentes/listaFlex';
import Flex from './componentes/flex';

export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista Flex' }
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
    Contador: {
        screen: () => <Contador numeroInicial={100} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, { drawerWidth: 300 });