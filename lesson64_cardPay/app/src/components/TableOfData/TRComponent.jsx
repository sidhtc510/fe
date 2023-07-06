import React from "react";

export default function TRComponent({ hName, hNumber, mm, yy, cvc }) {
    return (
        <tbody>
            <tr>
                <td>{hName}</td>
                <td>{hNumber}</td>
                <td>
                    {mm}/{yy}
                </td>
                <td>{cvc}</td>
            </tr>
        </tbody>
    );
}
