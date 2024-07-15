import styles from './Child.module.css'

function Child (){
    return (
       <div>
        Child
        <ul>
            <li class={styles.item}>Child-111</li>
            <li class={styles.item}>Child-222</li>
        </ul>
       </div> 
    )
}

export default Child