import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMostSoldCategories } from '../../actions/productos';
import { Tablero } from '../ui/Tablero';
import { categoriasMasVendidasColumns } from './spreadsheet-columns/categorias-mas-vendidas-columns';
export const CategoriasMasVendidas = () => {
	const dispatch = useDispatch();
	const { categoriasMasVendidas } = useSelector(state => state.products)
	useEffect(() => {
		dispatch(startGetMostSoldCategories())
	}, [dispatch])

	return (
		<Tablero
			title={"Categorías más vendidas"}
			titleClass={"categorias-mas-vendidas__title"}
			mainClass={"categorias-mas-vendidas__main"}
			gridColumns={categoriasMasVendidasColumns}
			gridRows={categoriasMasVendidas}
		/>

	)


}
