import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Missouri Young Democrats - Two-Year Strategic Plan 2026-2028';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #273351 0%, #1a2338 40%, #273351 60%, #3D7A94 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #5B9FBD, #A9CCE1, #5B9FBD)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#8BC4DB',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            Missouri Young Democrats
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span>Two-Year</span>
            <span>Strategic Plan</span>
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: 'rgba(255, 255, 255, 0.5)',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginTop: '8px',
            }}
          >
            2026 - 2028
          </div>
          <div
            style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, #5B9FBD, #A9CCE1)',
              borderRadius: '2px',
              marginTop: '16px',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.6)',
              marginTop: '12px',
              letterSpacing: '0.05em',
            }}
          >
            Building Youth Political Power Across Missouri
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #5B9FBD, #A9CCE1, #5B9FBD)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
