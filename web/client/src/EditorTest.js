// import React, { useCallback, useMemo, useState } from 'react'
// import isHotkey from 'is-hotkey'
// import { Editable, withReact, useSlate, Slate, useSelected, useFocused, useEditor } from 'slate-react'
// import { Editor, Transforms, createEditor } from 'slate'
// import { withHistory } from 'slate-history'
// import { css } from 'emotion'
// import { Button, Icon, Toolbar } from './SlateComponents'

// const HOTKEYS = {
//   'mod+b': 'bold',
//   'mod+i': 'italic',
//   'mod+u': 'underline',
//   'mod+`': 'code',
// }

// const VARIABLE_LIST_CLASS = "varable-name-list";
// const VARIABLE_NAME_ITEM_CLASS = "variable-name-item";
// const LIST_TYPES = ['numbered-list', 'bulleted-list']

// const EditorTest = () => {
//   const data = JSON.parse(window.localStorage.getItem('template')) || initialValue;
//   // const data = initialValue;
//   const [value, setValue] = useState(data)
//   const renderElement = useCallback(props => <Element {...props} />, [])
//   const renderLeaf = useCallback(props => <Leaf {...props} />, [])
//   const withVariables = editor => {
//     const { insertData, isVoid, isInline } = editor
//     editor.isVoid = element => {
//       return element.type.indexOf('variable-') > -1 || element.type === 'image' ? true : isVoid(element)
//     }
//     return editor
//   }
//   const editor = useMemo(
//     () => withVariables(withHistory(withReact(createEditor()))),
//     []
//   )

//   return (
//     <div class="row">
//       <div class="col-3 block"></div>
//       <div class="col-9 block">
//         <Slate editor={editor} value={value} onChange={value => {
//           window.localStorage.setItem('template', JSON.stringify(value));
//           setValue(value)
//         }}>
//           <Toolbar>
//             <InsertVariableButton />
//             <InsertImageButton />
//             <BlockButton format="heading-one" icon="looks_one" />
//           </Toolbar>
//           <Toolbar>
//             <MarkButton format="bold" icon="format_bold" />
//             <MarkButton format="italic" icon="format_italic" />
//             <MarkButton format="underline" icon="format_underlined" />
//             <MarkButton format="code" icon="code" />
//             <BlockButton format="heading-one" icon="looks_one" />
//             <BlockButton format="heading-two" icon="looks_two" />
//             <BlockButton format="block-quote" icon="format_quote" />
//             <BlockButton format="numbered-list" icon="format_list_numbered" />
//             <BlockButton format="bulleted-list" icon="format_list_bulleted" />
//           </Toolbar>
//           <Editable
//             renderElement={renderElement}
//             renderLeaf={renderLeaf}
//             placeholder="Enter some rich text…"
//             spellCheck
//             autoFocus
//             onKeyDown={event => {
//               for (const hotkey in HOTKEYS) {
//                 if (isHotkey(hotkey, event)) {
//                   event.preventDefault()
//                   const mark = HOTKEYS[hotkey]
//                   toggleMark(editor, mark)
//                 }
//               }
//             }}
//           />
//         </Slate>
//       </div>
//     </div>

//   )
// }

// const insertImage = (editor, url) => {
//   const text = { text: '' }
//   const image = { type: 'image', url, children: [text] }
//   Transforms.insertNodes(editor, image)
// }


// const insertIVariable = (editor, name) => {
//   const text = { text: '' }
//   const placeholder = `${name} here`
//   const variable = {
//     type: 'variable',
//     name,
//     placeholder,
//     children: [
//       {
//         type: 'variable-title',
//         name,
//         children: [{ text: 'Title ' }]
//       },
//       {
//         type: 'variable-content',
//         placeholder,
//         children: [{ text: placeholder }]
//       }
//     ]
//   };
//   Transforms.insertNodes(editor, variable)
// }


// const toggleBlock = (editor, format) => {
//   const isActive = isBlockActive(editor, format)
//   const isList = LIST_TYPES.includes(format)

//   Transforms.unwrapNodes(editor, {
//     match: n => LIST_TYPES.includes(n.type),
//     split: true,
//   })

//   Transforms.setNodes(editor, {
//     type: isActive ? 'paragraph' : isList ? 'list-item' : format,
//   })

//   if (!isActive && isList) {
//     const block = { type: format, children: [] }
//     Transforms.wrapNodes(editor, block)
//   }
// }

// const toggleMark = (editor, format) => {
//   const isActive = isMarkActive(editor, format)

//   if (isActive) {
//     Editor.removeMark(editor, format)
//   } else {
//     Editor.addMark(editor, format, true)
//   }
// }

