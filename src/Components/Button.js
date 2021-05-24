import { Button } from 'antd';

export default ({className, position, size, setShowStyleMenu, style}) => (
<Button
  className={className}
  style={{position: 'absolute', left: position.x, top: position.y, height: size.height, width: size.width, ...style}}
  onDoubleClick={() => setShowStyleMenu(true)}
  >
  Click Me
</Button>
)