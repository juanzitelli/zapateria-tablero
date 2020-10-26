import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMostSoldBrands } from '../../actions/productos';
import { marcasMasVendidasColumns} from './spreadsheet-columns/marcas-mas-vendidas-columns'
import { Tablero } from '../ui/Tablero';

export const MarcasMasVendidas = () => {
	const dispatch = useDispatch();
	const { marcasMasVendidas } = useSelector(state => state.products)
	useEffect(() => {
		dispatch(startGetMostSoldBrands())
	}, [dispatch])

	return (
		<Tablero
			title={"Marcas más vendidas"}
			titleClass={"marcas-mas-vendidas__title"}
			mainClass={"marcas-mas-vendidas__main"}
			gridColumns={marcasMasVendidasColumns}
			gridRows={marcasMasVendidas}
		/>

	)


}
