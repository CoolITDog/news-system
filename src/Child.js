import styles from './Child.module.scss'

function Child (){
    return (
       <div>
        Child
        <ul>
            <li className={styles.item}>Child-111</li>
            <li className={styles.item}>Child-222</li>
        </ul>
       </div> 
    )
}

export default Child