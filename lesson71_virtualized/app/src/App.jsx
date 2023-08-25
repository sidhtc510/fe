import React from "react";
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized";
import "react-virtualized/styles.css";
import { data } from "./data/data.js";


export default function App() {
    const cache = new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 10,
    });

    const renderRow = ({ index, key, style, parent }) => {
        const myStyle = { ...style, display: "flex", gap: "20px", padding: "10px", borderRadius: "10px", alignItems: "center" };
        return (
            <CellMeasurer key={key} cache={cache} parent={parent} columnIndex={0} rowIndex={index}>
                {({ registerChild }) => (
                  
                        <div key={key} style={myStyle} ref={registerChild}>
                            <p style={{ fontSize: "21px" }}>{data[index].name}</p>
                            <p>{data[index].email}</p>
                        </div>
                    
                )}
            </CellMeasurer>
        );
    };

    return (
        <AutoSizer style={{ height: "100vh" }}>
            {({ width, height }) => (
                <List
                    width={width}
                    height={height}
                    rowHeight={cache.rowHeight}
                    rowRenderer={renderRow}
                    rowCount={data.length}
                    deferredMeasurementCache={cache}
                    overscanRowCount={6}
                />
            )}
        </AutoSizer>
    );
}
