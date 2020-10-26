import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetSales } from '../../actions/vendedores';
import { Tablero } from '../ui/Tablero';

import { ventasColumns } from './spreadsheet-columns/vendedores-ventas-columns';
export const Ventas = () => {

	const dispatch = useDispatch();
	const { sales } = useSelector(state => state.salespeople)

	useEffect(() => {
		dispatch(startGetSales())
	}, [dispatch])

	return (

		<Tablero
			title={"Vendedores y sus ventas"}
			titleClass={"ventas__title"}
			mainClass={"ventas__main"}
			gridColumns={ventasColumns}
			gridRows={sales}
		/>

	)


}


