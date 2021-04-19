import { Card } from 'antd';

export default ({x, y, style, setShowStyleMenu}) => (
<>
  <Card
    style={{position: 'absolute', left: x, top: y, ...style}}
    onDoubleClick={() => {
      setShowStyleMenu(true);
    }}>
    This is a card
  </Card>
</>)