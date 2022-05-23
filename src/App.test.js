import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe('<App/>', ()=>{
    //DOM되는 과정에서 문제가 없는가?
    it("match snapshot", ()=>{
        const utils = render(<App/>);
        expect(utils.container).toMatchSnapshot();
    })
    //지정한 component들이 DOM과정에서 다 드러났는가?
    it('shows the props correctly',()=>{
        const utils = render(<App/>);
        utils.getByText(/[0-9]/); //근데 이것
    })

})