// const isBlockActive = (editor, format) => {
//   const [match] = Editor.nodes(editor, {
//     match: n => n.type === format,
//   })

//   return !!match
// }

// const isMarkActive = (editor, format) => {
//   const marks = Editor.marks(editor)
//   return marks ? marks[format] === true : false
// }

// const Element = ({ attributes, children, element }) => {

//   switch (element.type) {
//     case 'block-quote':
//       return <blockquote {...attributes}>{children}</blockquote>
//     case 'bulleted-list':
//       return <ul {...attributes}>{children}</ul>
//     case 'heading-one':
//       return <h1 {...attributes}>{children}</h1>
//     case 'heading-two':
//       return <h2 {...attributes}>{children}</h2>
//     case 'list-item':
//       return <li {...attributes}>{children}</li>
//     case 'numbered-list':
//       return <ol {...attributes}>{children}</ol>
//     case 'image':
//       return <ImageElement {...{ attributes, children, element }} />
//     case 'variable-content':
//       return <span {...attributes}>
//         <span contentEditable={false}>
//           {element.placeholder}
//           {children}
//         </span>
//       </span>
//     case 'variable-title':
//       return <span {...attributes}>
//         <span contentEditable={false}>
//           <span class={VARIABLE_LIST_CLASS} data-variable={true} >
//             <span class={VARIABLE_NAME_ITEM_CLASS}>{element.name}</span>
//           </span>
//           {children}
//         </span>
//       </span>

//     default:
//       return <p {...attributes}>{children}</p>
//   }
// }


// const ImageElement = ({ attributes, children, element }) => {
//   const selected = useSelected()
//   const focused = useFocused()
//   return (
//     <div {...attributes}>
//       <div contentEditable={false}>
//         <img
//           src={element.url}
//           className={css`
//             display: block;
//             max-width: 100%;
//             max-height: 20em;
//             box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
//           `}
//         />
//       </div>
//       {children}
//     </div>
//   )
// }
// const Leaf = ({ attributes, children, leaf }) => {
//   if (leaf.bold) {
//     children = <strong>{children}</strong>
//   }

//   if (leaf.code) {
//     children = <code>{children}</code>
//   }

//   if (leaf.italic) {
//     children = <em>{children}</em>
//   }

//   if (leaf.underline) {
//     children = <u>{children}</u>
//   }

//   return <span {...attributes}>{children}</span>
// }

// const InsertVariableButton = () => {

//   const editor = useEditor()
//   return (
//     <Button
//       onMouseDown={event => {
//         event.preventDefault()
//         const name = window.prompt('Enter the Name of the variable:')
//         if (!name) return
//         insertIVariable(editor, name)
//       }}
//     >
//       <Icon>text_fields</Icon>
//     </Button>
//   )

// }

// const InsertImageButton = () => {
//   const editor = useEditor()
//   return (
//     <Button
//       onMouseDown={event => {
//         event.preventDefault()
//         // const url = window.prompt('Enter the URL of the image:')
//         // if (!url) return
//         insertImage(editor, 'https://getuikit.com/v2/docs/images/placeholder_600x400.svg')
//       }}
//     >
//       <Icon>image</Icon>
//     </Button>
//   )
// }

// const BlockButton = ({ format, icon }) => {
//   const editor = useSlate()
//   return (
//     <Button
//       active={isBlockActive(editor, format)}
//       onMouseDown={event => {
//         event.preventDefault()
//         toggleBlock(editor, format)
//       }}
//     >
//       <Icon>{icon}</Icon>
//     </Button>
//   )
// }

// const MarkButton = ({ format, icon }) => {
//   const editor = useSlate()
//   return (
//     <Button
//       active={isMarkActive(editor, format)}
//       onMouseDown={event => {
//         event.preventDefault()
//         toggleMark(editor, format)
//       }}
//     >
//       <Icon>{icon}</Icon>
//     </Button>
//   )
// }


// const initialValue = [
//   {
//     type: "heading-one",
//     children: [
//       {
//         type: 'variable',
//         name: 'Title',
//         placeholder: 'Here will be title ',
//         children: [
//           {
//             type: 'variable-title',
//             name: 'Title',
//             children: [{ text: 'Title ' }]
//           },
//           {
//             type: 'variable-content',
//             placeholder: "Type title here",
//             children: [{ text: 'Type title here ' }]
//           }
//         ]
//       },
//       {
//         text: " "
//       }
//     ]
//   },
//   {
//     type: "paragraph",
//     children: [
//       {
//         text: "asds"
//       }
//     ]
//   }
// ]

// export default EditorTest