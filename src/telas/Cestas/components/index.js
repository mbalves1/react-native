import React from "react";
import { FlatList, StyleSheet, View } from 'react-native'

import Texto from "../../../components/Texto";
import logo from '../../../../assets/logo.png'
import Topo from "./Topo";
import Detalhes from "./Detalhes";
import iten from '../iten'

export default function Cesta ({topo, detalhes, itens}) {
	return (
		<>
			<FlatList
				data={itens.lista}
				renderItem={iten}
				keyExtractor={({ nome }) => nome }
				ListHeaderComponent={() => {
					return <>
						<Topo {...topo} />
						<View style={estilos.cestas}>
							<Detalhes {...detalhes} />
							<Texto style={estilos.titulo}>{itens.titulo}</Texto>
						</View>
					</>
				}}
			/>
		</>
	)
}

const estilos = StyleSheet.create({
	cestas: {
		paddingVertical: 8,
		paddingHorizontal: 16
	},
	titulo: {
		color: '#464646',
		fontWeight: 'bold',
		marginTop: 32,
		marginBottom: 8,
		fontSize: 20,
		lineHeight: 32
	},
})
