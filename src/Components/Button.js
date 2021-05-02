import { Button } from 'antd';

export default ({setShowStyleMenu, style}) => (
<Button
  style={{position: 'absolute', left: 0, top: 0, ...style}}
  onDoubleClick={() => setShowStyleMenu(true)}
  >
  Click Me
</Button>
)