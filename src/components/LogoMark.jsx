import React from 'react'

// Utility color palettes
const palettes = {
  charcoal: {
    fg: '#1E1E1E',
    bg: '#FAF7F2', // cream
  },
  gold: {
    fg: '#B08D57', // muted gold
    bg: '#FAF7F2',
  },
  blackOnWhite: {
    fg: '#000000',
    bg: '#FFFFFF',
  },
  whiteOnDark: {
    fg: '#FFFFFF',
    bg: '#111111',
  },
}

function FlowerIcon({ fill = '#1E1E1E' }) {
  // Simple 6-petal abstract flower made from ellipses
  const petal = (
    <ellipse cx="0" cy="-10" rx="6" ry="14" fill={fill} />
  )

  return (
    <g transform="translate(0,0)">
      <g transform="rotate(0)">{petal}</g>
      <g transform="rotate(60)">{petal}</g>
      <g transform="rotate(120)">{petal}</g>
      <g transform="rotate(180)">{petal}</g>
      <g transform="rotate(240)">{petal}</g>
      <g transform="rotate(300)">{petal}</g>
      {/* subtle center to suggest a marshmallow swirl core */}
      <circle cx="0" cy="0" r="2.5" fill={fill} />
    </g>
  )
}

export default function LogoMark({
  layout = 'stacked', // 'stacked' | 'horizontal'
  scheme = 'charcoal', // 'charcoal' | 'gold' | 'blackOnWhite' | 'whiteOnDark'
  width = 420,
  height = layout === 'stacked' ? 220 : 120,
}) {
  const colors = palettes[scheme] || palettes.charcoal

  // Using SVG text to keep the asset vector and crisp
  // Serif stack to evoke luxury without external font deps
  const fontFamily = `'Georgia', 'Times New Roman', serif`

  const viewBox = layout === 'stacked' ? '0 0 840 440' : '0 0 960 240'

  // Sizes tuned for balance and letter spacing
  const titleFontSize = layout === 'stacked' ? 120 : 110
  const tracking = 30 // letter spacing in SVG units

  const iconGroup = (
    <g transform={layout === 'stacked' ? 'translate(420,110)' : 'translate(120,120)'}>
      <FlowerIcon fill={colors.fg} />
    </g>
  )

  const wordGroup = layout === 'stacked' ? (
    <g transform="translate(420,260)">
      <text
        x="0"
        y="0"
        textAnchor="middle"
        fontFamily={fontFamily}
        fontSize={titleFontSize}
        fill={colors.fg}
        letterSpacing={tracking}
        dominantBaseline="middle"
      >
        Zefīru Ziedi
      </text>
    </g>
  ) : (
    <g transform="translate(300,130)">
      <text
        x="0"
        y="0"
        textAnchor="start"
        fontFamily={fontFamily}
        fontSize={titleFontSize}
        fill={colors.fg}
        letterSpacing={tracking}
        dominantBaseline="middle"
      >
        Zefīru Ziedi
      </text>
    </g>
  )

  return (
    <div
      className="inline-block"
      style={{
        backgroundColor: colors.bg,
        padding: layout === 'stacked' ? 24 : 16,
        borderRadius: 12,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Zefīru Ziedi logo"
      >
        {/* Icon */}
        {iconGroup}
        {/* Wordmark */}
        {wordGroup}
      </svg>
    </div>
  )
}
