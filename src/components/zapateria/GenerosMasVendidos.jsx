import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMostSoldGenres } from '../../actions/productos';
import { Tablero } from '../ui/Tablero';
import { generosMasVendidosColumns } from './spreadsheet-columns/generos-mas-vendidos-columns';
export const GenerosMasVendidos = () => {
	const dispatch = useDispatch();
	const { generosMasVendidos } = useSelector(state => state.products)
	useEffect(() => {
		dispatch(startGetMostSoldGenres())
	}, [dispatch])

	return (
		<Tablero
			title={"Géneros más vendidos"}
			titleClass={"generos-mas-vendidos__title"}
			mainClass={"generos-mas-vendidos__main"}
			gridColumns={generosMasVendidosColumns}
			gridRows={generosMasVendidos}
		/>

	)


}
