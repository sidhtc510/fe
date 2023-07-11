import React from "react";

export default function TRComponent({ hName, hNumber, dateExpire, cvc }) {
    return (
        <tbody>
            <tr>
                <td>{hName}</td>
                <td>{hNumber}</td>
                <td>{dateExpire}</td>
                <td>{cvc}</td>
            </tr>
        </tbody>
    );
}
