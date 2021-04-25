import { Button } from 'antd';

export default ({setShowStyleMenu}) => (
<Button
  style={{position: 'absolute'}}
  onClick={() => setShowStyleMenu(true)}
  >
  Click Me
</Button>
)