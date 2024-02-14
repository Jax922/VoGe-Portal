

import React, { useEffect, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/addon/edit/readOnlyRegions.js'; // 确保导入了必要的插件

const StoryScipt = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            const editor = editorRef.current.editor;
            const readOnlyRanges = [
                { start: { line: 0, ch: 0 }, end: { line: 0, ch: 8 } }, // 例如，[Warmup] 是只读的
                // ...可以添加更多的只读区域
            ];

            // readOnlyRanges.forEach(range => {
            //     editor.markText(range.start, range.end, { readOnly: true, className: 'cm-readOnly' });
            // });
        }
    }, []);

    return (
        <CodeMirror
            ref={editorRef}
            value="[Warmup]\n这里是开场白的脚本内容...\n\n[XAxis]\n这里是关于X轴的讲解..."
            options={{
                theme: 'default',
                lineNumbers: true,
                // 其他您需要的选项
            }}
        />
    );
};

export default StoryScipt;

