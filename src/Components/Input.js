import { Input } from 'antd';

export default ({x, y, setShowStyleMenu}) => (
<Input
  style={{position: 'absolute', left: x, top: y}}
  placeholder='input here'
  onClick={() => setShowStyleMenu(true)}
  />
)

