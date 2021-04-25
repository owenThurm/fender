import { Card } from 'antd';

export default ({style, setShowStyleMenu}) => (
<>
  <Card
    style={{position: 'absolute', ...style}}
    onDoubleClick={() => {
      setShowStyleMenu(true);
    }}>
    This is a card
  </Card>
</>)