import { baseKeymap } from "prosemirror-commands";
import { history } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { DOMParser } from "prosemirror-model";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { useEffect, useRef } from "react";
import { pluginPlaceholder } from "./pluginPlaceholder";
import { schema } from "./schema";

export const useEditor = () => {
	const contentRef = useRef<HTMLDivElement>(null);
	const editorRef = useRef<EditorView>(null);

	useEffect(() => {
		const el = contentRef.current;
		if (el) {
			const editor = new EditorView(el, {
				state: EditorState.create({
					doc: DOMParser.fromSchema(schema).parse(el),
					plugins: [history(), pluginPlaceholder(), keymap(baseKeymap)],
				}),
				dispatchTransaction(tr) {
					const newState = editor.state.apply(tr);
					editor.updateState(newState);
				},
			});

			editorRef.current = editor;

			return () => {
				editorRef.current?.destroy();
			};
		}
	}, []);

	return {
		contentRef,
	};
};
