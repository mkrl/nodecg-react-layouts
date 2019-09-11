import colors from '../config/colors'

// Raw SVG pattern can be injected with color variables or changed here
const rawPattern = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="6px" height="6px" viewBox="0 0 6 6" version="1.1" opacity="0.3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="${colors.background.secondary}">
            <polygon points="5 0 6 0 0 6 0 5"></polygon>
            <polygon points="6 5 6 6 5 6"></polygon>
        </g>
    </g>
</svg>`

// Encoding large SVG in base64 is not the best idea, since it can end up taking
// more space that its' raw version, but since we don't care about the traffic and it's easy to use - that works
const pattern = () => `url("data:image/svg+xml;base64,${window.btoa(rawPattern)}")`

export default pattern
