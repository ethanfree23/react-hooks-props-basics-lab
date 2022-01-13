import React from "react";
import user from "../data/user.js"

function Links(props) {
    return (
        <>
            <h3>Links</h3>
            <a href={user.links.github}>{user.links.github}</a>
            <br></br>
            <a href={user.links.linkedin}>{user.links.linkedin}</a>
        </>
    );
}

export default Links;
