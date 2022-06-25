import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

import Texto from '../../components/Texto'

export default function itens ({ item: { nome, imagem } }) {
	return <View style={estilos.item}>
		<Image style={estilos.image} source={imagem}/>
		<Texto style={estilos.nome}>{nome}</Texto>
	</View>
}

const estilos = StyleSheet.create({

	item: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#ececec',
		paddingVertical: 16,
		marginHorizontal: 16
	},
	image: {
		width: 46,
		height: 46,
	},
	nome: {
		fontSize: 16,
		lineHeight: 26,
		marginLeft: 11,
		color: '#464646'
	}
})