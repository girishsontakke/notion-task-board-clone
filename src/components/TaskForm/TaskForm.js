import { Button, Form, Input, Select } from "antd";
import { TaskContext } from "context/TaskContextProvider";
import { TaskFormContext } from "context/TaskFormContextProvider";
import statuslist from "data/status";
import React, { useContext, useEffect } from "react";
import styles from "./taskForm.module.scss";

const Option = Select.Option;

function TaskForm() {
  const [form] = Form.useForm();
  const { setIsModalOpen } = useContext(TaskContext);
  const { initialValues, setInitialValues } = useContext(TaskFormContext);

  useEffect(() => {
    form.setFieldValue(initialValues);
    return () => {
      form.resetFields();
    };
  }, [initialValues]);

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 5, span: 16 }
  };

  const onFinish = async (values) => {
    const tasks = (await JSON.parse(localStorage.getItem("tasks"))) || [];
    tasks.push({
      ...values,
      id: new Date().toISOString()
    });
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(tasks));
    form.resetFields();
    setInitialValues(null);
    window.dispatchEvent(new Event("storage"));
    setIsModalOpen(false);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="task-creat-update-form"
      onFinish={onFinish}
      initialValues={initialValues}
    >
      <Form.Item
        name="title"
        label="Task"
        rules={[{ required: true, message: "'task' is required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="status" label="Status" rules={[{ required: true }]}>
        <Select placeholder="Select a status of the task" allowClear>
          {statuslist.map((status) => (
            <Option key={status.id} value={status.id}>
              {status.title}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea rows={5} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.submitButton}
        >
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TaskForm;
