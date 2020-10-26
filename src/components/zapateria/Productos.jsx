import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetAllProducts } from '../../actions/productos';
import { Tablero } from '../ui/Tablero';
import { productosColumns } from './spreadsheet-columns/productos-columns';
export const Productos = () => {
	const dispatch = useDispatch();
	const { productos } = useSelector(state => state.products)
	
	useEffect(() => {
		dispatch(startGetAllProducts())
	}, [dispatch])

	return (

		<Tablero
			title={"Productos"}
			titleClass={"productos__title"}
			mainClass={"productos__main"}
			gridColumns={productosColumns}
			gridRows={productos}
		/>

	)


}


