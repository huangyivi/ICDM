import React from "react";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import { Menu } from "antd";
import Mail from "./views/Mail/Mail";
import Map from "./views/Map/Map";
import {
  MailOutlined,
  SettingOutlined,
  SearchOutlined,
} from "@ant-design/icons";

// less样式
import "./App.less";

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };
  render() {
    const { current } = this.state;
    return (
      <div className="view">
        <Router className="view">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="mail" icon={<MailOutlined />}>
              <Link to="mail">邮箱</Link>
            </Menu.Item>
            <Menu.Item key="map" icon={<SearchOutlined />}>
              <Link to="map">地图</Link>
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<SettingOutlined />} title="二级菜单">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>

          <Route path="/mail" component={Mail}></Route>
          <Route path="/map" component={Map}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
