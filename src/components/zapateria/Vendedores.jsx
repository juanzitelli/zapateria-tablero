import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetBestSalespeople } from '../../actions/vendedores'
import { Tablero } from '../ui/Tablero'
import { vendedoresColumns } from './spreadsheet-columns/vendedores-columns'

export const Vendedores = () => {
	const { salespeople } = useSelector(state => state.salespeople)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(startGetBestSalespeople())
	}, [dispatch])
	return (
		<Tablero
			title={"Vendedores"}
			titleClass={"vendedores__title"}
			mainClass={"vendedores__main"}
			gridColumns={vendedoresColumns}
			gridRows={salespeople}
		/>
	)
}
