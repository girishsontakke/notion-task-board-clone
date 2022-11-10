import { Button, Form, Input, Select } from "antd";
import { TaskContext } from "context/TaskContextProvider";
import { TaskFormContext } from "context/TaskFormContextProvider";
import statuslist from "data/status";
import React, { useContext, useEffect } from "react";
import { deleteTask, updateOrCreateTask } from "utils/appUtils";
import styles from "./taskForm.module.scss";

const Option = Select.Option;

function TaskForm() {
  const [form] = Form.useForm();
  const { setIsModalOpen } = useContext(TaskContext);
  const { initialValues, setInitialValues } = useContext(TaskFormContext);

  useEffect(() => {
    form.setFieldsValue(initialValues);
    return () => {
      form.resetFields();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 5, span: 16 }
  };

  const onFinish = async (values) => {
    await updateOrCreateTask(values, initialValues);
    setInitialValues(null);
    window.dispatchEvent(new Event("storage"));
    setIsModalOpen(false);
  };

  const onDelete = async () => {
    await deleteTask(initialValues);
    setInitialValues(null);
    window.dispatchEvent(new Event("storage"));
    setIsModalOpen(false);
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
          {initialValues?.id ? "UPDATE" : "CREATE TASK"}
        </Button>
        {initialValues?.id && (
          <Button htmlType="button" onClick={onDelete} danger>
            DELETE
          </Button>
        )}
      </Form.Item>
    </Form>
  );
}

export default TaskForm;
