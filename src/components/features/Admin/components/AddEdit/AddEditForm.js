import { Button, Form, Input, Select } from "antd";
import React from "react";
const rules = [
  {
    required: true,
    message: "This is required",
  },
];
const AddEditForm = (props) => {
  const { categories, initialValues, handleFinishForm } = props;
  const [form] = Form.useForm();
  form.setFieldsValue(initialValues);

  const renderCategories = () => {
    if (!categories && !categories.length) return;
    return categories.map((category) => (
      <Select.Option key={category.id} value={category.code}>
        {category.content}
      </Select.Option>
    ));
  };

  const handleOnFinish = (value) => {
    handleFinishForm(value);
  };
  return (
    <Form
      form={form}
      name="game"
      layout="vertical"
      className="admin__form"
      onFinish={handleOnFinish}
      initialValues={initialValues}
    >
      <Form.Item
        name="name"
        rules={rules}
        label="Tên game"
        className="form__item"
      >
        <Input placeholder="Nhập tên gamee" />
      </Form.Item>

      <Form.Item
        className="form__item"
        label="Thể loại"
        name="category_code"
        rules={rules}
      >
        <Select placeholder="Chọn thể loại">{renderCategories()}</Select>
      </Form.Item>

      <Form.Item
        name="image"
        rules={rules}
        label="Banner"
        className="form__item"
      >
        <Input placeholder="Thêm link ảnh banner" />
      </Form.Item>

      <Form.List name="image_demo">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item label={index === 0 ? "Ảnh demo" : ""} key={field.key}>
                <Form.Item
                  {...field}
                  validateTrigger={["onChange", "onBlur"]}
                  noStyle
                >
                  <Input placeholder="Nhập link ảnh" style={{ width: "60%" }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <Button
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  >
                    Xóa
                  </Button>
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()}>
                Thêm link hình ảnh demo
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item
        className="form__item"
        label="Thông tin cơ bản về game"
        name="info"
        rules={rules}
      >
        <Input.TextArea placeholder="Nhập tên gamee" />
      </Form.Item>

      <Form.Item
        className="form__item"
        label="Code Download"
        name="link"
        rules={rules}
      >
        <Input placeholder="Nhập code download" />
      </Form.Item>

      <Form.List name="tutorials">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                label={index === 0 ? "Hướng dẫn" : ""}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={["onChange", "onBlur"]}
                  noStyle
                >
                  <Input
                    placeholder="Nhập hướng dẫn"
                    style={{ width: "60%" }}
                  />
                </Form.Item>
                {fields.length > 1 ? (
                  <Button
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  >
                    Xóa
                  </Button>
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()}>
                Thêm hướng dẫn
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Xác nhận
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddEditForm;
