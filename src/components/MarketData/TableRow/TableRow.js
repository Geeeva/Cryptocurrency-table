import React from 'react';

const coinTable = (props) => (
    <tr className="row100">
        <td className="column100 column1">{props.row.id}</td>
        <td className="column100 column2">{props.row.rank}</td>
        <td className="column100 column3">{props.row.symbol}</td>
        <td className="column100 column4">{props.row.name}</td>
        <td className="column100 column5">{props.formattedPrice}</td>
        <td className="column100 column6">{props.row.percent_change_24h}</td>
        <td className="column100 column7">{props.row.percent_change_1h}</td>
        <td className="column100 column8">{props.row.percent_change_7d}</td>
    </tr>
);

export default coinTable;