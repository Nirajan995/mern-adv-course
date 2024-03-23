import React, { useState } from "react";
import { Button, DatePicker, FloatButton, Form, Modal, Radio } from "antd";

const ScheduleForm = ({
  isModalOpen,
  handleOk,
  handleCancel,
  handleSubmit,
}: {
  isModalOpen: boolean;
  handleOk: any;
  handleCancel: any;
  handleSubmit: any;
}) => {
  function onChange() {}
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Form Layout" name="layout">
            <Radio.Group>
              <Radio.Button value="H12">12 Hours</Radio.Button>
              <Radio.Button value="daily">Daily</Radio.Button>
              <Radio.Button value="weekly">Weekly</Radio.Button>
              <Radio.Button value="monthly">Monthly</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Form Layout" name="layout">
            <DatePicker onChange={onChange} />
          </Form.Item>

          <FloatButton />
        </Form>
      </Modal>
    </>
  );
};

export default ScheduleForm;
