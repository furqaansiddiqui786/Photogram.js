import React from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';

function Photowall(props){
    return(
<div>
        <div className = 'AddMore-Container'>
        <Link className = 'Add-Button' to = '/AddPhoto'> <i class="fas fa-plus-circle addpic"></i> </Link>
        </div>
        <div className = 'photogrid'>
            {props.posts.sort(function(x,y){
                return y.id - x.id
            }).map
            }
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto = {props.onRemovePhoto} />)}
        </div>
</div>
    )
}

export default Photowall;