import { Input } from 'antd';

export default ({setShowStyleMenu}) => (
<Input
  style={{position: 'absolute'}}
  placeholder='input here'
  onDoubleClick={() => setShowStyleMenu(true)}
  />
)

