import React, {useEffect, useState, useRef} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from'./Layout.module.css'

export  const Layout = ( {children} ) => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        //let _nubmer = number
        setNumber(number + 1)
    }
    // useEffect(() => {
    //     return(() => {
    //         alert('Component mount')
    //     })
    // }, [number])

    const textareaRef = useRef()

    return (
        <div className={classes.layout_container}>
            <Header/>

            
            {/* <textarea ref = {textareaRef}  ></textarea>
            <input type='button' value={'Increment'} onClick={() => increment()} /> :{number}
            <input type='button' value={'Get textarea value'} onClick={() => console.log('ref', textareaRef.current.value)} /> */}

            <div className={classes.child_container}>
                {children}
            </div>
            <Footer/>
        </div>
    );
}


// class LayoutClass extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             number: 0
//         }
//     }

//     componentDidMount(){
//         //появление компонента
//     }
//     componentDidUpdate(){
//         //обновление состояний компонента
//     }
//     componentWillUnmount(){
//         // Размонтирование компонента
//     }

//     render() {
//         const { number } = this.state
//         return (
//             <div>
//                 <p>class component</p>
//                 <p>state number: {number}</p>
//                 <input type='button' value='incr' onClick={() => this.setState({ number: number + 1 })}/>
//             </div>
//         );
//     }
// }
