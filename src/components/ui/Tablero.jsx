import React from 'react'
import { Grid } from 'react-spreadsheet-grid'

export const Tablero = ({ title, titleClass, mainClass, gridColumns, gridRows }) => {
	return (
		<div className="tablero">
			<h1 className={titleClass}>{title}</h1>
			<main className={mainClass}>
				<Grid
					columns={gridColumns}
					rows={gridRows}
					getRowKey={row => row.id}
				/>
			</main>
		</div>
	)
}
