// import React from "react";
// import { shallow } from "enzyme";
// import Movielist from "./searchMovie";
// beforeAll(() => {
//   global.fetch = jest.fn();
// });
// let wrapper;
// beforeEach(() => {
//    wrapper = shallow(<Movielist />, { disableLifecycleMethods: true });
// });
// afterEach(() => {
//    wrapper.unmount();
// });
// it("should call api success", 
// (done) => {
// const spyDidMount = jest.spyOn(Movielist.prototype,"componentDidMount");
// fetch.mockImplementation(() => {
//    return Promise.resolve({
//      status: 200,
//      json: () => {
//      return Promise.resolve([
//          {
//         Title: "Star Wars",
//         Year: 1997
//       }]);
//     }
//   });
// });
// const didMount = wrapper.instance().componentDidMount();
// // expecting componentDidMount have been called
// expect(spyDidMount).toHaveBeenCalled();
// didMount.then(() => {
//    // updating the wrapper
//    wrapper.update();
// //    expect(wrapper.find("p.user").text()).toContain("manas");
// //    expect(wrapper.find("spans.loading").length).toBe(0);
//    spyDidMount.mockRestore();
//    fetch.mockClear();
//    done();
// });
// });