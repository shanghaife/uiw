Tree 树形控件
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-tree/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-tree.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-tree)
[![npm version](https://img.shields.io/npm/v/@uiw/react-tree.svg?label=@uiw/react-tree)](https://npmjs.com/@uiw/react-tree)

使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

```jsx
import { Tree } from 'uiw';
// or
import Tree from '@uiw/react-tree';
```

### 基础用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Tree, Card, Row, Col, } from 'uiw';

const data = [
  {
    label: '湖北省',
    key: '0-0-0',
    children:[
      {
        label: '武汉市',
        key: '0-1-0',
        children:[
          { label: '新洲区', key: '0-1-1' },
          { label: '武昌区', key: '0-1-2' },
          {
            label: '汉南区',
            key: '0-1-3',
            children:[
              { label: '汉南区1', key: '0-1-3-1' },
              { label: '汉南区2', key: '0-1-3-2' },
              { label: '汉南区3', key: '0-1-3-3' },
            ]
          },
        ]
      },
      { label: '黄冈市', key: '0-2-0' },
      {
        label: '黄石市',
        key: '0-3-0',
        children:[
          { label: '青山区', key: '0-3-1' },
          { label: '黄陂区', key: '0-3-2' },
          { label: '青山区', key: '0-3-3' },
        ]
      },
    ]
  },
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
  }
];

const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Card title="单选">
          <Tree
            defaultExpandAll={true}
            data={data}
            onExpand={(key, expanded, data, node) => {
              console.log('onExpand',key, expanded, data, node);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log('onSelected',key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
      <Col fixed>
        <Card title="多选，子节点不受控">
          <Tree
          autoExpandParent={true}
            data={data}
            multiple
            onExpand={(key, expanded, data, node) => {
              console.log(key, expanded, data, node);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
      <Col fixed>
        <Card title="多选，子节点受控">
          <Tree
            data={data}
            multiple
            checkStrictly
            onExpand={(key, expanded, data, node) => {
              console.log(key, expanded, data, node);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 自定义图标

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Tree, Card, Row, Col, Icon } from 'uiw';

const data = [
  {
    label: '湖北省',
    key: '0-0-0',
    children:[
      {
        label: '武汉市',
        key: '0-1-0',
        children:[
          { label: '新洲区', key: '0-1-1' },
          { label: '武昌区', key: '0-1-2' },
          {
            label: '汉南区',
            key: '0-1-3',
            children:[
              { label: '汉南区1', key: '0-1-3-1' },
              { label: '汉南区2', key: '0-1-3-2' },
              { label: '汉南区3', key: '0-1-3-3' },
            ]
          },
        ]
      },
      { label: '黄冈市', key: '0-2-0' },
      {
        label: '黄石市',
        key: '0-3-0',
        children:[
          { label: '青山区', key: '0-3-1' },
          { label: '黄陂区', key: '0-3-2' },
          { label: '青山区', key: '0-3-3' },
        ]
      },
    ]
  },
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
  }
];

const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Card title="标题中添加图标">
          <Tree
            data={data}
            renderTitle={(item, { selected, noChild }) => (
              <>
                <Icon style={{ display: '-webkit-inline-box' }} type={noChild ? 'smile-o' : 'apple'} />
                <span>{item.label}</span>
              </>
            )}
            onExpand={(key, expanded, data, node) => {
              console.log(key, expanded, data, node);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
      <Col fixed>
        <Card title="替换默认折叠图标">
          <Tree
            data={data}
            icon="right-circle-o"
            onExpand={(key, expanded, data, node) => {
              console.log(key, expanded, data, node);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
      <Col fixed>
        <Card title="自定义展开图标">
          <Tree
            data={data}
            iconAnimation={false}
            icon={(data, { isOpen, noChild }) => {
              if(isOpen && !noChild) {
                return 'folder-open';
              } else if (!noChild) {
                return 'folder';
              }
              return 'file-text';
            }}
            onExpand={(key, expanded, data) => {
              console.log(key, expanded, data);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 自定义选中效果

通过设置 `checkStrictly` 父节点受子节点控制，设置 `multiple` 为多选，设置 `isSelected` 取消选中效果，也可以使用 [`TreeChecked`](#/components/tree-checked) 组件。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Tree, Card, Row, Col } from 'uiw';

const data = [
  {
    label: '湖北省',
    key: '0-0-0',
    children:[
      {
        label: '武汉市',
        key: '0-1-0',
        children:[
          { label: '新洲区', key: '0-1-1', disabled: true },
          { label: '武昌区', key: '0-1-2' },
          {
            label: '汉南区',
            key: '0-1-3',
            children:[
              { label: '汉南区1', key: '0-1-3-1' },
              { label: '汉南区2', key: '0-1-3-2' },
              { label: '汉南区3', key: '0-1-3-3' },
            ]
          },
        ]
      },
      { label: '黄冈市', key: '0-2-0' },
      {
        label: '黄石市',
        key: '0-3-0',
        children:[
          { label: '青山区', key: '0-3-1' },
          { label: '黄陂区', key: '0-3-2' },
          { label: '青山区', key: '0-3-3' },
        ]
      },
    ]
  },
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

const Demo = () => (
  <div>
    <Tree
      data={data}
      selectedKeys={['0-1-1']}
      multiple
      isSelected={false}
      checkStrictly
      renderTitle={(item, { selected, isHalfChecked }) => {
        if(isHalfChecked) {
          return (
            <><Icon type="minus-square-o" style={{ color: 'green' }} /> <span>{item.label}</span></>
          );
        }
        if (selected) {
          return (
            <><Icon type="check-square-o" style={{ color: 'green' }} /> <span>{item.label}</span></>
          );
        }
        return (
          <><Icon type="square-o" style={{ color: '#b6b6b6' }} /> <span>{item.label}</span></>
        );
      }}
      onExpand={(key, expanded, data, node) => {
        console.log(key, expanded, data, node);
      }}
      onSelected={(key, selected, item, evn) => {
        console.log(key, selected, item, evn);
      }}
    />
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 禁用选项

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Tree, Card, Row, Col, Icon } from 'uiw';

const data = [
  {
    label: '湖北省',
    key: '0-0-0',
    children:[
      {
        label: '武汉市',
        disabled: true,
        key: '0-1-0',
        children:[
          { label: '新洲区', key: '0-1-1' },
          { label: '武昌区', key: '0-1-2' },
          {
            label: '汉南区',
            key: '0-1-3',
            children:[
              { label: '汉南区1', key: '0-1-3-1' },
              { label: '汉南区2', key: '0-1-3-2' },
              { label: '汉南区3', key: '0-1-3-3' },
            ]
          },
        ]
      },
      { label: '黄冈市', key: '0-2-0' },
      {
        label: '黄石市',
        key: '0-3-0',
        children:[
          { label: '青山区', key: '0-3-1' },
          { label: '黄陂区', key: '0-3-2' },
          { label: '青山区', key: '0-3-3' },
        ]
      },
    ]
  },
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
  }
];

const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Card title="基础使用">
          <Tree data={data} />
        </Card>
      </Col>
      <Col fixed>
        <Card title="自定义图标">
          <Tree
            data={data}
            renderTitle={(item, { selected, noChild, disabledStyle }) => (
              <>
                <Icon style={{ display: '-webkit-inline-box', ...disabledStyle }} type={noChild ? 'smile-o' : 'apple'} />
                <span style={disabledStyle}>{item.label}</span>
              </>
            )}
          />
        </Card>
      </Col>
      <Col fixed>
        <Card title="自定义选中效果">
          <Tree
            data={data}
            renderTitle={(item, { selected, isHalfChecked, disabledStyle, disabledClass }) => {
              if(isHalfChecked) {
                return (
                  <><Icon type="minus-square-o" style={{ color: 'green', ...disabledStyle }} /> <span className={disabledClass} >{item.label}</span></>
                );
              }
              if (selected) {
                return (
                  <><Icon type="check-square-o" style={{ color: 'green', ...disabledStyle }} /> <span className={disabledClass} >{item.label}</span></>
                );
              }
              return (
                <><Icon type="square-o" style={{ color: '#b6b6b6',...disabledStyle }} /> <span className={disabledClass} >{item.label}</span></>
              );
            }}
          />
        </Card>
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 连接线

带连接线的树，通过设置 `showLine`。

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Tree, Card, Row, Col } from 'uiw';

const data = [
  {
    label: '湖北省',
    key: '0-0-0',
    children:[
      {
        label: '武汉市',
        key: '0-1-0',
        children:[
          { label: '新洲区', key: '0-1-1' },
          { label: '武昌区', key: '0-1-2' },
          {
            label: '汉南区',
            key: '0-1-3',
            children:[
              { label: '汉南区1', key: '0-1-3-1' },
              { label: '汉南区2', key: '0-1-3-2' },
              { label: '汉南区3', key: '0-1-3-3' },
            ]
          },
        ]
      },
      { label: '黄冈市', key: '0-2-0' },
      {
        label: '黄石市',
        key: '0-3-0',
        children:[
          { label: '青山区', key: '0-3-1' },
          { label: '黄陂区', key: '0-3-2' },
          { label: '青山区', key: '0-3-3' },
        ]
      },
    ]
  },
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
  }
];

const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Card title="自定义展开图标">
          <Tree
            data={data}
            showLine
            iconAnimation={false}
            icon={(data, {isOpen, noChild}) => {
              if(isOpen && !noChild) {
                return 'folder-open';
              } else if (!noChild) {
                return 'folder';
              }
              return 'file-text';
            }}
            onExpand={(key, expanded, data) => {
              console.log(key, expanded, data);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
      <Col fixed>
        <Card title="自定义展开图标">
          <Tree
            data={data}
            showLine
            icon={(data, {isOpen, noChild}) => {
              if(noChild) {
                return 'file-text';
              }
            }}
            onExpand={(key, expanded, data) => {
              console.log(key, expanded, data);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```

### 默认展开树

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Tree, Card, Row, Col } from 'uiw';

const data = [
  {
    label: '湖北省',
    key: '0-0-0',
    children:[
      {
        label: '武汉市',
        key: '0-1-0',
        children:[
          { label: '新洲区', key: '0-1-1' },
          { label: '武昌区', key: '0-1-2' },
          {
            label: '汉南区',
            key: '0-1-3',
            children:[
              { label: '汉南区1', key: '0-1-3-1' },
              { label: '汉南区2', key: '0-1-3-2' },
              { label: '汉南区3', key: '0-1-3-3' },
            ]
          },
        ]
      },
      { label: '黄冈市', key: '0-2-0' },
      {
        label: '黄石市',
        key: '0-3-0',
        children:[
          { label: '青山区', key: '0-3-1' },
          { label: '黄陂区', key: '0-3-2' },
          { label: '青山区', key: '0-3-3' },
        ]
      },
    ]
  },
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
    ]
  }
];

const Demo = () => (
  <div>
    <Row gutter={10}>
      <Col fixed>
        <Card title="默认展开部分">
          <Tree
            data={data}
            showLine
            openKeys={['0-0-0', '0-1-0']}
            iconAnimation={false}
            icon={(data, {isOpen, noChild}) => {
              if(isOpen && !noChild) {
                return 'folder-open';
              } else if (!noChild) {
                return 'folder';
              }
              return 'file-text';
            }}
            onExpand={(key, expanded, data) => {
              console.log(key, expanded, data);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
      <Col fixed>
        <Card title="展开所有">
          <Tree
            data={data}
            showLine
            defaultExpandAll
            icon={(data, {isOpen, noChild}) => {
              if(noChild) {
                return 'file-text';
              }
            }}
            onExpand={(key, expanded, data) => {
              console.log(key, expanded, data);
            }}
            onSelected={(key, selected, item, evn) => {
              console.log(key, selected, item, evn);
            }}
          />
        </Card>
      </Col>
    </Row>
  </div>
)
ReactDOM.render(<Demo />, _mount_);
```


### Form中使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import { Tree, Row, Col, Form, Button } from 'uiw';

const data = [
  {
    label: '湖北省',
    key: '0-0-0',
    children:[
      {
        label: '武汉市',
        key: '0-1-0',
        children:[
          { label: '新洲区', key: '0-1-1' },
          { label: '武昌区', key: '0-1-2' },
          {
            label: '汉南区',
            key: '0-1-3',
            children:[
              { label: '汉南区1', key: '0-1-3-1' },
              { label: '汉南区2', key: '0-1-3-2' },
              { label: '汉南区3', key: '0-1-3-3' },
            ]
          },
        ]
      },
      { label: '黄冈市', key: '0-2-0' },
      {
        label: '黄石市',
        key: '0-3-0',
        children:[
          { label: '青山区', key: '0-3-1' },
          { label: '黄陂区', key: '0-3-2' },
          { label: '青山区', key: '0-3-3' },
        ]
      },
    ]
  },
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
    ]
  }
];

const Demo = () => {
  return (
    <Form
      onChange={({ initial, current }) => {}}
      resetOnSubmit={false}
      onSubmitError={(error) => error && error.filed ? { ...error.filed } : null}
      onSubmit={({initial, current}) => {
        console.log('current: ', current);
        const ErrObj = {};
        if (current.tree === 'unknown') {
          ErrObj.radioGroup = '请选择性别！';
        }
        if(Object.keys(ErrObj).length > 0) {
          const err = new Error();
          err.filed = ErrObj;
          throw err;
        }
        Notify.success({
          title: '提交成功！', description: `填写：【填写成功】！`
        });
      }}
      fields={{
        tree: {
          value: 'region',
          label: '请输入内容',
          help: '必须选择地区！',
          initialValue: ['0-1-1'],
          children: <Tree
            // multiple 
            checkStrictly
            data={data}
          />,
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <div>
            <Row>
              <Col>{fields.tree}</Col>
            </Row>
            <Row>
              <Col>
                <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
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
        );
      }}
    </Form>
  )
}
ReactDOM.render(<Demo />, _mount_);
```


## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| data | 展示数据 | Array | `TreeData[]` |
| openKeys | 节点展开 `key` | Array | `[]` |
| selectedKeys | 设置选中的树节点 | Array | `[]` |
| autoExpandParent | 是否自动展开父节点 | Boolean | `true` |
| defaultExpandAll | 默认展开所有树节点 | Boolean | `false` |
| iconAnimation | 展开收缩图标，参数设为 `false` 禁用动画 | Boolean | `true` |
| isSelected | 是否选中当前节点样式。 | Boolean | `true` |
| showLine | 是否展示连接线 | Boolean | `false` |
| checkStrictly | 子节点受父节点控制设置 `true`，需要配合 `multiple` 参数使用。 | Boolean | `false` |
| multiple | 支持点选多个节点 | Boolean | `false` |
| icon | 重新定义，展开收缩图标，当为函数时视为自定义图标，并展示非折叠项的图标。 | ~~Function(data: object, noChild: bool)/String/Node~~ `@3.4.0+` Function(data: object, { selected: bool, noChild: bool })/String/Node| - |
| renderTitle | 重新定义每个标题节点的显示 | ~~Function(item, selected: bool, noChild: bool)~~ `@3.4.0+` Function(item: TreeData, node?: Node) => React.ReactElement; | - |
| onSelected | 点击选择树节点触发 | Function(selectedKeys: array, key, selected: bool, data, e) | - |
| onExpand | 展开/收起节点时触发 | Function(key, expanded: bool, data, evn) | - |

## Node Type 
| 参数 | 类型 | 版本 |
|--------- |-------- |-------- |
| selected | boolean | - |
| noChild  | boolean | - |
| isHalfChecked  | boolean | `@3.4.0+` |
| openKeys  | Props['openKeys'] | `@3.4.0+` |
| selectedKeys  | Props['selectedKeys'] | `@3.4.0+` |
| disabled  | boolean | `@4.20.0+` |
| disabledClass  | string | `@4.20.0+` |
| disabledStyle  | React.CSSProperties | `@4.20.0+` |
### data

```json
[
  {
    "label": "湖北省",
    "key": "0-0-0",
    "disabled": false,
    "children":[]
  }
  ...
]
```
