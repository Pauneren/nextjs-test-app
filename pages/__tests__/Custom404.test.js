import { shallow } from "enzyme";
import Custom404 from "../Custom404";

it("expect to render Custom404 component", () => {
  expect(shallow(<Custom404 />).length).toEqual(1);
});