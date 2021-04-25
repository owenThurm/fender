import { Button } from 'antd';

export default ({setShowStyleMenu}) => (
<Button
  style={{position: 'absolute'}}
  onDoubleClick={() => setShowStyleMenu(true)}
  >
  Click Me
</Button>
)