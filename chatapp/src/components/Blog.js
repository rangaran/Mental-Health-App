
import '../App.css';
import React, {useState, useEffect,useRef} from 'react'
import SocialPostCollection from './ui-components/SocialPostCollection'
import ReactiveButton from 'reactive-button';
import Signout from './Signout'
import Res from './Res'
function Blog() {
    const [rr, setR] = useState(false);
    const [state, setState] = useState('idle');
    function clickHandler(e) {
      setR(true)}
    
  return (
    <div>
{rr ? <Res/>: <></>}
{rr ? <></>:<Signout/>}
      {rr ? <></>:<ReactiveButton
            buttonState={state}
            onClick = {clickHandler}
            color={'secondary'}
            idleText={'Go back to services'}
            loadingText={'Loading'}
            successText={'Success'}
            errorText={'Error'}
            type={'button'}
            className={'class1 class2'}
            style={{ borderRadius: '5px'}}
            outline={false}
            shadow={false}
            rounded={false}
            size={'large'}
            block={false}
            messageDuration={2000}
            disabled={false}
            buttonRef={null}
            width={null}
            height={null}
            animation={true}
        />}
   {!rr && <SocialPostCollection isPaginated itemsPerPage={1}/>}
    </div>
  );
}

export default Blog;
