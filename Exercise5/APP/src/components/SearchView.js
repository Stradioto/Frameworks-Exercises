import React from "react";
import SearchResult from './SearchResult.js';

export default function SearchView(props) {
    return (
        <div>
            <div>
                {
                props.items.map(item => <SearchResult key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}