import { Input } from 'antd';

export default ({ className, position, size, setShowStyleMenu, style }) => (
<Input
  className={className}
  style={{position: 'absolute', left: position.x, top: position.y, height: size.height, width: size.width, ...style}}
  placeholder='input here'
  onDoubleClick={() => setShowStyleMenu(true)}
  />
)

