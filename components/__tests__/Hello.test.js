import { shallow } from "enzyme";
import Hello from "../Hello";

it("expect to render Hello component", () => {
  expect(shallow(<Hello />).length).toEqual(1);
});
