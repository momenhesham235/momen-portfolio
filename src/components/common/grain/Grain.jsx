import "./grain.css";

/**
 * Film-grain overlay.
 *
 * A single fixed layer over the whole app. The noise is an inline SVG
 * `feTurbulence` rather than an image asset — it costs no request, tiles
 * seamlessly at any viewport size, and is generated at the device's own pixel
 * density instead of being upscaled.
 *
 * No JS beyond mounting it: the drift is a CSS steps() animation and switches
 * itself off under `prefers-reduced-motion`.
 */
const Grain = () => <div className="grain" aria-hidden="true" />;

export default Grain;
