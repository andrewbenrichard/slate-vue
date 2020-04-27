import { Editor, Node, Path, Operation, Transforms } from 'slate'

import { ReactEditor } from './react-editor'
import { Key } from '../utils/key'
import { EDITOR_TO_ON_CHANGE, NODE_TO_KEY } from '../utils/weak-maps'

/**
 * `withReact` adds React and DOM specific behaviors to the editor.
 */

export const withVue = <T extends Editor>(editor: T) => {
  const e = editor as T & ReactEditor
  const { apply, onChange } = e

  e.apply = (op: Operation) => {
    const matches: [Path, Key][] = []

    switch (op.type) {
      case 'insert_text':
      case 'remove_text':
      case 'set_node': {
        for (const [node, path] of Editor.levels(e, { at: op.path })) {
          const key = ReactEditor.findKey(e, node)
          matches.push([path, key])
        }

        break
      }

      case 'insert_node':
      case 'remove_node':
      case 'merge_node':
      case 'split_node': {
        for (const [node, path] of Editor.levels(e, {
          at: Path.parent(op.path),
        })) {
          const key = ReactEditor.findKey(e, node)
          matches.push([path, key])
        }

        break
      }

      case 'move_node': {
        // TODO
        break
      }
    }

    apply(op)

    for (const [path, key] of matches) {
      const [node] = Editor.node(e, path)
      NODE_TO_KEY.set(node, key)
    }
  }

  e.insertData = (data: DataTransfer) => {
    const fragment = data.getData('application/x-slate-fragment')

    if (fragment) {
      const decoded = decodeURIComponent(window.atob(fragment))
      const parsed = JSON.parse(decoded) as Node[]
      Transforms.insertFragment(e, parsed)
      return
    }

    const text = data.getData('text/plain')

    if (text) {
      const lines = text.split(/\r\n|\r|\n/)
      let split = false

      for (const line of lines) {
        if (split) {
          Transforms.splitNodes(e, { always: true })
        }

        Transforms.insertText(e, line)
        split = true
      }
    }
  }

  e.onChange = () => {
    const onContextChange = EDITOR_TO_ON_CHANGE.get(e)

    if (onContextChange) {
      onContextChange()
    }

    onChange()
  }

  return e
}
