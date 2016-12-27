import * as React from 'react';



export  interface IPropsTest{
    navItems: Array<string>;
}

export default class MenuTest extends React.Component<IPropsTest, {}>{

    public constructor(props:IPropsTest){
        super(props);
    }

    public render(): JSX.Element{
        return (<nav>
            <ul>
            {
                this.props.navItems.map((item) => <li>{item}</li>)
            }
            </ul>
        </nav>);
    };
}