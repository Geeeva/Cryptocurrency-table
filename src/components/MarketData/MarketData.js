import React from 'react';
import './MarketData.css';
import TableRow from './TableRow/TableRow';
        
const marketData = (props) => (

    <table data-vertable="ver6">
    	<thead>
    		<tr className="row100 head">
                <th className="column100 column1"><button onClick={() => props.sortByRank('id')}>Id</button></th>
    			<th className="column100 column2"><button onClick={() => props.sortByRank('rank')}>Rank</button></th>
    			<th className="column100 column3"><button onClick={() => props.sortBySymbol('symbol')}>Symbol</button></th>
                <th className="column100 column4"><button onClick={() => props.sortByName('name')}>Name</button></th>
    			<th className="column100 column5"><button onClick={() => props.sortByPrice('price_usd')}>Price in $</button></th>
    			<th className="column100">%/hour</th>
    			<th className="column100">%/day</th>
    			<th className="column100">%/week</th>
    		</tr>
    	</thead>
    	<tbody>
    		{
    			props.cryptos.map(row => {
    				const price = row.price_usd;
    				const formattedPrice = parseFloat(price).toFixed(2);
    				return (
    					<TableRow key={row.rank} row={row} formattedPrice={formattedPrice} />
    				)
    			})
    		}
    	</tbody>
    </table>
);

export default marketData;