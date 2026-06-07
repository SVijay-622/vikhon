import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'VIKHON — Premium Digital Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const SERVICES = ['Web Development', 'UI/UX Design', 'Mobile Apps', 'Branding']

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #080810 0%, #0D0D20 50%, #080810 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg, transparent 0%, #6366F1 40%, #A855F7 60%, transparent 100%)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            border: '1px solid rgba(99,102,241,0.4)',
            borderRadius: 100,
            padding: '10px 28px',
            marginBottom: 44,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366F1' }} />
          <span style={{ color: '#818CF8', fontSize: 15, letterSpacing: '0.3em', fontFamily: 'sans-serif' }}>
            PREMIUM DIGITAL AGENCY · CHENNAI, INDIA
          </span>
        </div>

        {/* Logo */}
        <div
          style={{
            fontSize: 108,
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '0.3em',
            fontFamily: 'sans-serif',
            marginBottom: 20,
          }}
        >
          VIKHON
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: '#52525B',
            letterSpacing: '0.08em',
            fontFamily: 'sans-serif',
            marginBottom: 60,
          }}
        >
          Where Service Meets The Extraordinary
        </div>

        {/* Service pills */}
        <div style={{ display: 'flex', gap: 14 }}>
          {SERVICES.map((s) => (
            <div
              key={s}
              style={{
                border: '1px solid rgba(99,102,241,0.35)',
                borderRadius: 100,
                padding: '12px 26px',
                color: '#6366F1',
                fontSize: 18,
                fontFamily: 'sans-serif',
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 44,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
          <span style={{ color: '#71717A', fontSize: 18, letterSpacing: '0.12em', fontFamily: 'sans-serif' }}>
            vikhon.com
          </span>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.3) 50%, transparent 100%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
