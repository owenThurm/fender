import { Input } from 'antd';

export default ({setShowStyleMenu, style}) => (
<Input
  style={{position: 'absolute', left: 0, top: 0, ...style}}
  placeholder='input here'
  onDoubleClick={() => setShowStyleMenu(true)}
  />
)

