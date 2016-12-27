import * as React from 'react';
import { css } from 'office-ui-fabric-react';

import styles from '../HelloWorld.module.scss';
import { IHelloWorldWebPartProps } from '../IHelloWorldWebPartProps';
import Menu from './Menu';

export interface IHelloWorldProps extends IHelloWorldWebPartProps {
}

export interface IState{
  test: string;
}

export default class HelloWorld extends React.Component<IHelloWorldProps, IState> {
  
  public constructor(props: IHelloWorldProps, state: IState){
    super(); 
    this.state = {
        test: ""
    };
  }

  public componentDidMount(){
    console.log("in component did mount");
    this.setState({
      test: "Hello"
    });
  }

  public _click(){
    this.setState({
      test: "Bonjour"
    });
  }
  
  public render(): JSX.Element {
    console.log(this.state.test);
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={css('ms-Grid-row ms-bgColor-themeDark ms-fontColor-white', styles.row)}>
            <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>
              <span className='ms-font-xl ms-fontColor-white'>
                {this.state.test} Jonathan!
              </span>
              <p className='ms-font-l ms-fontColor-white'>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                {this.props.description}
              </p>
              <span
                className={css('ms-Button', styles.button)}
                 onClick={() => this._click()}
              >
                <span className='ms-Button-label'>Learn more</span>
              </span>
            </div>
          </div>
        </div>
        <Menu navItems={this.props.navItems} />
      </div>
      
    );
  }
}
