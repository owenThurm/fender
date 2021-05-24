import { Card } from 'antd';

export default ({className, position, size, style, setShowStyleMenu}) => (
  <Card
    className={className}
    style={{position: 'absolute', left: position.x, top: position.y, width: size.width, height: size.height, ...style}}
    onDoubleClick={() => {
      setShowStyleMenu(true);
    }}>
    This is a card
  </Card>
)