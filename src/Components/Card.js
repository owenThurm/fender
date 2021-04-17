import { Card } from 'antd';

export default ({x, y, setShowStyleMenu}) => (
<>
  <Card
    style={{position: 'absolute', left: x, top: y}}
    onClick={() => {
      console.log('clicked card');
      setShowStyleMenu(true);
    }}>
    This is a card
  </Card>
</>)