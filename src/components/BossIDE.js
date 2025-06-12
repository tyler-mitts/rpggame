import React from 'react';
import { useNavigate } from 'react-router-dom';

const BossIDE = ({
  ideRef,
  handleIDEClick,
  inputActive,
  typed,
  lines,
  showError,
  fadeIn,
  customMessage,
}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        flex: 1,
        background: '#23272e',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 0,
        position: 'relative',
      }}
      tabIndex={0}
      ref={ideRef}
      onClick={handleIDEClick}
    >
      {/* IDE header */}
      <div
        style={{
          background: '#181c20',
          color: '#7ec699',
          padding: '12px 20px',
          fontFamily: 'monospace',
          fontSize: 18,
          borderBottom: '1px solid #333',
          letterSpacing: 1,
          userSelect: 'none',
        }}
      >
        <span style={{ color: '#e06c75' }}>main.js</span>
      </div>
      {/* IDE editor area */}
      <div
        style={{
          flex: 1,
          padding: 24,
          fontFamily: 'Fira Mono, monospace',
          fontSize: 18,
          color: '#d4d4d4',
          outline: 'none',
          whiteSpace: 'pre-wrap',
          background: '#23272e',
          minHeight: 0,
          cursor: inputActive ? 'text' : 'not-allowed',
          transition: 'background 0.2s',
          overflowY: 'hidden',
          position: 'relative',
        }}
      >
        {/* Typing phase */}
        {inputActive && (
          <>
            {typed}
            <span
              style={{
                display: 'inline-block',
                width: 10,
                height: 22,
                background: '#d4d4d4',
                marginLeft: 2,
                animation: 'blink 1s steps(1) infinite',
                verticalAlign: 'bottom',
              }}
            />
          </>
        )}
        {/* Spamming phase */}
        {!inputActive &&
          lines.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        {/* Blinking cursor animation */}
        <style>
          {`
            @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}
        </style>
        {/* Error popup */}
        {showError && (
          <div
            style={{
              position: 'fixed',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#222',
              border: '2px solid #e06c75',
              borderRadius: 10,
              padding: '32px 40px',
              color: '#fff',
              zIndex: 1001,
              boxShadow: '0 8px 32px #000a',
              textAlign: 'center',
              minWidth: 300,
            }}
          >
            <div style={{ fontSize: 22, marginBottom: 18 }}>
              <b>Error:</b> Bad Loop Algorithm Detected
            </div>
            <div style={{ marginBottom: 24 }}>
              Will you be my girlfriend?
            </div>
            <div>
              <button
                style={{
                  margin: '0 16px',
                  padding: '8px 24px',
                  fontSize: 16,
                  background: '#7ec699',
                  color: '#222',
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/yesScreen')}
              >
                Yes
              </button>
              <button
                style={{
                  margin: '0 16px',
                  padding: '8px 24px',
                  fontSize: 16,
                  background: '#e06c75',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                }}
                onClick={() => alert(':(')}
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
      {/* IDE footer */}
      <div
        style={{
          background: '#181c20',
          color: '#888',
          padding: '8px 20px',
          fontFamily: 'monospace',
          fontSize: 14,
          borderTop: '1px solid #333',
          userSelect: 'none',
        }}
      >
        {inputActive
          ? 'Type any key to write your algorithm...'
          : showError
          ? 'Error: Message Overflow!'
          : 'Algorithm complete! The boss is defeated!'}
      </div>
    </div>
  );
};

export default BossIDE;