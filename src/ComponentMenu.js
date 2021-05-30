import { Modal, InputNumber } from 'antd';
import Draggable from 'react-draggable';
import React from 'react';
import PropTypes from 'prop-types';
import Block from './Models/Block';

const componentMenuPropTypes = {
  block: PropTypes.instanceOf(Block).isRequired,
  setShowStyleMenu: PropTypes.func.isRequired,
  editContent: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

class ComponentMenu extends React.Component {
  draggleRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      bounds: {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
      },
      block: props.block,
    };
  }

  handleOk = () => {
    const { setShowStyleMenu } = this.props;
    setShowStyleMenu(false);
  };

  handleCancel = () => {
    const { setShowStyleMenu } = this.props;
    setShowStyleMenu(false);
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
    const { editContent } = this.props;
    const { block } = this.state;

    editContent(block);
  }

  render() {
    const { bounds, disabled } = this.state;
    const { visible, block } = this.props;
    const { position: { x, y } } = block;
    return (
      <>
        <Modal
          title={(
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
          )}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          modalRender={(modal) => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
          X:
          <InputNumber
            onChange={(e) => {
              this.setState({
                block: {
                  ...block,
                  position: {
                    x: e,
                    y,
                  },
                },
              }, this.updateBlock);
            }}
            defaultValue={x}
            value={x}
          />
          Y:
          <InputNumber
            onChange={(e) => {
              this.setState({
                block: {
                  block,
                  position: {
                    x,
                    y: e,
                  },
                },
              }, this.updateBlock);
            }}
            defaultValue={y}
            value={y}
          />
        </Modal>
      </>
    );
  }
}

ComponentMenu.propTypes = componentMenuPropTypes;

export default ComponentMenu;
