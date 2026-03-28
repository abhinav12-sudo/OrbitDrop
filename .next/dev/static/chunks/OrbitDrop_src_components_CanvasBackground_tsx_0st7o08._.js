(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OrbitDrop/src/components/CanvasBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CanvasBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OrbitDrop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OrbitDrop/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OrbitDrop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OrbitDrop/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CanvasBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OrbitDrop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OrbitDrop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1000,
        y: -1000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OrbitDrop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d", {
                alpha: false
            });
            if (!ctx) return;
            let width = window.innerWidth;
            let height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            const spacingX = 40;
            const spacingY = spacingX * (Math.sqrt(3) / 2);
            let dots = [];
            const initGrid = {
                "CanvasBackground.useEffect.initGrid": ()=>{
                    dots = [];
                    const spacingX = 24; // Lower value = much denser beehive grid
                    const spacingY = spacingX * (Math.sqrt(3) / 2);
                    const cols = Math.ceil(width / spacingX) + 1;
                    const rows = Math.ceil(height / spacingY) + 1;
                    for(let i = -1; i <= rows; i++){
                        for(let j = -1; j <= cols; j++){
                            const offsetX = i % 2 === 0 ? 0 : spacingX / 2;
                            const baseRadius = 1.0;
                            // Very slight jitter to keep it organic but structurally a beehive
                            const jitterX = (Math.random() - 0.5) * 2 * (spacingX * 0.05);
                            const jitterY = (Math.random() - 0.5) * 2 * (spacingY * 0.05);
                            const originX = j * spacingX + offsetX + jitterX;
                            const originY = i * spacingY + jitterY;
                            dots.push({
                                x: originX,
                                y: originY,
                                originX,
                                originY,
                                vx: 0,
                                vy: 0,
                                baseRadius,
                                jitterX,
                                jitterY
                            });
                        }
                    }
                }
            }["CanvasBackground.useEffect.initGrid"];
            initGrid();
            const handleResize = {
                "CanvasBackground.useEffect.handleResize": ()=>{
                    width = window.innerWidth;
                    height = window.innerHeight;
                    canvas.width = width;
                    canvas.height = height;
                    initGrid();
                }
            }["CanvasBackground.useEffect.handleResize"];
            const handleMouseMove = {
                "CanvasBackground.useEffect.handleMouseMove": (e)=>{
                    mouseRef.current.x = e.clientX;
                    mouseRef.current.y = e.clientY;
                }
            }["CanvasBackground.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "CanvasBackground.useEffect.handleMouseLeave": ()=>{
                    mouseRef.current.x = -1000;
                    mouseRef.current.y = -1000;
                }
            }["CanvasBackground.useEffect.handleMouseLeave"];
            window.addEventListener("resize", handleResize);
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseleave", handleMouseLeave);
            let animationId;
            const render = {
                "CanvasBackground.useEffect.render": ()=>{
                    // Clear background with deep space monochromatic
                    ctx.fillStyle = "#0a0a0a";
                    ctx.fillRect(0, 0, width, height);
                    const mx = mouseRef.current.x;
                    const my = mouseRef.current.y;
                    const interactionRadius = 250;
                    for(let i = 0; i < dots.length; i++){
                        const dot = dots[i];
                        const dx = mx - dot.x;
                        const dy = my - dot.y;
                        const distToMouse = Math.sqrt(dx * dx + dy * dy);
                        // Repulsion physics
                        let tx = dot.originX;
                        let ty = dot.originY;
                        if (distToMouse < interactionRadius) {
                            const force = (interactionRadius - distToMouse) / interactionRadius;
                            const angle = Math.atan2(dy, dx);
                            const pushDist = force * 60; // Max push distance
                            tx = dot.originX - Math.cos(angle) * pushDist;
                            ty = dot.originY - Math.sin(angle) * pushDist;
                        }
                        // Spring physics: acceleration towards target
                        const stiffness = 0.08;
                        const damping = 0.75;
                        const ax = (tx - dot.x) * stiffness;
                        const ay = (ty - dot.y) * stiffness;
                        dot.vx = (dot.vx + ax) * damping;
                        dot.vy = (dot.vy + ay) * damping;
                        dot.x += dot.vx;
                        dot.y += dot.vy;
                        // Visuals based on distance to mouse
                        const drawDist = Math.sqrt((mx - dot.x) ** 2 + (my - dot.y) ** 2);
                        let opacity = 0.2; // Increased base visibility
                        let scale = 1;
                        let color = "rgba(160, 160, 160, "; // Grey color
                        if (drawDist < interactionRadius) {
                            const intensity = 1 - drawDist / interactionRadius;
                            // Scale up to 2.5x
                            scale = 1 + intensity * 1.5;
                            // Opacity up
                            opacity = 0.2 + intensity * 0.5;
                            // Keep it grey for active dots too, or maybe blue? The user said "the colour should be grey"
                            color = `rgba(160, 160, 160, `;
                        }
                        ctx.beginPath();
                        ctx.arc(dot.x, dot.y, dot.baseRadius * scale, 0, Math.PI * 2);
                        ctx.fillStyle = `${color}${opacity})`;
                        // Glow effect
                        if (drawDist < interactionRadius) {
                            ctx.shadowBlur = 12 * (1 - drawDist / interactionRadius);
                            // Soft grey glow
                            ctx.shadowColor = `rgba(160, 160, 160, ${opacity * 0.5})`;
                        } else {
                            ctx.shadowBlur = 0;
                        }
                        ctx.fill();
                    }
                    animationId = requestAnimationFrame(render);
                }
            }["CanvasBackground.useEffect.render"];
            render();
            return ({
                "CanvasBackground.useEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseleave", handleMouseLeave);
                    cancelAnimationFrame(animationId);
                }
            })["CanvasBackground.useEffect"];
        }
    }["CanvasBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OrbitDrop$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-0"
    }, void 0, false, {
        fileName: "[project]/OrbitDrop/src/components/CanvasBackground.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_s(CanvasBackground, "Qimi1+XRgPM/xwIviNOompZCtaA=");
_c = CanvasBackground;
var _c;
__turbopack_context__.k.register(_c, "CanvasBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OrbitDrop/src/components/CanvasBackground.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OrbitDrop/src/components/CanvasBackground.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=OrbitDrop_src_components_CanvasBackground_tsx_0st7o08._.js.map