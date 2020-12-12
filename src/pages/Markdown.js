import React, {useState, useEffect, useRef} from 'react'
import ReactMarkdown from 'react-markdown'

function Markdown() {
    const [markdown, setMarkdown] = useState('# Markdown Preview');
    const textArea = useRef('');
    useEffect(() => {
        textArea.current.focus();
        textArea.current.selectionStart = 18;
    },[])

    return (
        <div className='container py-3 shadow border'>
            <div className='row no-gutters justify-content-around'>
                <textarea 
                    className='col-5 shadow border px-2 '
                    type='text'
                    rows="30"
                    value={markdown}
                    onChange={e => setMarkdown(e.target.value)}
                    ref={textArea}
                />
                
                <ReactMarkdown 
                    className='col-6 shadow border px-2 bg-dark text-light'
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Markdown