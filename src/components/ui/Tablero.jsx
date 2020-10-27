import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from 'react-spreadsheet-grid'
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";


const overrideSpinnerCSS = css`
  display: block;
  margin: 0px 5vw;
`;

export const Tablero = ({ title, titleClass, mainClass, gridColumns, gridRows }) => {
	const {loadingTablero} = useSelector(state => state.ui)
	return (
		<div className="tablero">
			<h1 className={titleClass}>{title}</h1>
			<main className={mainClass}>
				{loadingTablero ? <PulseLoader
					css={overrideSpinnerCSS}
					size={10}
					color={"#273043"}
					loading={loadingTablero}
				/> : <Grid
					columns={gridColumns}
					rows={gridRows}
					getRowKey={row => row.id}
				/>}
			</main>
		</div>
	)
}
