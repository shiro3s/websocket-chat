import { Plugin } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";

export const pluginPlaceholder = (placeholder = "Something input...") => {
	return new Plugin({
		props: {
			decorations(state) {
				const { $from } = state.selection;

				if ($from.pos === 1 && !$from.parent.textContent) {
					const decoration = Decoration.node($from.before(), $from.after(), {
						"data-placeholder": placeholder,
					});
					return DecorationSet.create(state.doc, [decoration]);
				}
			},
		},
	});
};
