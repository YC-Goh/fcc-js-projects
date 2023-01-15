
import React from "react";
import { useSelector } from "react-redux";
import { marked } from "marked";
import { styleTextArea } from "../mdTextArea/mdTextArea";
import DOMPurify from 'dompurify';

function MdTranslatedArea() {
    return (
        <div 
            id='preview' 
            style={styleTextArea}
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(useSelector((state) => state.mdTextArea.mdText), {breaks: true}))}}
        >
        </div>
    )
};

document.getElementById('preview')

export default MdTranslatedArea;
