export default ({setShowCenteringLines}) => (
    <CenteringLine
      style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', ...style}}
      onDoubleClick={() => setShowStyleMenu(true)}
      >
      Click Me
    </CenteringLine>
    )