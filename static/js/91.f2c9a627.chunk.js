(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[91],{1321:function(n,e,o){"use strict";o.r(e),e.default='Badge \u6807\u8bb0\n===\n\n\u51fa\u73b0\u5728\u6309\u94ae\u3001\u56fe\u6807\u65c1\u7684\u6570\u5b57\u6216\u72b6\u6001\u6807\u8bb0\u3002\n\n```jsx\nimport { Badge } from \'uiw\';\n// or\nimport Badge from \'@uiw/react-badge\';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Badge, Row, Col, Avatar, Divider } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Row gutter={20}>\n      <Col fixed>\n        <Badge count={9}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n      <Col fixed>\n        <Badge count={100}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n      <Col>\n        <Badge dot count={9}>\n          <Avatar shape="square" size="large" />\n        </Badge>\n      </Col>\n    </Row>\n    <Divider />\n    <Badge count={12}>\n      \u8bc4\u8bba\n    </Badge>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u5c01\u9876\u6570\u5b57\n\n\u4e0d\u5305\u88f9\u4efb\u4f55\u5143\u7d20\u5373\u662f\u72ec\u7acb\u4f7f\u7528\uff0c\u53ef\u81ea\u5b9a\u6837\u5f0f\u5c55\u73b0\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Badge, Row, Col, Avatar, Divider } from \'uiw\';\n\nconst styl={ marginRight: 20, display: \'inline-block\' }\n\nReactDOM.render(\n  <Row gutter={20}>\n    <Col fixed>\n      <Badge count={99}>\n        <Avatar shape="square" size="large" />\n      </Badge>\n    </Col>\n    <Col fixed>\n      <Badge count={100} style={{ backgroundColor: \'#87d068\' }}>\n        <Avatar shape="square" size="large" />\n      </Badge>\n    </Col>\n    <Col fixed>\n      <Badge count={99} max={10} style={styl}>\n        <Avatar shape="square" size="large" />\n      </Badge>\n    </Col>\n    <Col fixed>\n      <Badge count={100} max={999} style={styl}>\n        <Avatar shape="square" size="large" />\n      </Badge>\n    </Col>\n    <Col fixed>\n      <Badge count={100} max={999} style={styl}>\n        <Avatar shape="square" size="large" />\n      </Badge>\n    </Col>\n  </Row>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u72ec\u7acb\u4f7f\u7528\n\n\u4e0d\u5305\u88f9\u4efb\u4f55\u5143\u7d20\u5373\u662f\u72ec\u7acb\u4f7f\u7528\uff0c\u53ef\u81ea\u5b9a\u6837\u5f0f\u5c55\u73b0\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Badge, Row, Col } from \'uiw\';\n\nReactDOM.render(\n  <Row gutter={10}>\n    <Col fixed>\n      <Badge count={25} />\n    </Col>\n    <Col fixed>\n      <Badge count={4} style={{ backgroundColor: \'#fff\', color: \'#f04134\', boxShadow: \'rgb(217, 217, 217) 0px 0px 0px 1px inset\' }} /> \n    </Col>\n    <Col fixed>\n      <Badge count={109} style={{ backgroundColor: \'#87d068\' }} /> \n    </Col>\n  </Row>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u5c0f\u7ea2\u70b9\n\n\u4ee5\u7ea2\u70b9\u7684\u5f62\u5f0f\u6807\u6ce8\u9700\u8981\u5173\u6ce8\u7684\u5185\u5bb9\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Badge } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Badge dot style={{ marginRight: 10 }}>\n      \u6570\u636e\u67e5\u8be2\n    </Badge>\n    <Badge dot count={4}>\n      <Icon type=\'mail-o\' />\n    </Badge>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### \u72b6\u6001\u70b9\n\n\u7528\u4e8e\u8868\u793a\u72b6\u6001\u7684\u5c0f\u5706\u70b9\uff0c\u53ef\u4ee5\u8bbe\u7f6e `processing={true}` \u8ba9\u72b6\u6001\u70b9\uff0c\u663e\u793a\u52a8\u753b\u6548\u679c\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Badge } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Badge color="#28a745" />\n    <Badge color="#008EF0" />\n    <Badge color="#dc3545" />\n    <Badge color="#393E48" />\n    <Badge color="#ffc107" />\n    <Badge color="#f95c2b" />\n    <Badge color="#dc3545"/>\n    <Badge color="#c2c2c2"/>\n    <Badge color="#F95C2B" processing />\n    <br />\n    <Badge color="#28a745">Success</Badge>\n    <br />\n    <Badge color="#dc3545">Error</Badge>\n    <br />\n    <Badge color="#c2c2c2">Default</Badge>\n    <br />\n    <Badge color="#008EF0" processing>Processing</Badge>\n    <br />\n    <Badge color="#ffc107">Warning</Badge>\n    <Badge color="#ffc107" processing>Warning</Badge>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## API\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| style | \u9ed8\u8ba4\u8bbe\u7f6e\u8ba1\u6570\u5706\u70b9\u6837\u5f0f\uff0c\u8bbe\u7f6e `color`\uff0c`style` \u8bbe\u7f6e\u5916\u5c42\u8282\u70b9\u6837\u5f0f | Object | - |\n| count | \u5c55\u793a\u7684\u6570\u5b57 | Number | - |\n| max | \u6700\u5927\u503c\uff0c\u8d85\u8fc7\u6700\u5927\u503c\u4f1a\u663e\u793a \'{max}+\' | Number | `99` |\n| dot | \u4e0d\u5c55\u793a\u6570\u5b57\uff0c\u53ea\u6709\u4e00\u4e2a\u5c0f\u7ea2\u70b9 | Boolean | `false` |\n| processing | \u4e0d\u5c55\u793a\u6570\u5b57\uff0c\u53ea\u6709\u4e00\u4e2a\u5c0f\u7ea2\u70b9 | Boolean | - |\n| color | \u8bbe\u7f6e Badge \u4e3a\u72b6\u6001\u70b9\u7684\u989c\u8272 | String | - |\n'}}]);