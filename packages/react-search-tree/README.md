SearchTree 带搜索的Tree选择控件
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-search-tree/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-search-tree.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-search-tree)
[![npm version](https://img.shields.io/npm/v/@uiw/react-search-tree.svg?label=@uiw/react-search-tree)](https://npmjs.com/@uiw/react-search-tree)

使用树选择控件可以完整展现其中的层级关系，并具有选中状态。新组件 v4.11.7+ 支持。

```jsx
import { SearchTree } from 'uiw';
// or
import SearchTree from '@uiw/react-search-tree';
```

### 基础实例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {  SearchTree } from 'uiw';

const data = [
  {
    label: '上海市',
    key: 1,
    children:[
      { label: '黄浦区', key: 2 },
      { label: '卢湾区', key: 3 },
      {
        label: '徐汇区',
        key: 4,
        children:[
          { label: '半淞园路街道', key: 6 },
          { label: '南京东路街道', key: 7 },
          { label: '外滩街道', key: 8 },
        ]
      },
    ]
  },
  {
    label: '北京市',
    key: 9,
    children:[
      { label: '东城区', key: 10 },
      { label: '西城区', key: 11 },
      {
        label: '崇文区',
        key: 12,
        children:[
          { label: '东花市街道', key: 13 },
          { label: '体育馆路街道', key: 14 },
          { label: '前门街道', key: 15 },
        ]
      },
    ]
  },
  { label: '澳门', key: 16 },
];

const Demo = () => {

const [value,valueSet]=useState([{ label: '黄浦区', key: 12 }])
const [valueSinge,valueSingeSet]=useState([{ label: '上海市', key: '1-0-0' }])

const onChange=(selectd, selectedAll,  isChecked)=>{
  console.log('SearchTree-> onChange',selectedAll, selectd, isChecked)
  valueSet(selectedAll)
}

const onChangeSinge=(selectd, selectedAll,  isChecked)=>{
  console.log('SearchTree-> onChange', selectd, selectedAll, isChecked)
  valueSingeSet(selectedAll)
}

 return (
   <Row gutter={20}>
    <label>单选</label>
    <Row>
      <SearchTree
        style={{width: 200}}
        multiple={false}
        allowClear={true}
        onSearch={(searchValue)=>console.log('singe',searchValue)}
        onChange={onChangeSinge}
        value={valueSinge}
        options={data}
        placeholder="请选择选项"
      />
    </Row>
    <label>多选</label>
    <Row>
      <SearchTree
        style={{ width: 200 }}
        allowClear={true}
        onSearch={(searchValue)=>console.log('multiple',searchValue)}
        onChange={onChange}
        value={value}
        options={data}
        placeholder="请选择选项"
      />
    </Row>
    <label>禁用</label>
    <Row>
      <SearchTree
        disabled={true}
        style={{ width: 200 }}
        allowClear={true}
        value={[{ label: '东城区', key: 10 },{ label: '成都市',  key: 2 }]}
        options={data}
        placeholder="请选择选项"
      />
    </Row>
  </Row>
  )
}
ReactDOM.render(<Demo />, _mount_);
```

## 尺寸

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React, { useState, useEffect, useRef } from 'react';
import {  SearchTree } from 'uiw';

const Demo = () => {

const data = [
    { label: '小尺寸', key: 1 },
    { label: '默认尺寸', key: 2 },
    { label: '大尺寸', key: 3 },
  ]

  return(
    <>
      <SearchTree
        style={{ width: 150 }}
        value={[{ label: '小尺寸', key: 1 }]}
        options={data}
        size="small"
      />
      <SearchTree
        style={{ width: 175, marginTop: 10 }}
        value={[{ label: '默认尺寸', key: 2 }]}
        options={data}
      />
      <SearchTree
        style={{ width: 200, marginTop: 10 }}
        value={[{ label: '大尺寸', key: 3 }]}
        options={data}
        size="large"
      />
    </>
  )
}

ReactDOM.render(<Demo />, _mount_);
```

## 自定义空选项

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React, { useState, useEffect, useRef } from 'react';
import {  SearchTree } from 'uiw';

const Demo = () => {
  return(
    <>
      <SearchTree
        style={{ width:200 }}
        placeholder="请选择选项"
      />
      <SearchTree
        style={{ width:200,marginTop:5 }}
        emptyOption={<span>暂无数据..</span>}
        placeholder="请选择选项"
      />
    </>
  )
}

ReactDOM.render(<Demo />, _mount_);
```

## Form中使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Notify, Form, Button, SearchTree, Card, Row, Col,Select } from 'uiw';
const Demo = () => {
const form=useRef()

  const data = [
    {
      label: '上海市',
      key: '1-0-0',
      children:[
        { label: '黄浦区', key: '1-0-1' },
        { label: '卢湾区', key: '1-0-2' },
        {
          label: '徐汇区',
          key: '1-0-3',
          children:[
            { label: '半淞园路街道', key: '1-1-0' },
            { label: '南京东路街道', key: '1-2-0' },
            { label: '外滩街道', key: '1-3-0' },
          ]
        },
      ]
    },
    {
      label: '北京市',
      key: '2-0-0',
      children:[
        { label: '东城区', key: '2-1-0' },
        { label: '西城区', key: '2-2-0' },
        {
          label: '崇文区',
          key: '2-3-0',
          children:[
            { label: '东花市街道', key: '2-3-1' },
            { label: '体育馆路街道', key: '2-3-2' },
            { label: '前门街道', key: '2-3-3' },
          ]
        },
      ]
    },
    { label: '澳门', key: '3' },
  ];

  const setValue=()=>{
    form.current.setFields({
      searchTree: [{ label: '东城区', key: '2-1-0' }, { label: '外滩街道', key: '1-3-0' }],
      searchTreeSinge:[{ label: '前门街道', key: '2-3-3' }]
       })
  }

  const resetValue=()=>{
    form.current.resetForm()
  }

  return (
    <div>
      <Form
        ref={form}
        onSubmitError={(error) => {
          if (error.filed) {
            return { ...error.filed };
          }
          return null;
        }}
        onSubmit={({initial, current}) => {
          const errorObj = {};
           if (!current.searchTree || current.searchTree.length === 0) {
            errorObj.searchTree = '默认需要选择内容，选择入内容';
          }
          if(Object.keys(errorObj).length > 0) {
            const err = new Error();
            err.filed = errorObj;
            Notify.error({ title: '提交失败！', description: '请确认提交表单是否正确！' });
            throw err;
          }
          Notify.success({
            title: '提交成功！',
            description: `表单提交成功，选择值为：${current.selectField}，将自动填充初始化值！`,
          });
        }}
        fields={{
          searchTree: {
            initialValue:[ { label: '黄浦区', key: '1-0-1' }, { label: '卢湾区', key: '1-0-2' }],
            children: (
                <SearchTree
                  allowClear={true}
                  style={{ width: 200 }}
                  onSearch={(searchValue)=>console.log('SearchTree-> SearchTreeOption',searchValue)}
                  onChange={(selectd, selectedAll,  isChecked)=>console.log('SearchTree-> onChange', selectd, selectedAll, isChecked)}
                  options={data}
                  placeholder="请选择选项"
                />
            )
          },
          searchTreeSinge: {
            initialValue:[{ label: '东花市街道', key: '2-3-1' }],
            children: (
                <SearchTree
                  multiple={false}
                  style={{ width: 200 }}
                  allowClear={true}
                  onSearch={(searchValue)=>console.log('SearchTree-> SearchTreeOption',searchValue)}
                  onChange={(selectd, selectedAll,  isChecked)=>console.log('SearchTree-> onChange', selectd, selectedAll, isChecked)}
                  options={data}
                  placeholder="请选择选项"
                  treeProps={{ style:{ 'height':200, overflow:'scroll' }}}
                />
            )
          },
        }}
      >
        {({ fields, state, canSubmit }) => {
          return (
            <div>
              <Row style={{display:'flex',flexDirection:'column'}}>
                <div>多选</div>
                <Col >{fields.searchTree}</Col>
              </Row>
              <Row style={{display:'flex',flexDirection:'column'}}>
                <label>单选</label>
                <Col >{fields.searchTreeSinge}</Col>
              </Row>
              <Row>
                <Col fixed>
                  <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
                  <Button onClick={setValue} type="primary" >setValue</Button>
                  <Button onClick={resetValue} type="primary" >重置</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <pre style={{ padding: 10, marginTop: 10 }}>
                    {JSON.stringify(state.current, null, 2)}
                  </pre>
                </Col>
              </Row>
            </div>
          )
        }}
      </Form>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| allowClear | 支持清除 | Boolean | `false` |
| disabled | 禁用选择器 | Boolean | `false` |
| multiple | 是否可以多选 | Boolean | `true` |
| value | 指定当前选中的条目 | [{label:string, key:string}] | - |
| options | 下拉数据源,可参考Tree下拉数据源 | [{label:string, key:string, children: [{label:string, key:string}] }] | - |
| placeholder | 选择框默认文字 | String | - |
| size | 选择框尺寸 | Enum{large, default, small } | `default` |
| onChange | 选中 option，或 input 的 value，调用此函数 | function(selectd, selectdAll, isChecked)=>void | - |
| onSearch | 文本框值变化时回调 | function(searchValue) | - |
| loading | 加载中状态 | Boolean | `false` |
| emptyOption | 自定义下拉选项为空时显示内容 | React.ReactNode | [Empty](#/components/empty) |
| tagProps | 将参数传递给 [`<Tag>`](#/components/tag) 组件 | `TagProps` | `{}` | `4.13.0` |
