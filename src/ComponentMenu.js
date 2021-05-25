import { Modal, InputNumber } from 'antd';
import Draggable from 'react-draggable';
import React from 'react';

class ComponentMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      bounds: { left: 0, top: 0, bottom: 0, right: 0 },
      block: props.block,
    }
  }

  draggleRef = React.createRef();

  handleOk = e => {
    this.props.setShowStyleMenu(false);
  };

  handleCancel = e => {
    this.props.setShowStyleMenu(false);
  };

  onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = this.draggleRef?.current?.getBoundingClientRect();
    this.setState({
      bounds: {
        left: -targetRect?.left + uiData?.x,
        right: clientWidth - (targetRect?.right - uiData?.x),
        top: -targetRect?.top + uiData?.y,
        bottom: clientHeight - (targetRect?.bottom - uiData?.y),
      },
    });
  };

  updateBlock = () => {
    this.props.editContent(this.state.block);
  }

  render() {
    const { bounds, disabled } = this.state;
    const { visible } = this.props;
    const { position, style } = this.props.block;
    return (
      <>
        <Modal
          title={
            <div
              style={{
                width: '100%',
                cursor: 'move',
              }}
              onMouseOver={() => {
                if (disabled) {
                  this.setState({
                    disabled: false,
                  });
                }
              }}
              onMouseOut={() => {
                this.setState({
                  disabled: true,
                });
              }}
              // fix eslintjsx-a11y/mouse-events-have-key-events
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
              onFocus={() => {}}
              onBlur={() => {}}
              // end
            >
              Draggable Modal
            </div>
          }
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          modalRender={modal => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
          X: <InputNumber onChange={e => {
            this.setState({
              block: {
                ...this.state.block,
                position: {
                  x: e,
                  y: position.y
                },

              }
            }, this.updateBlock)
          }} defaultValue={position.x} value={position.x}/>
          Y: <InputNumber onChange={e => {
            this.setState({
              block: {
                ...this.state.block,
                position: {
                  x: position.x,
                  y: e,
                },
              }
            }, this.updateBlock)
          }} defaultValue={position.y} value={position.y}/>
        </Modal>
      </>
    );
  }
}

export default ComponentMenu;