import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import LoggedOutHeader from "../../containers/LoggedOutHeader";
import LoggedInHeader from "../../containers/LoggedInHeader";
describe("ListPage component tests", () => {
  it("renders", () => {
    const wrapper = shallow(
      <Header onClickLogo={() => {}} isLoggedIn={true} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should contain LoggedInHeader when logged in", () => {
    const wrapper = shallow(
      <Header onClickLogo={() => {}} isLoggedIn={true} />
    );
    expect(wrapper.contains(<LoggedInHeader />)).toBe(true);
  });

  it("should contain LoggedOutHeader when logged out", () => {
    const wrapper = shallow(
      <Header onClickLogo={() => {}} isLoggedIn={false} />
    );
    expect(wrapper.contains(<LoggedOutHeader />)).toBe(true);
  });
});
