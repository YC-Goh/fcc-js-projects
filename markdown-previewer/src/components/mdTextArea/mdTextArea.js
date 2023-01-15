
import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialStateText = `
# Hello

## This is a Markdown-to-HTML translator

To learn more about Markdown, visit [Markdown Guide](https://www.markdownguide.org/)

To display text as code, use backticks (\\\`) like this:

\`this.is(some.code)\`

To display whole blocks of code, encase them with tab indentation like this:

    this
    is
    some
    code

To write an unordered list, start the sequence of list items with a dash (-) and a space:

- Item 1
- Item 2
- Item 3

To write an ordered list, start the sequence of list items with a number, a dot (.), and a space:

1. Item 1
2. Item 2
3. Item 3

To write italicised text, encase the text in one asterisk (*) like this:

*This is some text*

To write bolded text, encase the text in two asterisks (**) like this:

**This is some text**

To make a piece of text a block quote, start each line of the text with a right angle bracket (>):

> This is some quote

To include an image, start with an exclamation mark (!), add alternative text in square brackets ([this stuff shows up if the image fails to load]), and then the URL and title of the image in parentheses, like this:

![Some alternative text here](non.working.link/to/show/how/it/works "Title of the image if it was valid")

`;

const mdTextAreaSlice = createSlice({
    name: 'mdTextArea',
    initialState: {
        mdText: initialStateText
    },
    reducers: {
        userInput: (state, action) => {
            state.mdText = action.payload;
        },
    }
});

const { userInput } = mdTextAreaSlice.actions;
export const styleTextArea = {width: '95%', height: '95%'}

function MdTextArea() {
    const dispatch = useDispatch();
    return (
        <textarea
            id='editor' 
            onChange={(event) => dispatch(userInput(event.target.value))} 
            value={useSelector((state) => state.mdTextArea.mdText)}
            style={styleTextArea}
        ></textarea>
    );
};

export const mdTextAreaReducer = mdTextAreaSlice.reducer;
export default MdTextArea;
