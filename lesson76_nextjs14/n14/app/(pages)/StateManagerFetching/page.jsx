'use client'
import StateManagerData from "@/app/components/StateManagerData";
import { store } from "@/app/store";
import React from "react";
import { Provider } from "react-redux";

export default function StateManagerFetching() {
    return (
        <Provider store={store}> 
            <div>
                <h2>State Manager Fetching</h2>
                <StateManagerData />
            </div>
        </Provider>
    );
}
