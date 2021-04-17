import { Box } from './Box';

export default ({ addContent }) => {
  return (
    <div style={{ overflow: 'hidden', clear: 'both' }}>
      <Box addContent={addContent} name="Input" component="input"/>
      <Box addContent={addContent} name="Card" component="card"/>
      <Box addContent={addContent} name="Button" component="button"/>
		</div>
  )
}