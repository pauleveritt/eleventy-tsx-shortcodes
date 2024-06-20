# 11ty, TSX, Subcomponents, and shortcodes

TSX subcomponents don't have access to shortcodes. The
`this.context.shortcodes.css()` function runs, but doesn't put its content into the bundle.

## TSX and 11ty
