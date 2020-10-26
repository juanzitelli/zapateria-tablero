import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMostSoldProducts } from '../../actions/productos';
import { Tablero } from '../ui/Tablero';
import { productosMasVendidosColumns } from './spreadsheet-columns/productos-columns';
export const ProductosMasVendidos = () => {
	const dispatch = useDispatch();
	const { productosMasVendidos } = useSelector(state => state.products)
	useEffect(() => {
		dispatch(startGetMostSoldProducts())
	}, [dispatch])

	return (
		<Tablero
			title={"Productos más vendidos"}
			titleClass={"productos-mas-vendidos__title"}
			mainClass={"productos-mas-vendidos__main"}
			gridColumns={productosMasVendidosColumns}
			gridRows={productosMasVendidos}
		/>

	)


}
