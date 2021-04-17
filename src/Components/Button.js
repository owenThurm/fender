import { Button } from 'antd';

export default ({x, y, setShowStyleMenu}) => (
<Button
  style={{position: 'absolute', left: x, top: y}}
  onClick={() => setShowStyleMenu(true)}
  >
  Click Me
</Button>
)