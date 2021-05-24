import { Button } from 'antd';

export default ({setShowStyleMenu, style}) => (
<Button
  style={{position: 'absolute', left: 0, top: 0, height: '100%', width: '100%', ...style}}
  onDoubleClick={() => setShowStyleMenu(true)}
  >
  Click Me
</Button>
)