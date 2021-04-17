import { Box } from './Box';

export default ({ addContent }) => {
  return (
    <div style={{ overflow: 'hidden', clear: 'both' }}>
      <Box addContent={addContent} name="Input"/>
      <Box addContent={addContent} name="Card"/>
      <Box addContent={addContent} name="Button"/>
		</div>
  )
}