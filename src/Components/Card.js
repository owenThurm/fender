import { Card } from 'antd';

export default ({style, setShowStyleMenu}) => (
<>
  <Card
    style={{position: 'absolute', left: 0, top: 0, ...style}}
    onDoubleClick={() => {
      setShowStyleMenu(true);
    }}>
    This is a card
  </Card>
</>)