import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import React, { useEffect, useState } from 'react';
import { Table, Typography, Input, InputNumber, Popconfirm, Form, Space } from 'antd';
import { Card } from '@/interface/interfaces';
import { paginationConfig, updateData } from '../../helpers/helpers';
import { EditableCellProps, rootState } from '../../interface/interfaces';

const { Link } = Typography;

const EditableCell = <T extends object>({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}: EditableCellProps<T>) => {
  const getInput = () => {
    if (inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please input ${title}!`
            },
            {
              pattern: /^[a-zA-Z0-9$.\s-]{1,30}$/,
              message: "Error: Invalid string format. Only English letters, digits, '$' symbol, and dot '.' are allowed. The length should be between 1 and 20 characters."
            }
          ]}
        >
          {getInput()}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ListProducts = () => {
  const products = useSelector((state: rootState) => state.reducerCard.cards);
  const dispatch = useDispatch<Dispatch<Card[]>>();

  useEffect(() => {
    setData(products)
  }, [products])

  const [form] = Form.useForm();
  const [data, setData] = useState(products || []);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Card) => record.key === editingKey;

  const edit = (record: Card) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const deleteData = (record: Card) => {
    const newData = data.filter((item: Card) => item.id !== record.id);
    dispatch(updateData(newData));
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (id: number) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => id === parseInt(item.id));
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        dispatch(updateData(newData));
        setEditingKey('');
      } else {
        const newRow = { id: id.toString(), ...row };
        newData.unshift(newRow);
        dispatch(updateData(newData));
        setEditingKey('');
      }
    } catch (err) {
      console.log('Validate Failed:', err);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: '15%',
      editable: true,
    },
    {
      title: 'Count',
      dataIndex: 'count',
      width: '15%',
      editable: true,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_: undefined, record: Card) => {
        console.log(_);
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Save
            </Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Link>Cancel</Link>
            </Popconfirm>
          </span>
        ) : (
          <Space >
            <Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
              style={{ marginRight: 8, fontSize: '18px', textTransform: "uppercase" }}
            >
              Edit
            </Link>
            <Popconfirm
              title="Are you sure you want to delete this record?"
              onConfirm={() => {
                deleteData(record);
              }}
              okText="Yes"
              cancelText="No"
            >
              <Link disabled={editingKey !== ''} style={{ marginRight: 8, fontSize: '18px', textTransform: "uppercase" }}>
                Delete
              </Link>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Card) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const tableData = data?.map((item: Card) => ({ ...item, key: item.id }));

  return (
    <Form form={form} component={false}>
      <Table
        style={{ marginBottom: '30px' }}
        bordered
        dataSource={tableData}
        columns={mergedColumns}
        pagination={paginationConfig}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
      />
    </Form>
  );
};

export default ListProducts;
