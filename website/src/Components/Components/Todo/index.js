import React from 'react';

import { Todos, TextH1, TextH2, TextH3, TextH4, TextH5, TextH6 ,ProgressBarIn, ProgressBarOut} from './styles';


const Todo = props => {
  
  return (
    <>
      <Todos>
        <TextH2>
          {props.tittle}
        </TextH2>
        <TextH5>
          {props.obs}
        </TextH5>     
        <ProgressBarOut>
          <ProgressBarIn progress={props.progressTest}>
            <TextH6 >
              {props.progressTest>=100?"Completed":props.progressTest+"%"}
            </TextH6>          
          </ProgressBarIn>
        </ProgressBarOut>  

        
      </Todos>

    </>
  );
};

export default Todo;
